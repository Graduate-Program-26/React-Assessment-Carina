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
      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
