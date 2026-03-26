import { RepoCard } from "@/components/Dashboard/RepoCard";
import { Avatar } from "@/components/Shadcn/avatar";
import { Separator } from "@/components/Shadcn/separator";
import { Spinner } from "@/components/Shadcn/spinner";
import { useAuth, useUser } from "@clerk/clerk-react";
import { GitHubCalendar } from "react-github-calendar";

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { getToken } = useAuth();

  console.log(user);

  const fetchDataFromGithub = async () => {
    const token = await getToken();
    console.log(token);
    return token;
  };
  fetchDataFromGithub();

  if (!isLoaded) return <Spinner />;
  if (!isSignedIn || !user?.username) return null;
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col justify-between gap-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-2">
          <div className="flex items-center gap-8">
            <Avatar src={user.imageUrl} size="lg" className="object-cover" />
            <h1 className="text-2xl md:text-6xl">{user?.username}</h1>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm md:gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-medium">Followers</span>
                <span className="text-xs text-muted-foreground">1</span>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col gap-1">
                <span className="font-medium">Following</span>
                <span className="text-xs text-muted-foreground">8</span>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col gap-1">
                <span className="font-medium">Public Repos</span>
                <span className="text-xs text-muted-foreground">5</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>bio</p>
        </div>
      </div>
      <div className="w-sm sm:w-md md:w-full">
        <GitHubCalendar username={user?.username} />
      </div>
      <div className="flex w-full flex-col gap-8 md:flex-row">
        <RepoCard />
        <RepoCard />
      </div>
      {/* Table for recent activity */}
    </div>
  );
}
