import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export function ReviewCard() {




  return (
    <Card sx={{ width: 405, height: 450 }}>
      <CardHeader

        action={<IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>}
        title="Revenue Sources"
        subheader=""
        sx={{ color: "blue", backgroundColor: "whitesmoke" }} />
      <CardMedia
        component="img"
        height="350"
        width="595"
        image="./download.png"
        alt="chart" />



    </Card>
  );
}
