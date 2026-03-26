import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Shadcn/card";

interface RepoCardProps {
  title: string;
  description?: string | null;
  language?: string | null;
  lastUpdated?: string | null;
}

export function RepoCard({
  title,
  description,
  language,
  lastUpdated,
}: RepoCardProps) {
  const formatDate = (isoDate?: string | null) => {
    if (!isoDate) return "-";
    const date = new Date(isoDate);
    const formatted = isNaN(date.getTime()) ? "-" : date.toLocaleDateString();
    return formatted;
  };
  return (
    <Card className="mx-auto shrink lg:w-[45%]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description ?? "No description available"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p>{language ?? "-"}</p>
        <p>Last updated: {formatDate(lastUpdated)}</p>
      </CardContent>
    </Card>
  );
}
