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
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { PersonStandingIcon } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z
    .object({
        email: z.string().email(),
        accountType: z.enum(["personal", "company"]),
        companyName: z.string().optional(),
        numberOfEmployees: z.coerce.number().optional(),
    })
    .superRefine((data, ctx) => {
        if (data.accountType === "company" && !data.companyName) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["companyName"],
                message: "Company name is required",
            })
        }
        if (
            data.accountType === "company" &&
            (!data.numberOfEmployees || data.numberOfEmployees < 1)
        ) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["numberOfEmployees"],
                message: "Valid number of employees is required",
            })
        }
    })

function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
}

export default function SignUpPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            accountType: "personal",
            companyName: "",
            numberOfEmployees: undefined,
        },
    })

    const accountType = form.watch("accountType")

    return (
        <>
            <PersonStandingIcon size={50} />
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Sign up for a new account</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col gap-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Email"
                                                type="email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="accountType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Account type</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select an account type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="personal">Personal</SelectItem>
                                                <SelectItem value="company">Company</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription></FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {accountType === "company" && (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="companyName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Company Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Company Name"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="numberOfEmployees"
                                        render={({ field: { onChange, value, ...field } }) => (
                                            <FormItem>
                                                <FormLabel>Number of Employees</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Number of Employees"
                                                        value={value ?? ""} // Handle undefined case
                                                        onChange={e => {
                                                            const val = e.target.value
                                                            onChange(val ? Number(val) : undefined)
                                                        }}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </>
                            )}

                            <Button type="submit">Sign Up</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="justify-between">
                    <small>Already have an account?</small>
                    <Button
                        asChild
                        variant="outline"></Button>
                    <Button
                        asChild
                        variant="outline"
                        size="sm">
                        <Link href="/login">Login</Link>
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}
