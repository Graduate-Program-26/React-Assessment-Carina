import { Outlet, useLocation } from "react-router-dom"
import { NavigationBar } from "./NavigationBar"
import { useAuth } from "@clerk/clerk-react"
const Layout = () => {
  return (
    <div className="">
      <header className="w-full bg-primary">
        <div className="container mx-auto">
          <NavigationBar />
        </div>
      </header>
      <main className="container mx-auto py-16">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
