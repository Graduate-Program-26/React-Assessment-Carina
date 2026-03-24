import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserByUsername } from "@/api/users";
import SearchInput from "@/components/SearchInput";

function UserSearch() {
  const [usernameInput, setUsernameInput] = useState("");
  const [submitUsername, setSubmitUsername] = useState<string | null>(null);

  const { data, isPending, error } = useQuery({
    queryKey: ["user", submitUsername],
    queryFn: () => getUserByUsername(submitUsername as string),
    enabled: !!submitUsername,
  });
  console.log(data);
  return (
    <div>
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
    </div>
  );
}

export default UserSearch;
