import { useContext, useEffect, useState } from "react";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableRow,
  Typography,
} from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

import { StyledItem, StyledTableCell, StyledTextField } from "../../components";
import { WeatherContext } from "../../App";
import { useWeatherAPI } from "../hooks/useWeatherAPI";

const imageURList = [
  "url(/clear.jpg)",
  "url(/cloudy.jpg)",
  "url(/day.jpg)",
  "url(/fog.png)",
  "url(/night.jpg)",
  "url(/rainy.jpg)",
  "url(/snowy.jpg)",
  "url(/stormy.jpg)",
  "url(/sunny.jpg)",
];

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen", 159, 6.0, 24, 4.0),
  createData("Ice", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

const WeatherPage = () => {
  const [imageURL, setImageURL] = useState<string>("url(/clear.jpg)");
  const [location, setLocation] = useState<string>("");
  const [weatherDeatails, setWeatherDeatails] = useState<string>("");

  const { weatherData, _ } = useContext<any>(WeatherContext);

  const { getWeather } = useWeatherAPI();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleSearch = async () => {
    const { errorMessage, weatherDeatails } = await getWeather(location);
    setWeatherDeatails(weatherDeatails);
  };

  useEffect(() => {
    setWeatherDeatails(weatherData);
  }, [weatherData]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyItems="center"
      sx={{
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: imageURL,
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
      <Grid container spacing={2} padding="10px" paddingInline="50px">
        <Grid xs={12} md={8} sm={12} paddingInline="5px">
          <StyledItem display="flex" justifyContent="space-between">
            <Typography
              component="div"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              paddingLeft="20px"
              lineHeight="1"
            >
              <Typography fontSize="60px">21°</Typography>
              <Typography fontSize="20px">Fair</Typography>
              <Typography fontSize="20px">Day 21° Night 18°</Typography>
            </Typography>
            <img src="/icons/113.png" alt="weatherIcon" />
          </StyledItem>
        </Grid>
        <Grid xs={12} md={4} sm={12} padding="5px">
          <StyledItem>
            <Typography padding="10px">Other Details</Typography>
            <Box display="flex">
              <Table aria-label="simple table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell>{row.name}</StyledTableCell>
                      <StyledTableCell>{row.fat}</StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Table aria-label="simple table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell>
                        <img
                          src="/icons/395.png"
                          height="25px"
                          width="35px"
                          alt="weatherIcon"
                        />
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell>{row.fat}</StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </StyledItem>
        </Grid>
        <Grid xs={12} md={12} sm={12} padding="5px">
          <StyledItem>
            <Box>
              <Typography
                padding="10px"
                marginInlineStart="10px"
                variant="h6"
                component="h1"
              >
                Hourly Forecast
              </Typography>
              <Divider color="black" variant="middle" />
              <Box display="flex" justifyContent="space-evenly">
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography>4:30 PM</Typography>
                  <img src="/icons/395.png" height="55px" width="65px" />
                  <Typography>106</Typography>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography>4:30 PM</Typography>
                  <img src="/icons/395.png" height="55px" width="65px" />
                  <Typography>106</Typography>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography>4:30 PM</Typography>
                  <img src="/icons/395.png" height="55px" width="65px" />
                  <Typography>106</Typography>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography>4:30 PM</Typography>
                  <img src="/icons/395.png" height="55px" width="65px" />
                  <Typography>106</Typography>
                </Box>
              </Box>
            </Box>
          </StyledItem>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherPage;
