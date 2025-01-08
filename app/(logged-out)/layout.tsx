type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen p-24">
            {children}
        </div>
    )
}
