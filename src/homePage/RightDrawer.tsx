import { ExitToApp, SettingsRounded, AccountCircle } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { actions } from "../store/slice";
import { Link } from "react-router-dom";

export const RightDrawer = () => {
  const open = useAppSelector((state) => state.reducers.drawerOpen);
  const dispatch = useAppDispatch();

  const getList = () => {
    return (
      <Box sx={{ width: 250 }}>
        <Link to="/Profile">
        <ListItem button onClick={() => console.log("Logging Profile")}>
        
          <ListItemIcon>
            
            <AccountCircle />
            
          </ListItemIcon>
          
          <ListItemText primary="Profile" />
        </ListItem>
        </Link>
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

  if (window.screen.width > 600) {
  }

  return (
    <div>
      {window.screen.width > 600 ? (
        <Drawer
          sx={{
            width: 250,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 250,
              boxSizing: "border-box",
            },
          }}
          open={true}
          anchor="right"
          variant="persistent"
        >
          <Toolbar />
          <Divider />
          {getList()}
        </Drawer>
      ) : (
        <Drawer
          open={open}
          onClose={() => dispatch(actions.toggleDrawer())}
          anchor="right"
        >
          {getList()}
        </Drawer>
      )}
    </div>
  );
};
