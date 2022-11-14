import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@mui/material";

export const AgeFiltered = (props: any) => {
  const filteredData = props.data;
  return filteredData
    .slice(0, 20)
    .map((user: { FirstName: string; LastName: string }) => {
      return (
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            alignItems: "center",
          }}
        >
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="#" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={`${user.FirstName} ${user.LastName}`}
              ></ListItemText>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        </List>
      );
    });
};
