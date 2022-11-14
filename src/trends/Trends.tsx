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
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ListItems } from "./listItems";
import { ListFiltered } from "./trendsFiltered";
import { default as Axios } from "axios";

export const Trends = (props: any) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const getTrendsData = () => {
    Axios.get("http://localhost:3000/hashtag").then((response: any) => {
      setData(response.data);
    });
  };

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

  useEffect(() => {
    getTrendsData();
  }, []);

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
        {wordEntered.length === 0 ? (
          <ListItems data={data}></ListItems>
        ) : (
          <ListFiltered data={filteredData}></ListFiltered>
        )}
      </div>
    </div>
  );
};
