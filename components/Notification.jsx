"use client";

import Bell from "@/SVG/Bell";
import * as HoverCard from "@radix-ui/react-hover-card";

export function Notification(props) {
  return (
    <HoverCard.Root openDelay={75} closeDelay={150} onOpenChange={(open)=>{
        document.querySelector("main").style = (open)?"filter: brightness(80%);":"filter: brightness(100%);"
    }}>
      <HoverCard.Trigger >
        <Bell className="w-5 h-5 hover:fill-slate-500 cursor-pointer" />
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className=" data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[400px] rounded-md bg-white shadow-2xl data-[state=open]:transition-all"
          sideOffset={5}
          alignOffset={-150}
          align="bottom"
        >
        <HoverCard.Arrow className=" border-none fill-slate-400 shadow-lg "/>
          <div className="flex flex-col">
            <div className=" text-[15px] text-center p-3 font-semibold border-b">Your Notification</div>
            <div className="p-5 h-40 text-center text-sm">You have no new notifications.</div>
          </div>

          <HoverCard.Arrow className="fill-white" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
