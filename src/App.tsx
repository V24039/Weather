import { createContext, useState } from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchBar } from "./pages/SearchBar";
import { WeatherPage } from "./pages/Weather";
import "./App.css";

export const WeatherContext = createContext({});

function App() {
  const [weatherData, setWeatherData] = useState();

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      <Box
        display="flex"
        flexWrap="wrap"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: "linear-gradient(#02294F, #090E10)",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchBar />} />
            <Route path="/weather" element={<WeatherPage />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </WeatherContext.Provider>
  );
}

export default App;
