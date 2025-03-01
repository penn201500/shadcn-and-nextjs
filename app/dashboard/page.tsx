import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabsContent } from "@radix-ui/react-tabs"

export default function DashboardPage() {
    return (
        <Tabs>
            <TabsList>
                <TabsTrigger value="employees">Employees stats</TabsTrigger>
                <TabsTrigger value="teams">Teams stats</TabsTrigger>
            </TabsList>
            <TabsContent value="employees">Employees stats</TabsContent>
            <TabsContent value="teams">Teams stats</TabsContent>
        </Tabs>
    )
}
