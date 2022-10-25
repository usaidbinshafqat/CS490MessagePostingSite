import { ExitToApp, SettingsRounded, AccountCircle } from "@mui/icons-material";
import {
  Box,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { actions } from "../store/slice";

export const RightDrawer = () => {
  const open = useAppSelector((state) => state.reducers.drawerOpen);
  const dispatch = useAppDispatch();

  const getList = () => {
    return (
      <Box sx={{ width: 250 }}>
        <ListItem button onClick={() => console.log("Logging Profile")}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button onClick={() => console.log("Logging Logout")}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
        <ListItem button onClick={() => console.log("Logging Settings")}>
          <ListItemIcon>
            <SettingsRounded />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </Box>
    );
  };

  return (
    <div>
      <Drawer
        open={open}
        onClose={() => dispatch(actions.toggleDrawer())}
        anchor="right"
      >
        {getList()}
      </Drawer>
    </div>
  );
};
