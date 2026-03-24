import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserByUsername } from "@/api/users";
import SearchInput from "@/components/SearchInput";
import { UserProfileCard } from "@/components/UserProfileCard";

function UserSearch() {
  const [usernameInput, setUsernameInput] = useState("");
  const [submitUsername, setSubmitUsername] = useState<string | null>(null);

  const { data, isPending, error } = useQuery({
    queryKey: ["user", submitUsername],
    queryFn: () => getUserByUsername(submitUsername as string),
    enabled: !!submitUsername,
  });
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <SearchInput
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.currentTarget.value)}
        onClick={() => {
          const trimmedUsername = usernameInput.trim();
          if (trimmedUsername) setSubmitUsername(trimmedUsername);
        }}
      />
      {isPending && <p>Loading…</p>}
      {error && <p>{(error as Error).message}</p>}
      {submitUsername && data === null && <p>No user found.</p>}
      {data && (
        <UserProfileCard
          name={data.name ? data.name : data.login}
          bio={data.bio}
          avatar={data.avatar_url}
          followers={data.followers}
          following={data.following}
          publicRepos={data.public_repos}
          profileUrl={data.html_url}
        />
      )}
    </div>
  );
}

export default UserSearch;
