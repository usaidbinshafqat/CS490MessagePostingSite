/* eslint-disable no-lone-blocks */
import { ButtonBase } from "@mui/material";
import { default as Axios } from "axios";
import { memo, useEffect, useState } from "react";
import "./index.css";

export const Hashtag = (props: any) => {
  const message = props.message;
  const messageSplit = message.split(" ");
  const [ID, setID] = useState(0);
  const [hashtag, setHashtag] = useState("");

  if (message.includes("#") || message.includes("@")) {
    return messageSplit.map((word: string) => {
      if (word.includes("#")) {
        {
          return (
            <ButtonBase
              href={`/Hashtag/${word.slice(1)}`}
              className="hashat-button"
              sx={{ color: "#C197D2" }}
            >
              {word}&nbsp;
            </ButtonBase>
          );
        }
      } else if (word.includes("@")) {
        return (
          <ButtonBase
            href={`/ProfilePage/${word.slice(1)}`}
            className="hashat-button"
            sx={{ color: "#C197D2" }}
          >
            {word}&nbsp;
          </ButtonBase>
        );
      } else {
        {
          return <>{`${word} `}</>;
        }
      }
    });
  } else {
    return message;
  }
};

// export const HashtagButton = memo(Hashtag);

export function HashtagLink(props: any) {
  const message = props.message;
  const messageSplit = message.split(" ");

  if (message.includes("#")) {
    return messageSplit.map((word: string) => {
      if (word.includes("#")) {
        {
          // push data to back end here (if hashtag is new)
          return (
            <a href="/Login" className="hash">
              {word}&nbsp;
            </a>
          );
        }
      } else {
        {
          return <>{`${word} `}</>;
        }
      }
    });
  } else {
    return message;
  }
}
