import * as React from "react";
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';



export function Illustrations() {




  return (
    <Card sx={{ width: 515, marginTop: "10px", height: 450 }}>
      <CardHeader


        title="Illustrations"
        subheader=""
        sx={{ color: "blue", backgroundColor: "whitesmoke" }} />
      <CardMedia
        component="img"
        height="280"
        width="95"
        image="./dashboardreact3.svg"
        alt="chart"
        sx={{ marginTop: "5px" }} />

      <Typography paragraph sx={{ marginLeft: "20px", marginTop: "25px" }}>
        Add some quality,
        svg illustrations to your project courtesy of unDraw,
        a constantly updated collection of beautiful svg images
        that you can use completely free and without attribution!
      </Typography>

    </Card>
  );
}
