import MainMenu from "./components/main-menu"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-[250px_1fr] h-screen">
            <MainMenu />
            <div className="overflow-auto py-2 px-4">
                <h1>Welcome back!</h1>
                {children}
            </div>
        </div>
    )
}
