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

export const ForYouPageMobile = () => {
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
  const [username, setUsername] = useState("");

  const getMessageData = () => {
    Axios.get("http://localhost:3000/message/bylikes").then((response: any) => {
      setMessageData(response.data);
    });
  };

  const getAgeData = () => {
    Axios.get(`http://localhost:3000/users/byage/${userAge}`).then(
      (response: any) => {
        setAgeData(response.data);
      }
    );
  };

  const fillUserData = () => {
    Axios.get(`http://localhost:3000/users/byusername/${username}`).then(
      (response: any) => {
        response.data.map((user: { City: string; Age: any }) => {
          setUserCity(user.City);
          setUserAge(user.Age);
        });
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
    Axios.get(`http://localhost:3000/users/bycity/${userCity}`).then(
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
    Axios.get("http://localhost:3000/users/isAuth", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response: any) => {
      setUsername(response.data.Username);
    });
    fillUserData();
    getMessageData();
    getAgeData();
    getCityData();
  }, [username, userCity, userAge]);

  return (
    <div
      style={{
        alignContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div style={{ marginBottom: "70px" }}>
        <TopAppBar />
      </div>
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
    </div>
  );
};
