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
import { Sheet, SheetContent, SheetTrigger } from "@/components/Shadcn/sheet";
import { Moon, Sun, Menu } from "lucide-react";
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
    <section className="py-4">
      <div className="container">
        {/* Desktop navbar starts */}
        <div className="hidden h-16 items-center justify-between lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-4">
              {visibleRoutes.map((route) => (
                <NavigationMenuItem key={route.id}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <NavLink to={route.href}>{route.title}</NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-3">
            <SignedIn>
              {displayName && (
                <span className="text-sm">Hello {displayName}</span>
              )}
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
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
        {/* Desktop navbar ends */}

        {/* Mobile navbar  starts*/}
        <div className="flex h-16 items-center justify-between lg:hidden">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tighter">
              Gitboard
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 sm:w-80">
                <nav className="mt-6 flex flex-col gap-3">
                  {visibleRoutes.map((route) => (
                    <NavLink
                      key={route.id}
                      to={route.href}
                      className="rounded-md px-2 py-2 text-sm hover:bg-muted"
                    >
                      {route.title}
                    </NavLink>
                  ))}
                </nav>
                <div className="mt-6 flex items-center gap-3">
                  <SignedIn>
                    {displayName && (
                      <span className="text-sm">Hello {displayName}</span>
                    )}
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
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
}
