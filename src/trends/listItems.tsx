import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Link,
  ListItemButton,
} from "@mui/material";

export const ListItems = (props: any) => {
  const data = props.data;
  return data.slice(0, 20).map((value: { HashTag: string; HashTagID: any }) => {
    return (
      <>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            alignItems: "center",
          }}
        >
          <ListItemButton
            href={`/Hashtag/${value.HashTag}`}
            alignItems="flex-start"
          >
            <ListItemAvatar>
              <Avatar alt="#" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText primary={`#${value.HashTag}`}></ListItemText>
          </ListItemButton>
          <Divider variant="inset" component="li" />
        </List>
      </>
    );
  });
};
