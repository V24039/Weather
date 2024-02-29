import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CssTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 35,
    color: "#1A2027",
    position: "relative",
    backgroundColor: "#F3F6F9",
    border: "5px solid",
    width: "auto",
  },
}));

export const SearchBar = () => {
  const [pincode, setPincode] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log(pincode);
    navigate("/weather");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPincode(event.target.value);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      justifyContent="center"
      sx={{
        width: "100%",
        backgroundImage: "linear-gradient(#02294F, #090E10)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Typography
          display="grid"
          justifyItems="center"
          color="white"
          fontSize="30px"
        >
          Welcome! Please enter a pincode to get the weather. 🌤️🌦️🌧️
        </Typography>
      </Container>
      <Container>
        <CssTextField
          fullWidth
          variant="outlined"
          margin="normal"
          placeholder="Pincode/City Name"
          onChange={handleChange}
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
      </Container>
    </Box>
  );
};
