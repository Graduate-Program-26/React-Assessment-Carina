import Dashboard from "@/pages/Dashboard"
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import type { ReactElement } from "react"

export const ROUTES: {
  id: number
  title: string
  href: string
  component: ReactElement
  isIndex: boolean
}[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    component: <Home />,
    isIndex: true,
  },
  {
    id: 2,
    title: "Dashboard",
    href: "/dashboard",
    component: <Dashboard />,
    isIndex: false,
  },
  {
    id: 3,
    title: "Login",
    href: "/login",
    component: <Login />,
    isIndex: false,
  },
]
