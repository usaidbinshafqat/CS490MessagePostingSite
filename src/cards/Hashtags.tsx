import { VaccinesRounded, VapeFree } from "@mui/icons-material";
import * as React from "react";

export function Hashtag(props: any) {
  const message = props.message;
  var returnArray: Array<any> = [];
  var returnString = "";
  const messageSplit = message.split(" ");

  messageSplit.array.forEach((word: any) => {
    if (word.includes("#")) {
      var addToArray = `<a href="#">$word</a>`;
      returnArray.concat(addToArray);
    } else {
      returnArray.concat(word);
    }
  });
  return returnArray;
}
