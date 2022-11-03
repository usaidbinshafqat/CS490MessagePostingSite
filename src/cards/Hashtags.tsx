/* eslint-disable no-lone-blocks */
import { VaccinesRounded, VapeFree } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonBase,
  Link,
  ListItem,
  Typography,
} from "@mui/material";
import "./index.css";

export function HashtagButton(props: any) {
  const message = props.message;
  const messageSplit = message.split(" ");

  if (message.includes("#")) {
    return messageSplit.map((word: string) => {
      if (word.includes("#")) {
        {
          // push data to back end here (if hashtag is new)
          return (
            <ButtonBase
              href="/Login"
              className="hash-button"
              sx={{ color: "#C197D2" }}
            >
              {word}&nbsp;
            </ButtonBase>
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
