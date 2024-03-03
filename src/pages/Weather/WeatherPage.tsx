import { useContext, useEffect, useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

import { StyledItem, StyledTextField } from "../../components";
import { WeatherContext } from "../../App";
import { useWeatherAPI } from "../hooks/useWeatherAPI";
import { IWeatherValues } from "../const";
import { Details, HourlyDetails, OtherDetails } from "./components";

const WeatherPage = () => {
  const [location, setLocation] = useState<string>("");
  const [weatherDeatails, setWeatherDeatails] = useState<IWeatherValues>();

  const { weatherData, setWeatherData } = useContext<any>(WeatherContext);

  const { getWeather } = useWeatherAPI();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleSearch = async () => {
    const { weatherDeatails } = await getWeather(location);
    setWeatherData(weatherDeatails);
    setWeatherDeatails(weatherDeatails);
  };

  useEffect(() => {
    setWeatherDeatails(weatherData);
  }, [weatherData]);

  const getBackground = () => {
    const weatherIcon = weatherDeatails?.weather[0]?.icon;
    if (weatherIcon === "01n") {
      return "night.jpg";
    } else if (weatherIcon === "01d") {
      return "clear.jpg";
    } else if (
      weatherIcon === "04d" ||
      weatherIcon === "04n" ||
      weatherIcon === "02d" ||
      weatherIcon === "02n" ||
      weatherIcon === "03d" ||
      weatherIcon === "03n"
    ) {
      return "cloudy.jpg";
    } else if (weatherIcon === "10d" || weatherIcon === "10n") {
      return "rainy.jpg";
    } else if (weatherIcon === "11d" || weatherIcon === "11n") {
      return "stormy.jpg";
    } else if (weatherIcon === "13d" || weatherIcon === "13n") {
      return "snowy.jpg";
    } else if (weatherIcon === "50d" || weatherIcon === "50n") {
      return "fog.jpg";
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${getBackground()})`,
      }}
    >
      <StyledTextField
        variant="outlined"
        margin="normal"
        placeholder="City Name"
        onChange={handleChange}
        style={{
          border: "0px",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton size="small" onClick={handleSearch}>
                <SearchSharpIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Grid container spacing={2} paddingTop="30px" paddingInline="50px">
        <Grid xs={12} md={7} sm={12} paddingInline="5px">
          <Details />
        </Grid>
        <Grid xs={12} md={5} sm={12} paddingInline="5px">
          <OtherDetails />
        </Grid>
        <Grid xs={12} md={12} sm={12} padding="5px">
          <StyledItem>
            <HourlyDetails />
          </StyledItem>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherPage;
