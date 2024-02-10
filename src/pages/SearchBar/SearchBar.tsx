import {
  Container,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBackground from "../../static/SearchBackground.jpg";

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
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100%",
        backgroundImage: `url(${SearchBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(255,255,255)",
          opacity: '0.7',
          borderRadius: '10px',
          mt: "20%"
        }}
      >
        <TextField
          margin="normal"
          fullWidth
          label="Pincode/City Name" 
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
    </Container>
  );
};
