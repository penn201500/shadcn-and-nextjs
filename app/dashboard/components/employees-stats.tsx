import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
    AlertTriangleIcon,
    BadgeCheckIcon,
    User,
    UserCheck2Icon,
    UserRoundXIcon,
} from "lucide-react"
import Link from "next/link"

export default function EmployeesStats() {
    const totalEmployees = 100
    const employeesPresent = 60
    const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100

    return (
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
                        {employeesPresentPercentage >= 75 ? <UserCheck2Icon /> : <UserRoundXIcon />}
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
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Employee of the month</CardTitle>
                </CardHeader>
            </Card>
        </div>
    )
}
