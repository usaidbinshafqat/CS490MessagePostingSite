import { useState } from "react";
import { Mention, MentionsInput } from "react-mentions";
import mentionsStyles from "./mentionsStyles";
import mentionsInputStyles from "./mentionsInputStyles";
import merge from "lodash/merge";

export const InputTextField = () => {
  const [value, setValue] = useState("");

  let customStyle = merge({}, mentionsInputStyles, {
    input: {
      height: 80,
      overflow: "auto",
    },
    highlighter: {
      height: 80,
      overflow: "hidden",
      boxSizing: "border-box",
    },
  });

  const users = [
    {
      id: "isaac",
      display: "Isaac Newton",
    },
    {
      id: "sam",
      display: "Sam Victor",
    },
    {
      id: "emma",
      display: "Emmanuel",
    },
  ];

  return (
    <div className="App">
      <MentionsInput
        style={customStyle}
        value={value}
        placeholder={"Mention people using '@'"}
        a11ySuggestionsListLabel={"Suggested mentions"}
        onChange={(e) => setValue(e.target.value)}
      >
        <Mention style={mentionsStyles} data={users} trigger={"@"} />
      </MentionsInput>
    </div>
  );
};

//how to get data out of this: https://stackblitz.com/edit/react-mentions?file=index.js
