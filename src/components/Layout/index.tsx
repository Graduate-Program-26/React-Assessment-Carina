import { Outlet } from "react-router-dom"
import { NavigationBar } from "./NavigationBar"
const Layout = () => {
  return (
    <>
      <header className="w-full bg-primary">
        <div className="container mx-auto">
          <NavigationBar />
        </div>
      </header>
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
