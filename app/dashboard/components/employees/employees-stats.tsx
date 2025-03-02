import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
    AlertTriangleIcon,
    BadgeCheckIcon,
    Laptop,
    PartyPopperIcon,
    User,
    UserCheck2Icon,
    UserRoundXIcon,
} from "lucide-react"
import Link from "next/link"
import cm from "@/public/images/cm.jpg"
import Image from "next/image"
import WorkLocationTrends from "./work-location-trends"

export default function EmployeesStats() {
    const totalEmployees = 100
    const employeesPresent = 60
    const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100

    return (
        <>
            <div className="grid lg:grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Total employees</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <User size={24} />
                            <div className="text-5xl font-bold">{totalEmployees}</div>
                        </div>
                        <div>
                            <Button
                                size="xs"
                                asChild>
                                <Link href="/dashboard/employees">View all</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Employee present</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                        <div className="flex gap-2">
                            {employeesPresentPercentage >= 75 ? (
                                <UserCheck2Icon />
                            ) : (
                                <UserRoundXIcon />
                            )}
                            <div className="text-5xl font-bold">{employeesPresent}</div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        {employeesPresentPercentage >= 75 ? (
                            <span className="flex items-center gap-1 text-xs text-green-500">
                                <BadgeCheckIcon size={16} />
                                {employeesPresentPercentage}% of employees are present
                            </span>
                        ) : (
                            <span className="flex items-center gap-1 text-xs text-red-500">
                                <AlertTriangleIcon size={16} />
                                Only {employeesPresentPercentage}% of employees are present
                            </span>
                        )}
                    </CardFooter>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-base">Employee of the month</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                        <Avatar>
                            <Image
                                src={cm}
                                alt="Employee of the month avatar"
                            />
                            <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <div className="text-2xsl font-bold">CM is here!</div>
                    </CardContent>
                    <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
                        <PartyPopperIcon
                            size={16}
                            className="text-pink-500"
                        />
                        <span className="text-xs">Congratulations to CM</span>
                    </CardFooter>
                </Card>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base flex items-center">
                        <Laptop
                            size={24}
                            className="mr-2"
                        />
                        Employee work location trends
                    </CardTitle>
                </CardHeader>
                <CardContent className="pl-0">
                    <WorkLocationTrends />
                </CardContent>
            </Card>
        </>
    )
}
