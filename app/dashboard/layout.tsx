"use client"

import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import MainMenu from "./components/main-menu"
import MenuTitle from "./components/menu-title"
import { MenuIcon } from "lucide-react"
import { useMediaQuery } from "../hooks/use-media-query"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const isDesktop = useMediaQuery("(min-width: 768px)")

    return (
        <div className="grid md:grid-cols-[250px_1fr] h-screen">
            <MainMenu className="hidden md:flex" />
            {!isDesktop && (
                <div className="flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border p-4">
                    <MenuTitle />
                    <Drawer direction="right">
                        <DrawerTrigger>
                            <MenuIcon />
                        </DrawerTrigger>
                        <DrawerTitle className="sr-only">Menu</DrawerTitle>
                        {/* This is a hidden title for screen readers */}
                        <DrawerContent>
                            <MainMenu />
                        </DrawerContent>
                    </Drawer>
                </div>
            )}
            <div className="overflow-auto py-2 px-4">
                <h1>Welcome back!</h1>
                {children}
            </div>
        </div>
    )
}
