import { Box, Container, Grid } from "@mui/material";
import React from "react";

const WeatherPage = () => {
  return (
    <Box margin="auto" padding="50px">
      <Grid container spacing={2}>
        <Grid md={8} sm={12} bgcolor="whitesmoke">
          <Container maxWidth={false}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus
            risus, sodales sed quam sed, imperdiet mollis nisi. Donec
            ullamcorper magna malesuada sapien vestibulum, eget finibus sapien
            tempor. Curabitur in gravida arcu. Ut eget lorem ex. Integer sit
            amet molestie turpis. Mauris ac tincidunt eros. Sed venenatis diam
            in sem mattis facilisis. Maecenas ipsum felis, suscipit sed bibendum
            convallis, finibus non ex. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Ut bibendum nisi et
            purus pellentesque, non ultricies metus vestibulum. Morbi quis
            varius ipsum, bibendum cursus sem. Ut a porta mi. Cras consectetur
            convallis vehicula. Suspendisse potenti. Maecenas facilisis, diam et
            pretium fermentum, mauris odio tempus eros, facilisis sollicitudin
            urna velit eu nulla.
          </Container>
        </Grid>
        <Grid md={4} sm={12} bgcolor="red">
          <Container maxWidth={false}>xs=4</Container>
        </Grid>
        <Grid xs={12} md={12} sm={12} bgcolor="green">
          <Container maxWidth={false}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus
            risus, sodales sed quam sed, imperdiet mollis nisi. Donec
            ullamcorper magna malesuada sapien vestibulum, eget finibus sapien
            tempor. Curabitur in gravida arcu. Ut eget lorem ex. Integer sit
            amet molestie turpis. Mauris ac tincidunt eros. Sed venenatis diam
            in sem mattis facilisis. Maecenas ipsum felis, suscipit sed bibendum
            convallis, finibus non ex. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Ut bibendum nisi et
            purus pellentesque, non ultricies metus vestibulum. Morbi quis
            varius ipsum, bibendum cursus sem. Ut a porta mi. Cras consectetur
            convallis vehicula. Suspendisse potenti. Maecenas facilisis, diam et
            pretium fermentum, mauris odio tempus eros, facilisis sollicitudin
            urna velit eu nulla.
          </Container>
        </Grid>
      </Grid>
      <Container>Weather</Container>
      <Container>Details</Container>
      <Container>ForeCast</Container>
    </Box>
  );
};

export default WeatherPage;
