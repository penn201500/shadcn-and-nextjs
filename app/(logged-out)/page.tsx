import { Button } from "@/components/ui/button"
import { PersonStandingIcon } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
    return (
        <>
            <h1 className="flex gap-2 items-center">
                <PersonStandingIcon
                    size={45}
                    className="text-pink-500"
                />
                Shadcn UI
            </h1>
            <p>The best dashboard to manage customer support</p>
            <div className="flex items-center gap-2 mt-4">
                <Button asChild>
                    <Link href="/login">Log In</Link>
                </Button>
                <small>or</small>
                <Button
                    variant={"outline"}
                    asChild>
                    <Link href="/sign-up">Sign Up</Link>
                </Button>
            </div>
        </>
    )
}
