"use client"
import React, { useEffect, useState } from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"

  import { cn } from "@/lib/utils";


  
interface ChatLayoutProps {
    defaultLaout: number[] | undefined
}
const ChatLayout = ({defaultLaout = [320, 480]}:ChatLayoutProps) => {
    const [isColapssed, setIsCollapsed] = useState(false)
    const [isMobail, setIsMobail] = useState(false)

    useEffect(()=>{
        const screenWidth = () =>{
            setIsMobail(window.innerWidth <= 768)
        };
        screenWidth();
        window.addEventListener("resize", screenWidth);
        return ()=> {window.removeEventListener("resize", screenWidth)}


        },[]
    )
  return (
    <ResizablePanelGroup 
    direction="horizontal" 
    className='bg-background h-full items-stretch rounded-lg'
    onLayout={(sizes:number[])=>{
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
    }}
    >
  <ResizablePanel defaultSize={defaultLaout[0]}
  collapsedSize={8}
  collapsible={true}
  minSize={isMobail ? 0: 24}
  maxSize={isMobail ? 8 : 30}
  onCollapse={() => {
    setIsCollapsed(true);
    document.cookie = `react-resizable-panels:collapsed=true;`;
}}
onExpand={() => {
    setIsCollapsed(false);
    document.cookie = `react-resizable-panels:collapsed=false;`;
}}
className={cn(isColapssed && "min-w-[80px] transition-all duration-300 ease-in-out")}>
One</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={defaultLaout[1]} 
  collapsedSize={8}
  collapsible={true}>Two</ResizablePanel>
</ResizablePanelGroup>

  )
}

export default ChatLayout