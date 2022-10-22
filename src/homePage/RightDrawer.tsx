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
  const data = [
    {
      name: "Profile",
      icon: <AccountCircle />,
    },
    { name: "Logout", icon: <ExitToApp /> },
    { name: "Settings", icon: <SettingsRounded /> },
  ];

  const getList = () => {
    return (
      <Box sx={{ width: 250 }}>
        {data.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
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
