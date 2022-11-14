import {
  Avatar,
  Divider,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import LeftTabs from "../homePage/LeftTabs";
import { TopAppBar } from "../homePage/TopAppBar";
import { Trends } from "../trends/Trends";
import { default as Axios } from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { ProfileCards } from "../profilePage/ProfileCards";
import { AgeFiltered } from "./AgeFiltered";
import { CityFiltered } from "./CityFiltered";
import CloseIcon from "@mui/icons-material/Close";
import { ListItemsFYP } from "./listItemsFYP";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CakeIcon from "@mui/icons-material/Cake";
import { CardUI } from "../cards/CardUI";
import Tooltip from "@mui/material/Tooltip";

export const ForYouPage = () => {
  const [userAge, setUserAge] = useState(0);
  const [userCity, setUserCity] = useState("Kalamazoo");
  const [ageData, setAgeData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [filteredDataAge, setFilteredDataAge] = useState([]);
  const [wordEnteredAge, setWordEnteredAge] = useState("");
  const [filteredDataCity, setFilteredDataCity] = useState([]);
  const [wordEnteredCity, setWordEnteredCity] = useState("");
  const [searchByAge, setSearchByAge] = useState(true);
  const [messageData, setMessageData] = useState([]);

  const getMessageData = () => {
    Axios.get("http://localhost:3000/messageLikes").then((response: any) => {
      setMessageData(response.data);
    });
  };

  console.log(messageData);

  const getAgeData = () => {
    Axios.get(`http://localhost:3000/ageData/?age=${userAge}`).then(
      (response: any) => {
        setAgeData(response.data);
      }
    );
  };

  const ageClick = () => {
    setSearchByAge(false);
  };

  const cityClick = () => {
    setSearchByAge(true);
  };

  const citySearch = () => {
    return (
      <Grid item xs>
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
              placeholder="Search users in your city"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={handleCityFilter}
              value={wordEnteredCity}
            />
            <Tooltip title="Click to search by age" arrow>
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                {wordEnteredCity.length === 0 ? (
                  <LocationCityIcon onClick={cityClick} />
                ) : (
                  <CloseIcon onClick={clearInputCity} />
                )}
              </IconButton>
            </Tooltip>
          </Paper>
        </div>
        {wordEnteredCity.length === 0 ? (
          <ListItemsFYP data={cityData}></ListItemsFYP>
        ) : (
          <CityFiltered data={filteredDataCity}></CityFiltered>
        )}
      </Grid>
    );
  };

  const ageSearch = () => {
    return (
      <Grid item xs>
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
              placeholder="Search users your age"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={handleAgeFilter}
              value={wordEnteredAge}
            />
            <Tooltip title="Click to search by city" arrow>
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                {wordEnteredAge.length === 0 ? (
                  <CakeIcon onClick={ageClick} />
                ) : (
                  <CloseIcon onClick={clearInputAge} />
                )}
              </IconButton>
            </Tooltip>
          </Paper>
        </div>
        {wordEnteredAge.length === 0 ? (
          <ListItemsFYP data={ageData}></ListItemsFYP>
        ) : (
          <AgeFiltered data={filteredDataAge}></AgeFiltered>
        )}
      </Grid>
    );
  };

  const getCityData = () => {
    Axios.get(`http://localhost:3000/cityData/?city=${userCity}`).then(
      (response: any) => {
        setCityData(response.data);
      }
    );
  };

  const handleAgeFilter = (e: { target: { value: any } }) => {
    const searchWord = e.target.value;
    setWordEnteredAge(searchWord);
    const newFilterAge = ageData.filter(
      (user: { FirstName: string; LastName: string; UserName: string }) => {
        return (
          user.FirstName?.toLowerCase().includes(searchWord.toLowerCase()) ||
          user.LastName?.toLowerCase().includes(searchWord.toLowerCase()) ||
          user.UserName?.toLowerCase().includes(searchWord.toLowerCase())
        );
      }
    );
    if (searchWord === "") {
      setFilteredDataAge([]);
    } else {
      setFilteredDataAge(newFilterAge);
    }
  };

  const clearInputAge = () => {
    setFilteredDataAge([]);
    setWordEnteredAge("");
  };

  const handleCityFilter = (e: { target: { value: any } }) => {
    const searchWord = e.target.value;
    setWordEnteredCity(searchWord);
    const newFilterCity = cityData.filter(
      (user: { FirstName: string; LastName: string; UserName: string }) => {
        return (
          user.FirstName?.toLowerCase().includes(searchWord.toLowerCase()) ||
          user.LastName?.toLowerCase().includes(searchWord.toLowerCase()) ||
          user.UserName?.toLowerCase().includes(searchWord.toLowerCase())
        );
      }
    );
    if (searchWord === "") {
      setFilteredDataCity([]);
    } else {
      setFilteredDataCity(newFilterCity);
    }
  };

  const clearInputCity = () => {
    setFilteredDataCity([]);
    setWordEnteredCity("");
  };

  useEffect(() => {
    getMessageData();
    getAgeData();
    getCityData();
  }, []);

  return (
    <div
      style={{
        alignContent: "center",
        marginLeft: "100px",
        marginRight: "auto",
      }}
    >
      <div style={{ marginBottom: "70px" }}>
        <TopAppBar />
      </div>
      <Grid
        container
        sx={{
          "--Grid-borderWidth": "1px",
          borderLeft: "var(--Grid-borderWidth) solid",
          borderColor: "divider",
          "& > div": {
            borderRight: "var(--Grid-borderWidth) solid",
            borderBottom: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
            gap: 1,
          },
        }}
      >
        <Grid item xs={2}>
          <LeftTabs />
        </Grid>
        <Grid item xs={6}>
          <div>
            {messageData.map((event: any) => (
              <CardUI
                MessageID={event.MessageID}
                UID={event.UID}
                TypeOfMessage={event.TypeOfMessage}
                Message={event.Message}
                Path={event.Path}
                Date={event.Date}
                Likes={event.Likes}
                Privacy={event.Privacy}
              />
            ))}
          </div>
        </Grid>
        {searchByAge ? ageSearch() : citySearch()}
      </Grid>
    </div>
  );
};