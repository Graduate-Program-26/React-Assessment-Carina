import React from "react";
import { Button } from "@/components/Shadcn/button";
import { ButtonGroup } from "@/components/Shadcn/button-group";
import { Field, FieldLabel } from "@/components/Shadcn/field";
import { Input } from "@/components/Shadcn/input";

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

function SearchInput({ value, onClick, onChange }: SearchInputProps) {
  return (
    <Field>
      <FieldLabel htmlFor="username">Search by username</FieldLabel>
      <ButtonGroup>
        {/* TODO: UI error handling */}
        <Input
          id="username"
          placeholder="Type to search..."
          value={value}
          onChange={onChange}
        />
        <Button onClick={onClick}>Search</Button>
      </ButtonGroup>
    </Field>
  );
}

export default SearchInput;
