import { db } from "@/config/db";
import { chartTable, frameTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get('projectId');
    const frameId = searchParams.get('frameId'); 

    const frameResult=await db.select().from(frameTable).where(
        //@ts-ignore
        eq(frameTable.frameId,frameId)
    );
    const chatResult=await db.select().from(chartTable).where(
        //@ts-ignore
        eq(chartTable.frameId,frameId)
    );

    const finalResult={
        ...frameResult[0],
        chatMessages:chatResult[0].chatMessage
    }

    return NextResponse.json(finalResult);

}
