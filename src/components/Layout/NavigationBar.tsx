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
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {ROUTES.map((route) => {
            return (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
                key={route.id}
              >
                <NavLink to={route.href}>{route.title}</NavLink>
              </NavigationMenuLink>
            )
          })}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
