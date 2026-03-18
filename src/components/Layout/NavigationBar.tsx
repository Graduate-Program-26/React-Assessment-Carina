import { NavLink } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/Shadcn/navigation-menu"
import type { ReactElement } from "react"
import Home from "@/pages/Home"
import Dashboard from "@/pages/Dashboard"
import { ROUTES } from "./routes"

export function NavigationBar() {
  return (
    <NavigationMenu className="h-16">
      <NavigationMenuList className="gap-4">
        {ROUTES.map((route) => {
          return (
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
                key={route.id}
              >
                <NavLink to={route.href} className="bg-primary">
                  {route.title}
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
