"use client";

import Link from "next/link";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ImageIcon, LayoutDashboard, MessageCircleIcon, Music, Settings, Video } from "lucide-react";

const opensans = Open_Sans({ weight: "400", preload: false, })

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-white",
    },
    {
        label: "Coversation",
        icon: MessageCircleIcon,
        href: "/conversation",
        color: "text-white",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image-generation",
        color: "text-white",
    },
    {
        label: "Video Generation",
        icon: Video,
        href: "/video-generation",
        color: "text-white",
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music-generation",
        color: "text-white",
    },
    {
        label: "Code Generation",
        icon: MessageCircleIcon,
        href: "/code-generation",
        color: "text-white",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
        color: "text-white",
    }
]

const Sidebar = () => {
    return (
        <div className="space-y-4 py-4 flex flex-col text-[#A1A1A1] h-full bg-[#09090B]">
            <div className="flex mb-5">
                <div className="px-3 py-2 flex hover:opacity-80 transition-opacity duration-500">
                    <Link href="/dashboard" className="flex items-center pl-3">
                        <div className="relative w-10 h-10">
                            <Image fill alt="Valendia" src="/logo.png"></Image>
                        </div>
                        <h1 className={cn("text-2xl pt-2 text-white", opensans.className)}>
                            A L E N D I A
                        </h1>
                    </Link>
                </div>
            </div>
            <div className="px-6 space-y-1">
                {routes.map((route) => (
                    <Link href={route.href} key={route.href} className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:shadow-white hover:shadow-[0_0px_5px_rgb(0,0,0,0.2)] hover:bg-white/10 rounded-lg transition">
                        <div className="flex items-center flex-1">
                            <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                            {route.label}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;