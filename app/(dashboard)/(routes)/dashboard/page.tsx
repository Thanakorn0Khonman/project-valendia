"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { Open_Sans } from "next/font/google";
import { useRouter } from "next/navigation";

const opensans = Open_Sans({ weight: "400", preload: false, });

const tools = [
  {
    lable: "Conversation",
    icon: MessageSquare,
    color: "text-black",
    bgColor: "bg-black/10",
    href: "/conversation"
  },
  {
    lable: "Music Generation",
    icon: Music,
    color: "text-black",
    bgColor: "bg-black/10",
    href: "/conversation"
  },
  {
    lable: "Image Generation",
    icon: ImageIcon,
    color: "text-black",
    bgColor: "bg-black/10",
    href: "/conversation"
  },
  {
    lable: "Video Generation",
    icon: VideoIcon,
    color: "text-black",
    bgColor: "bg-black/10",
    href: "/conversation"
  },
  {
    lable: "Code Generation",
    icon: Code,
    color: "text-black",
    bgColor: "bg-black/10",
    href: "/conversation"
  },


]

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className={cn("text-2xl md:text-5xl text-white font-bold text-center", opensans)}>
          Explore the ultimate AI playground
        </h2>
        <p className="text-muted-foreground text-[#A1A1AA] font-light text-sm md:text-lg text-center">Please noted, this conversation may generate offensive, inappropriate, or harmful content.</p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.lable}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}
