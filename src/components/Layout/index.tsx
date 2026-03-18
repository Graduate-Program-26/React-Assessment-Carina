import { Outlet } from "react-router-dom"
import { NavigationBar } from "./NavigationBar"
const Layout = () => {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
