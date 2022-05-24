import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import MoreVertIcon from '@mui/icons-material/MoreVert';





export function RecipeReviewCard() {




  return (
    <Card sx={{ width: 705, height: 450 }}>
      <CardHeader

        action={<IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>}
        title="Earnings Overview"
        subheader=""
        sx={{ color: "blue", backgroundColor: "whitesmoke" }} />
      <CardMedia
        component="img"
        height="350"
        width="395"
        image="./task chart img.png"
        alt="chart" />



    </Card>
  );
}
