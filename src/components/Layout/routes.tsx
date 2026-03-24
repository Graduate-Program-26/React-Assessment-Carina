import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import { UserSearch } from "lucide-react";
import type { ReactElement } from "react";

export const ROUTES: {
  id: number;
  title: string;
  href: string;
  component: ReactElement;
  isIndex: boolean;
  isProtected: boolean;
}[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    component: <Home />,
    isIndex: true,
    isProtected: false,
  },
  {
    id: 2,
    title: "Dashboard",
    href: "/dashboard",
    component: <Dashboard />,
    isIndex: false,
    isProtected: true,
  },
  {
    id: 3,
    title: "Login",
    href: "/login",
    component: <Login />,
    isIndex: false,
    isProtected: false,
  },
  {
    id: 4,
    title: "Search User",
    href: "/user-searcg",
    component: <UserSearch />,
    isIndex: false,
    isProtected: true,
  },
];
