import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchBar } from "./pages/SearchBar";
import { WeatherPage } from "./pages/Weather";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Box
        display="flex"
        flexWrap="wrap"
        sx={{
          minHeight: "100vh",
          backgroundImage: "linear-gradient(#02294F, #090E10)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchBar />} />
            <Route path="/weather" element={<WeatherPage />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Provider>
  );
}

export default App;
