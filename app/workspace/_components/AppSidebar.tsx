"use client"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"


export function AppSidebar() {
  const [projectList,setProjectList]=useState([]);
  return (
    <Sidebar>
      <SidebarHeader >
        <div className="flex items-center gap-1">
          <Image src={'/logo.svg'} alt='logo' width={35} height={35} />
          <h2 className='font-bold text-xl'>AI Website Generator</h2>
        </div>
        <Link href={'/workspace'}>
        <Button className="w-full">
          + Add new project
        </Button>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2">
          <SidebarGroup>
            <SidebarGroupLabel>
              Your Projects
            </SidebarGroupLabel>
            {projectList.length===0 && 
            <h2 className="text-sm px-2 text-gray-500">No projects found</h2>}
          </SidebarGroup>

        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>

    </Sidebar>
  )
}