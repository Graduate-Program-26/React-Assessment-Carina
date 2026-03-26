import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/Shadcn/navigation-menu";
import { ROUTES } from "./routes";
import {
  SignedIn,
  useUser,
  UserButton,
  useAuth,
  useClerk,
} from "@clerk/clerk-react";
import { Button } from "@/components/Shadcn/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function NavigationBar() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const { signOut } = useClerk();
  const { theme, setTheme } = useTheme();

  const displayName =
    user?.firstName ||
    user?.username ||
    user?.primaryEmailAddress?.emailAddress ||
    "";

  const visibleRoutes = ROUTES.filter((route) => {
    if (route.isProtected && !isSignedIn) return false;
    if (!route.isProtected && isSignedIn && route.href === "/login")
      return false;
    return true;
  });

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="flex h-16 items-center justify-between">
      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          {visibleRoutes.map((route) => (
            <NavigationMenuItem key={route.id}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <NavLink to={route.href}>{route.title}</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-3">
        <SignedIn>
          {displayName && <span className="text-sm">Hello {displayName}</span>}
          <UserButton />
          <button
            className="text-sm underline"
            onClick={async () => {
              await signOut({ redirectUrl: "/login" });
            }}
          >
            Log out
          </button>
        </SignedIn>
        <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme}>
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
