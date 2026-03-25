import { Spinner } from "@/components/Shadcn/spinner";
import { useUser } from "@clerk/clerk-react";
import { GitHubCalendar } from "react-github-calendar";

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded) return <Spinner />;
  if (!isSignedIn || !user?.username) return null;
  return (
    <div>
      <GitHubCalendar username={user?.username} />
    </div>
  );
}
