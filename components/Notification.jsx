"use client";
import Bell from "@/SVG/Bell";
import * as HoverCard from "@radix-ui/react-hover-card";
import { debounce } from "lodash";
import { useState } from "react";

export function Notification(props) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleNotification = (open) => {
    setIsNotificationOpen(open);
  };

  const debouncedToggleNotification = debounce((open) => {
    toggleNotification(open);
  }, 100);

  return (
    <>
      <div className={isNotificationOpen ? "overlay" : ""} />
      <HoverCard.Root
        openDelay={75}
        closeDelay={500}
        onOpenChange={(open) => debouncedToggleNotification(open)}
      >
        <HoverCard.Trigger>
          <Bell className="w-5 h-5 z-50 hover:fill-slate-500 cursor-pointer" />
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content
            className="z-30 data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[400px] rounded-md bg-white shadow-2xl data-[state=open]:transition-all"
            sideOffset={5}
            alignOffset={-150}
            align="bottom"
            onOpenChange={(open) => toggleNotification(open)}
          >
            <HoverCard.Arrow className="border-none fill-slate-400 shadow-lg" />
            <div className="flex flex-col">
              <div className="text-[15px] text-center p-3 font-semibold border-b">
                Your Notification
              </div>
              <div className="p-5 h-40 text-center text-sm">
                You have no new notifications.
              </div>
            </div>
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  );
}
