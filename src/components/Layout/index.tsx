import { Outlet } from "react-router-dom"
import { NavigationBar } from "./NavigationBar"
import { useUser } from "@clerk/clerk-react"
const Layout = () => {
  const { user } = useUser()
  const displayName = user?.firstName || user?.username || ""
  return (
    <div className="">
      <header className="w-full bg-primary">
        <div className="container mx-auto">
          <NavigationBar displayName={displayName} />
        </div>
      </header>
      <main className="container mx-auto py-16">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
