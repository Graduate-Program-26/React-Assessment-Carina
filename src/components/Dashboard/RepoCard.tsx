import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Shadcn/card";

export function RepoCard() {
  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle>Repo Title</CardTitle>
        <CardDescription className="line-clamp-2">Description</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p>Language</p>
        <p>Last updated:</p>
        <span>*****</span>
      </CardContent>
    </Card>
  );
}
