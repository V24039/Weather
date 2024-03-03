import { Box, Typography, Divider } from "@mui/material";

export const HourlyDetails = () => {
  return (
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
  );
};
