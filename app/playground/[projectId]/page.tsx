"use client"
import React, { useEffect, useState } from 'react'
import PlaygroundHeader from '../_components/PlaygroundHeader'
import ChatSection from '../_components/ChatSection'
import WebsiteDesign from '../_components/WebsiteDesign'
import ElementSettingSection from '../_components/ElementSettingSection'
import { useParams, useSearchParams } from 'next/navigation'
import axios from 'axios'

export type Frame={
    projectId:string;
    frameId:string;
    designCode:string;
    chatMessages:Messages[];
}
export type Messages={
    role:string;
    content:string;
} 

function PlayGround() {
    const {projectId}=useParams();
    const params=useSearchParams();
    const frameId=params.get('frameId');
    const [frameDetails,setFrameDetails]=useState<Frame>();
    console.log("Project ID:",projectId);
    console.log("Frame ID:",frameId);

    useEffect(()=>{
       frameId && GetFrameDetails();
    },[frameId]);


    const GetFrameDetails=async()=>{
        const result=await axios.get(`/api/frames?projectId=${projectId}&frameId=${frameId}`)
        console.log("Frame Details:",result.data);
        setFrameDetails(result.data);
    }

    const SendMessage=(userInput:string)=>{

    }
  return (
    <div>
      <PlaygroundHeader/>
        <div className='flex'>
        {/*Chat Section*/}
            <ChatSection messages={frameDetails?.chatMessages??[]}
            onSend={(input:string)=>SendMessage(input)}/>
        {/*Website Design Section*/}
        <WebsiteDesign/>

        {/*Settings Section*/}
        <ElementSettingSection/>
      </div>

    </div>
  )
}

export default PlayGround
