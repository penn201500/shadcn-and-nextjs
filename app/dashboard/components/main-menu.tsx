import { Group, Home, Settings, User, Users } from "lucide-react"
import MenuTitle from "./menu-title"
import MenuItem from "./menu-item"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import LightDarkToggle from "@/components/ui/light-dark-toggle"
import { cn } from "@/lib/utils"

export default function MainMenu({ className }: { className?: string }) {
    return (
        <nav className={cn(`bg-muted overflow-auto p-4 flex flex-col`, className)}>
            <header className="border-b dark:border-b-black border-b-zinc-300 pb-4">
                <MenuTitle />
            </header>
            <div className="mt-2 grow">
                <MenuItem href="/dashboard">
                    <span className="flex items-center">
                        <Home className="ml-1 mr-4" />
                        My Dashboard
                    </span>
                </MenuItem>
                <MenuItem href="/dashboard/teams">
                    <span className="flex items-center">
                        <Group className="ml-1 mr-4" /> Teams
                    </span>
                </MenuItem>
                <MenuItem href="/dashboard/employees">
                    <span className="flex items-center">
                        <Users className="ml-1 mr-4" /> Employees
                    </span>
                </MenuItem>
                <MenuItem href="/dashboard/account">
                    <span className="flex items-center">
                        <User className="ml-1 mr-4" /> Account
                    </span>
                </MenuItem>
                <MenuItem href="/dashboard/settings">
                    <span className="flex items-center">
                        <Settings className="ml-1 mr-4" /> Settings
                    </span>
                </MenuItem>
            </div>
            <footer className="flex gap-2 items-center">
                <Avatar>
                    <AvatarFallback className="bg-pink-200 dark:bg-pink-800">Sh</AvatarFallback>
                </Avatar>
                <Link
                    href="/"
                    className="hover:underline">
                    Logout
                </Link>
                <LightDarkToggle className="ml-auto" />
            </footer>
        </nav>
    )
}
