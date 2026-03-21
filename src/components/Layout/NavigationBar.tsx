import { NavLink } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/Shadcn/navigation-menu"
import { ROUTES } from "./routes"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  useUser,
  UserButton,
} from "@clerk/clerk-react"

type NavigationBarProps = {
  displayName?: string
}

export function NavigationBar({ displayName }: NavigationBarProps) {
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
      <SignedIn>
        {displayName && <span className="text-sm">Hello {displayName}</span>}
        <SignOutButton redirectUrl="/login">
          <button className="text-sm underline">Log out</button>
        </SignOutButton>
      </SignedIn>
    </NavigationMenu>
  )
}
