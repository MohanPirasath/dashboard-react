import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ForumIcon from "@mui/icons-material/Forum";
import CalendarMonthIcon from "@mui/icons-material/Forum";
import MonetizationOnIcon from "@mui/icons-material/Forum";



export function Component() {
  return (
    <div>
      <h1>Cards</h1>

      <div className="div5">


        <Card sx={{ display: "flex", marginTop: "10px", height: "130px", width: "250px", borderLeft: " 5px blue solid" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <div className="div3">

                <div>
                  <h5 className="fourboxhead">EARNINGS (MONTHLY)</h5>
                  <h5>$40,000</h5>
                </div>
                <div className="icon">
                  <span className="boxicon">
                    <CalendarMonthIcon color="action" sx={{ fontSize: 40 }} />
                  </span>
                </div>
              </div>
            </CardContent>
          </Box>
        </Card>

        <Card sx={{ display: "flex", marginTop: "10px", height: "130px", width: "250px", borderLeft: " 5px blueviolet solid" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <div className="div3">

                <div>
                  <h5 className="head">EARNINGS (ANNUAL)</h5>
                  <h5>$215,000</h5>
                </div>
                <div className="icon">
                  <span className="boxicon">
                    <MonetizationOnIcon color="action" sx={{ fontSize: 40 }} />
                  </span>
                </div>
              </div>
            </CardContent>
          </Box>
        </Card>

        <Card sx={{ display: "flex", marginTop: "10px", height: "130px", width: "250px", borderLeft: " 5px green solid" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <div className="div3">

                <div>
                  <h5 className="head3">TASKS</h5>

                  <h5>50% Completed</h5>
                </div>
                <div className="icon">

                  <span className="boxs">
                    <AssignmentIcon color="action" sx={{ fontSize: 40 }} />
                  </span>
                </div>
              </div>
            </CardContent>
          </Box>
        </Card>

        <Card sx={{ display: "flex", marginTop: "10px", height: "130px", width: "250px", borderLeft: " 5px red solid" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <div className="div3">

                <div>
                  <h5 className="fourboxhead4">PENDING REQUESTS</h5>
                  <h5>18 REQUESTS</h5>
                </div>
                <div className="icon">
                  <span className="boxicon">
                    <ForumIcon color="action" sx={{ fontSize: 40 }} />
                  </span>
                </div>
              </div>
            </CardContent>
          </Box>
        </Card>
      </div>

      <div className="div12">
        <div>
          <Card sx={{ width: 545, marginTop: "10px", marginRight: "20px", height: 220 }}>
            <CardHeader


              title="Default Card Example"
              subheader=""
              sx={{ color: "rgb(134, 130, 130)", backgroundColor: "whitesmoke" }} />
            <div>
              <p className="cardp">
                This card uses Bootstrap's default styling with no utility classes added.
                Global styles are the only things modifying the look and feel of this default card example.
              </p>
            </div>
          </Card>
        </div>

        <div>
          <Card sx={{ width: 545, height: 220 }}>
            <CardHeader

              action={<IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>}
              title="Dropdown Card Example"
              subheader=""
              sx={{ color: "blue", backgroundColor: "whitesmoke" }} />

            <p className="cardp">
              Dropdown menus can be placed in the card header in order to extend the functionality of a basic card.
              In this dropdown card example, the Font Awesome vertical ellipsis icon in the card
              header can be clicked on in order to toggle a dropdown menu.
            </p>

          </Card>
        </div>
      </div>


      <div className="div12">
        <div>
          <Card sx={{ width: 545, marginTop: "10px", marginRight: "20px", height: 220 }}>
            <CardHeader


              title="Basic Card Example"
              subheader=""
              sx={{ color: "blue", backgroundColor: "whitesmoke" }} />
            <div>
              <p className="cardp">
                The styling for this basic card example is created by using default Bootstrap utility classes.
                By using utility classes,
                the style of the card component can be easily modified with no need for any custom CSS!
              </p>
            </div>
          </Card>
        </div>

        <div>
          <Card sx={{ width: 545, height: 220 }}>
            <CardHeader

              action={<IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>}
              title="Collapsable Card Example"
              subheader=""
              
              sx={{ color: "blue", backgroundColor: "whitesmoke" }} />

            <p className="cardp">
            
              This is a collapsable card example using Bootstrap's built in collapse functionality.
              Click on the card header to see the card body collapse and expand!
            </p>

          </Card>
        </div>
      </div>







    </div>
  );
}
