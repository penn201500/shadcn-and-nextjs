import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    ListCheckIcon,
    UsersIcon,
} from "lucide-react"
import Link from "next/link"
import cm from "@/public/images/cm.jpg"
import Image from "next/image"

export default function TeamsStats() {
    return (
        <>
            <div className="grid lg:grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Total teams</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <UsersIcon size={24} />
                            <div className="text-5xl font-bold">8</div>
                        </div>
                        <div>
                            <Button
                                size="xs"
                                asChild>
                                <Link href="/dashboard/teams">View all</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Team leaders</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                        Content
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-base">Team distribution</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">Content</CardContent>
                </Card>
            </div>
            <Card className="mt-4">
                <CardHeader>
                    <CardTitle className="text-base flex items-center">
                        <ListCheckIcon
                            size={24}
                            className="mr-2"
                        />
                        Support tickets resolved
                    </CardTitle>
                </CardHeader>
                <CardContent className="pl-0">graph</CardContent>
            </Card>
        </>
    )
}
