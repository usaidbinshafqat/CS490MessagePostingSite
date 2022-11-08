import {
  Paper,
  IconButton,
  InputBase,
  Button,
  Popover,
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  List,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";

export const SearchBarU = (props: any) => {
  const data = props.data;
  const [anchor, setAnchor] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (onClick: any) => {
    setAnchor(onClick.currentTarget);
    setOpen(true);
  };

  const handleClose = (onClick: any) => {
    setAnchor(null);
    setOpen(false);
  };

  useEffect(() => {
    {
      data.map((user: { name: string }) => {
        console.log(user.name);
      });
    }
  });

  return (
    <React.Fragment>
      <Button
        color="inherit"
        onClick={handleClick}
        endIcon={<SearchIcon> </SearchIcon>}
      >
        Search users
      </Button>
      <Popover open={open} anchorEl={anchor} onClose={handleClose}>
        <div>
          <div>
            <div style={{ alignContent: "center" }}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search users"
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </div>
          </div>
          <div>
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                alignItems: "center",
              }}
            >
              {data.map((user: { name: string }) => {
                return (
                  <>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          sx={{ bgcolor: "#453750" }}
                          aria-label="profile pic"
                        >
                          U
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={user.name} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                );
              })}
            </List>
          </div>
        </div>
      </Popover>
    </React.Fragment>
  );
};
