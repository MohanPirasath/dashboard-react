import * as React from "react";
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';



export function Development() {




  return (
    <Card sx={{ width: 515, marginTop: "15px", height: 320 }}>
      <CardHeader


        title="Development Approach"
        subheader=""
        sx={{ color: "blue", backgroundColor: "whitesmoke" }} />
      {/* <CardMedia
              component="img"
              height="350"
              width="595"
              image= ""
              alt="chart"
              
            /> */}
      <Typography paragraph sx={{ marginLeft: "20px", marginTop: "25px" }}>
        SB Admin 2 makes extensive use of Bootstrap 4 utility classes
        in order to reduce CSS bloat and poor page performance.
        Custom CSS classes are used to create custom components and custom utility classes..)
      </Typography>
      <Typography paragraph sx={{ marginLeft: "20px", marginTop: "25px" }}>
        Before working with this theme,
        you should become familiar with the Bootstrap framework,
        especially the utility classes
      </Typography>


    </Card>
  );
}
