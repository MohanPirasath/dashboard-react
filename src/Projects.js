import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';





export function Projects() {




  return (
    <Card sx={{ width: 575, marginTop: "10px", marginRight: "20px", height: 380 }}>
      <CardHeader


        title="Projects"
        subheader=""
        sx={{ color: "blue", backgroundColor: "whitesmoke" }} />
      <div className="progressfull">
        <div className="progress">
          <p className="bar">Server Migration</p>
          <p className="percentage">20%</p>
        </div>

        <progress className="progress1" value={20} max={100}>20</progress>

        <div className="progress">
          <p className="bar">Sales Tracking</p>
          <p className="percentage">40%</p>
        </div>

        <progress className="progress1" value={40} max={100} />

        <div className="progress">
          <p className="bar">Customer Database</p>
          <p className="percentage">60%</p>
        </div>

        <progress className="progress1" value={60} max={100}>20</progress>

        <div className="progress">
          <p className="bar">Payout Details</p>
          <p className="percentage">60%</p>
        </div>

        <progress className="progress1" value={80} max={100}>20</progress>

        <div className="progress">
          <p className="bar">Account Setup</p>
          <p className="percentage">Completed</p>
        </div>

        <progress className="progress1" value={100} max={100}>20</progress>
      </div>



    </Card>
  );
}
