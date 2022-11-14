import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@mui/material";

export const ListItemsFYP = (props: any) => {
  const data = props.data;
  return data
    .slice(0, 20)
    .map((value: { FirstName: string; LastName: string }) => {
      return (
        <>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              alignItems: "center",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="#" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={`${value.FirstName} ${value.LastName}`}
              ></ListItemText>
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </>
      );
    });
};
