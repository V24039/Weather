import { useState } from "react";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  styled,
} from "@mui/material";

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

const StyledItem = styled(Grid)(({ theme }) => ({
  color: "black",
  height: "100%",
  background: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(8px)",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.99)",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: "10px",
  textAlign: "left",
}));

const WeatherPage = () => {
  const [imageURL, setImageURL] = useState<string>("url(/clear.jpg)");
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

  return (
    <Box
      display="flex"
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
      <Grid container spacing={2} padding="50px">
        <Grid md={8} sm={12} padding="5px">
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
        <Grid md={4} sm={12} padding="5px">
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
                        <img src="/icons/395.png" height="25px" width="35px"/>
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
          </StyledItem>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherPage;
