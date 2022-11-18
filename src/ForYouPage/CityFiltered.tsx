import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";

export const CityFiltered = (props: any) => {
  const filteredData = props.data;
  console.log(filteredData);
  return filteredData
    .slice(0, 20)
    .map((user: { FirstName: string; LastName: string; Username: string }) => {
      return (
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            alignItems: "center",
          }}
        >
          <>
            <ListItemButton
              href={`/ProfilePage/${user.Username}`}
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#453750" }} aria-label="profile pic" />
              </ListItemAvatar>
              <ListItemText
                primary={`${user.FirstName} ${user.LastName}`}
              ></ListItemText>
            </ListItemButton>
            <Divider variant="inset" component="li" />
          </>
        </List>
      );
    });
};
