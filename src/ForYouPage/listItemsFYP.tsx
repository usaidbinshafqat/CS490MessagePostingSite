import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";

export const ListItemsFYP = (props: any) => {
  const data = props.data;
  return data
    .slice(0, 20)
    .map((value: { FirstName: string; LastName: string; Username: string }) => {
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
              href={`/ProfilePage/${value.Username}`}
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#453750" }} aria-label="profile pic" />
              </ListItemAvatar>
              <ListItemText
                primary={`${value.FirstName} ${value.LastName}`}
              ></ListItemText>
            </ListItemButton>
            <Divider variant="inset" component="li" />
          </List>
        </>
      );
    });
};
