import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchBar } from "./pages/SearchBar";
import { WeatherPage } from "./pages/Weather";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
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
      </div>
    </Provider>
  );
}

export default App;
