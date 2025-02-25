import { Group, Home, Settings, User } from "lucide-react"
import MenuTitle from "./menu-title"
import MenuItem from "./menu-item"

export default function MainMenu() {
    return (
        <div className="bg-muted overflow-auto p-4">
            <div className="border-b dark:border-b-black border-b-zinc-300 pb-4">
                <MenuTitle />
            </div>
            <div className="mt-2">
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
        </div>
    )
}
