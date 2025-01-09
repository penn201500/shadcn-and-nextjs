"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { PersonStandingIcon } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
    return (
        <>
            <PersonStandingIcon size={50} />
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter className="justify-between">
                    <small>Don&apos;t have an account?</small>
                    <Button
                        asChild
                        variant="outline"></Button>
                    <Button
                        asChild
                        variant="outline"
                        size="sm">
                        <Link href="/sign-up">Sign Up</Link>
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}
