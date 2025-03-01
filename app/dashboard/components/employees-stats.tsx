import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User } from "lucide-react"
import Link from "next/link"

export default function EmployeesStats() {
    return (
        <div className="grid lg:grid-cols-3 gap-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Total employees</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <User size={24} />
                        <div className="text-5xl font-bold">100</div>
                    </div>
                    <div>2</div>
                    <Button size="xs" asChild>
                        <Link href="/dashboard/employees">View all</Link>
                    </Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Employee present</CardTitle>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Employee of the month</CardTitle>
                </CardHeader>
            </Card>
        </div>
    )
}
