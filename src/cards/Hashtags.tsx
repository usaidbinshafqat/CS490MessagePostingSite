/* eslint-disable no-lone-blocks */
import { ButtonBase } from "@mui/material";
import "./index.css";
import { default as Axios } from "axios";
import { useState, memo } from "react";
import { FastfoodOutlined, WorkRounded } from "@mui/icons-material";

const Hashtag = (props: any) => {
  const message = props.message;
  const messageSplit = message.split(" ");
  if (message.includes("#") || message.includes("@")) {
    return messageSplit.map((word: string) => {
      if (word.includes("#")) {
        {
          return (
            <ButtonBase
              href="/Login"
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
            href="/Login"
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

export const HashtagButton = memo(Hashtag);

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
