import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Popover,
} from "@mui/material";
import React, { useState } from "react";

export const SearchBarUMobile = (props: any) => {
  const data = props.data;
  const [anchor, setAnchor] = useState(null);
  const [open, setOpen] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleClick = (onClick: any) => {
    setAnchor(onClick.currentTarget);
    setOpen(true);
  };

  const handleClose = (onClick: any) => {
    setAnchor(null);
    setOpen(false);
  };

  const handleFilter = (e: { target: { value: any } }) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter(
      (value: { FirstName: string; LastName: string; Username: string }) => {
        return (
          value.FirstName.toLowerCase().includes(searchWord.toLowerCase()) ||
          value.LastName.toLowerCase().includes(searchWord.toLowerCase()) ||
          value.Username.toLowerCase().includes(searchWord.toLowerCase())
        );
      }
    );
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <React.Fragment>
      <IconButton color="inherit" onClick={handleClick}>
        <SearchIcon />
      </IconButton>
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
                  onChange={handleFilter}
                  value={wordEntered}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  {wordEntered.length === 0 ? (
                    <SearchIcon />
                  ) : (
                    <CloseIcon onClick={clearInput} />
                  )}
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
              {filteredData.map(
                (user: { FirstName: string; LastName: string }) => {
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
                        <ListItemText
                          primary={`${user.FirstName} ${user.LastName} `}
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </>
                  );
                }
              )}
            </List>
          </div>
        </div>
      </Popover>
    </React.Fragment>
  );
};
