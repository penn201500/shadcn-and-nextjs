import MainMenu from "./components/main-menu"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid md:grid-cols-[250px_1fr] h-screen">
            <MainMenu className="hidden md:flex" />
            <div className="block md:hidden sticky top-0 left-0 bg-background">mobile menu</div>
            <div className="overflow-auto py-2 px-4">
                <h1>Welcome back!</h1>
                {children}
            </div>
        </div>
    )
}
