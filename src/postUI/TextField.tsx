import { useState } from "react";
import { MentionsInput, Mention } from "react-mentions";

export const TextField = () => {
  const data = [
    {
      id: "1",
      display: "John Doe",
    },
  ];

  const [value, setValue] = useState("");
  return (
    <MentionsInput
      singleLine
      value={value}
      placeholder={"Mention people using '@'"}
      a11ySuggestionsListLabel={"Suggested mentions"}
    >
      <Mention data={data} trigger="@" />
    </MentionsInput>
  );
};
