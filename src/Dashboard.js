import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ForumIcon from "@mui/icons-material/Forum";
import { RecipeReviewCard } from "./RecipeReviewCard";
import { ReviewCard } from "./ReviewCard";
import { Projects } from "./Projects";
import { Illustrations } from "./Illustrations";
import { Development } from "./Development";

export function Dashboard() {



  return (
    <div className="div2">
      <div className="div1">
        <h1>Dashboard</h1>
        <Button variant="contained" sx={{ height: "52px", marginTop: "20px" ,marginLeft:"auto"}}>
          GENERATE REPORT
        </Button>
      </div>
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
        <div> <RecipeReviewCard /></div>
        <div><ReviewCard /></div>
      </div>

      <div className="div12">
        <div><Projects />
        <div className="sub">
              <div className="sub1">
                <h4 className="h4">Primary</h4>
                <p className="p">
                  #4e73df
                </p>
              </div>
              <div className="sub2">
                <h4 className="h4">Success</h4>
                <p className="p">
                  #4e73df
                </p>
              </div>
            </div>
            <div className="sub">
              <div className="sub3">
                <h4 className="h4">Info</h4>
                <p className="p">
                  #4e73df
                </p>
              </div>
              <div className="sub4">
                <h4 className="h4">Warning</h4>
                <p className="p">
                  #4e73df
                </p>
              </div>
            </div>
            <div className="sub">
              <div className="sub5">
                <h4 className="h4">Danger</h4>
                <p className="p">
                  #4e73df
                </p>
              </div>
              <div className="sub6">
                <h4 className="h41">Secondary</h4>
                <p className="p1">
                  #4e73df
                </p>
              </div>
            </div>

            <div className="sub">
              <div className="sub7">
                <h4 className="h41">Light</h4>
                <p className="p1">
                  #4e73df
                </p>
              </div>
              <div className="sub8">
                <h4 className="h4">Dark</h4>
                <p className="p">
                  #4e73df
                </p>
              </div>
            </div>

        </div>
        <div><Illustrations />
        <Development />
        </div>
      </div>

      

      {/* <div className="divcol2">
        <div className="col2same">
         <RecipeReviewCard />
        </div>
        <div className="col2same">
          <ReviewCard />
        </div>

      </div>
      <div className="divcol3">
        <div className="divcol31">
          <div className="col1">
            <Projects />
          </div>
          <div className="col2">
            <div className="sub">
              <div className="sub1">
                <h4 className="h4">Primary</h4>
                <p className="p">
                  #4e73df
                </p>
              </div>
              <div className="sub2">
                <h4 className="h4">Success</h4>
                <p className="p">
                  #4e73df
                </p>
              </div>
            </div>
            <div className="sub">
              <div className="sub3">
                <h4 className="h4">Info</h4>
                <p className="p">
                  #4e73df
                </p>
              </div>
              <div className="sub4">
                <h4 className="h4">Warning</h4>
                <p className="p">
                  #4e73df
                </p>
              </div>
            </div>
            <div className="sub">
              <div className="sub5">
                <h4 className="h4">Danger</h4>
                <p className="p">
                  #4e73df
                </p>
              </div>
              <div className="sub6">
                <h4 className="h41">Secondary</h4>
                <p className="p1">
                  #4e73df
                </p>
              </div>
            </div>
            <div className="sub">
              <div className="sub7">
                <h4 className="h41">Light</h4>
                <p className="p1">
                  #4e73df
                </p>
              </div>
              <div className="sub8">
                <h4 className="h4">Dark</h4>
                <p className="p">
                  #4e73df
                </p>
              </div>
            </div>

          </div>
        </div>
        <div className="divcol32">
          <div className="col3">
            <Illustrations />
          </div>
          <div className="col4">
            <Development />
          </div>
        </div>
      </div>
 */}

     


    </div>
  );
}
