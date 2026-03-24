// Card component curtesy of https://www.shadcnblocks.com/block/user-profile1
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/Shadcn/avatar";
import { Button } from "@/components/Shadcn/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/Shadcn/card";
import { Separator } from "./Shadcn/separator";

interface UserProfileProps {
  name: string;
  avatar?: string;
  bio?: string | null;
  followers?: number;
  following?: number;
  publicRepos?: number;
  profileUrl?: string;
}

// TODO: Convert followers and following above 1000 to show 1k

const UserProfileCard = ({
  name,
  avatar,
  bio,
  followers,
  following,
  publicRepos,
  profileUrl,
}: UserProfileProps) => {
  return (
    <Card className="flex w-full max-w-sm justify-center rounded-2xl border-2 bg-card p-8 text-center">
      <CardHeader className="pb-0">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="size-24">
            <AvatarImage src={avatar} alt={name} className="object-cover" />
            <AvatarFallback className="text-2xl font-semibold">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-2 pb-2">
              <h3 className="text-xl font-semibold">{name}</h3>
            </div>
            <div className="flex items-center gap-2 text-sm md:gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-medium">Followers</span>
                <span className="text-xs text-muted-foreground">
                  {followers}
                </span>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col gap-1">
                <span className="font-medium">Following</span>
                <span className="text-xs text-muted-foreground">
                  {following}
                </span>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col gap-1">
                <span className="font-medium">Public Repos</span>
                <span className="text-xs text-muted-foreground">
                  {publicRepos}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {bio && <p className="text-sm text-muted-foreground">{bio}</p>}
        <div className="flex flex-col items-center text-muted-foreground"></div>
      </CardContent>
      <CardFooter className="w-full">
        <Button size="lg" className="w-full p-2" asChild>
          <a target="_blank" href={profileUrl}>
            Open profile on web
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { UserProfileCard };
