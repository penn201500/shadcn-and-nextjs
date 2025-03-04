"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext } from "react"
import { DrawerContext } from "@/components/ui/drawer"

type Props = {
    children: React.ReactNode
    href: string
}

export default function MenuItem({ children, href }: Props) {
    const { onClose } = useContext(DrawerContext)
    const pathname = usePathname()
    const isActive = pathname === href
    return (
        <Link
            className={cn(
                "block hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground",
                isActive &&
                    "bg-primary hover:bg-primary dark:hover:bg-primary hover:text-foreground text-foreground",
                "h-12",
                "flex items-center"
            )}
            href={href}
            onClick={onClose}>
            {children}
        </Link>
    )
}
