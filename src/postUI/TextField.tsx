import { TextField } from "@mui/material";
import { useState, useCallback } from "react";
import { MentionsInput, Mention } from "react-mentions";

export const InputTextField = () => {
  const data = [
    {
      id: "1",
      display: "John Doe",
    },
    {
      id: "2",
      display: "Jane Doe",
    },
    {
      id: "3",
      display: "Jack Doe",
    },
  ];

  const [value, setValue] = useState("");

  return (
    // <MentionsInput
    //   value={value}
    //   placeholder={"Mention people using '@'"}
    //   a11ySuggestionsListLabel={"Suggested mentions"}
    //   defaultValue="Hello @johndoe"
    // >
    //   <Mention data={data} trigger="@" />
    // </MentionsInput>

    <TextField />
  );
};
