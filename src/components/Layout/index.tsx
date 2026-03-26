import { Outlet } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import { RedirectToSignIn, useAuth } from "@clerk/clerk-react";
import { Spinner } from "../Shadcn/spinner";

type LayoutProps = { requiresAuth?: boolean };

const Layout = ({ requiresAuth }: LayoutProps) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (requiresAuth) {
    if (!isLoaded) return <Spinner />;
    if (!isSignedIn) {
      return <RedirectToSignIn redirectUrl="/dashboard" />;
    }
  }
  return (
    <>
      <header className="w-full bg-primary">
        <div className="container mx-auto">
          <NavigationBar />
        </div>
      </header>
      <main className="container mx-auto py-16">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
