import { getAuthenticatedUser, getEvents, getUserRepos } from "@/api/users";
import { EventsTable } from "@/components/Dashboard/EventsTable";
import { RepoCard } from "@/components/Dashboard/RepoCard";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/Shadcn/avatar";
import { Separator } from "@/components/Shadcn/separator";
import { Spinner } from "@/components/Shadcn/spinner";
import { useQuery } from "@tanstack/react-query";
import { GitHubCalendar } from "react-github-calendar";

export default function Dashboard() {
  const { data, isLoading: isLoadingUser } = useQuery({
    queryKey: ["user"],
    queryFn: getAuthenticatedUser,
  });

  const { data: repoData, isLoading: isLoadingRepos } = useQuery({
    queryKey: ["repos"],
    queryFn: getUserRepos,
  });

  const username = data?.data?.login;

  const { data: eventData, isLoading: isLoadingEvents } = useQuery({
    queryKey: ["events", username],
    queryFn: () => getEvents(username as string),
    enabled: Boolean(username),
  });

  const user = data?.data;

  const events = eventData?.data;

  const eventArray = events
    ?.map(({ id, type, repo }) => ({
      id,
      type,
      repo: repo?.name ?? null,
    }))
    .slice(0, 10);

  const top6BySize = repoData?.data
    .sort((a, b) => (b.size ?? 0) - (a.size ?? 0))
    .slice(0, 6);

  console.log(eventArray);

  const isBootstrapping = isLoadingUser || isLoadingRepos || isLoadingEvents;

  if (isBootstrapping) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col justify-between gap-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-2">
          <div className="flex items-center gap-8">
            <Avatar className="size-24">
              <AvatarImage
                src={user?.avatar_url}
                alt={user?.name}
                className="object-cover"
              />
              <AvatarFallback className="text-2xl font-semibold">
                {user?.name ||
                  user?.login
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <h1 className="text-2xl md:text-6xl">{user?.login}</h1>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm md:gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-medium">Followers</span>
                <span className="text-xs text-muted-foreground">
                  {user?.followers}
                </span>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col gap-1">
                <span className="font-medium">Following</span>
                <span className="text-xs text-muted-foreground">
                  {user?.following}
                </span>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col gap-1">
                <span className="font-medium">Public Repos</span>
                <span className="text-xs text-muted-foreground">5</span>
              </div>
            </div>
          </div>
        </div>
        <div>{user?.bio && <p>bio</p>}</div>
      </div>
      <div className="flex w-sm justify-center sm:w-md md:w-full">
        {user && <GitHubCalendar username={user.login} />}
      </div>
      <div className="flex w-full flex-col flex-wrap gap-8 md:flex-row">
        {top6BySize?.map((repo) => {
          return (
            <RepoCard
              key={repo.id}
              title={repo.name}
              description={repo.description}
              language={repo.language}
              lastUpdated={repo.updated_at}
            />
          );
        })}
      </div>
      <div>
        <EventsTable events={eventArray ?? []} />
      </div>
    </div>
  );
}
