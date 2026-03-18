import { Link } from "react-router"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { id: number; title: string; href: string }[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Dashboard",
    href: "/dashboard",
  },
]

export function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {components.map((component) => {
            return (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
                key={component.id}
              >
                <Link to={component.href}>{component.title}</Link>
              </NavigationMenuLink>
            )
          })}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
