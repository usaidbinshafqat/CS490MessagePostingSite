import {
  Paper,
  InputBase,
  IconButton,
  List,
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { TrendsList } from "./TrendsList";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export const Trends = (props: any) => {
  const data = props.data;
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e: { target: { value: any } }) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value: { HashTag: string }) => {
      return value.HashTag.toLowerCase().includes(searchWord.toLowerCase());
    });
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
              placeholder="Search trends"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={handleFilter}
              value={wordEntered}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
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
          {filteredData.slice(0, 5).map((value: { HashTag: string }) => {
            return (
              <>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="#" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText primary={`#${value.HashTag}`}></ListItemText>
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            );
          })}
        </List>
      </div>
    </div>
  );
};
