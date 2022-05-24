import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

export function Utilities() {
  return (
    <div>
      <h1>Border Utilities</h1>
      <p>
        Bootstrap's default utility classes can be found on the official
        Bootstrap Documentation page. The custom utilities below were created to
        extend this theme past the default utility classes built into
        Bootstrap's framework.
      </p>

      <div className="utilitesfull">
        <div className="utilitesful">
          <div>
            <Card
              sx={{
                display: "flex",
                marginTop: "10px",
                height: "130px",
                width: "550px",
                borderLeft: " 5px blue solid",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div className="div37">
                    <p>.border-left-primary</p>
                  </div>
                </CardContent>
              </Box>
            </Card>
          </div>
          <div>
            <Card
              sx={{
                display: "flex",
                marginTop: "10px",
                height: "130px",
                width: "550px",
                borderBottom: " 5px blue solid",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div className="div37">
                    <p>.border-bottom-primary</p>
                  </div>
                </CardContent>
              </Box>
            </Card>
          </div>
        </div>

        <div className="utilitesful">
          <div>
            <Card
              sx={{
                display: "flex",
                marginTop: "10px",
                height: "130px",
                width: "550px",
                borderLeft: " 5px brown solid",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div className="div37">
                    <p>.border-left-secondary</p>
                  </div>
                </CardContent>
              </Box>
            </Card>
          </div>
          <div>
            <Card
              sx={{
                display: "flex",
                marginTop: "10px",
                height: "130px",
                width: "550px",
                borderBottom: " 5px brown solid",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div className="div37">
                    <p>.border-bottom-secondary</p>
                  </div>
                </CardContent>
              </Box>
            </Card>
          </div>
        </div>

        <div className="utilitesful">
          <div>
            <Card
              sx={{
                display: "flex",
                marginTop: "10px",
                height: "130px",
                width: "550px",
                borderLeft: " 5px green solid",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div className="div37">
                    <p>.border-left-success</p>
                  </div>
                </CardContent>
              </Box>
            </Card>
          </div>
          <div>
            <Card
              sx={{
                display: "flex",
                marginTop: "10px",
                height: "130px",
                width: "550px",
                borderBottom: " 5px green solid",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div className="div37">
                    <p>.border-bottom-success</p>
                  </div>
                </CardContent>
              </Box>
            </Card>
          </div>
        </div>

        <div className="utilitesful">
          <div>
            <Card
              sx={{
                display: "flex",
                marginTop: "10px",
                height: "130px",
                width: "550px",
                borderLeft: " 5px skyblue solid",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div className="div37">
                    <p>.border-left-info</p>
                  </div>
                </CardContent>
              </Box>
            </Card>
          </div>
          <div>
            <Card
              sx={{
                display: "flex",
                marginTop: "10px",
                height: "130px",
                width: "550px",
                borderBottom: " 5px skyblue solid",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div className="div37">
                    <p>.border-bottom-info</p>
                  </div>
                </CardContent>
              </Box>
            </Card>
          </div>
        </div>

        <div className="utilitesful">
          <div>
            <Card
              sx={{
                display: "flex",
                marginTop: "10px",
                height: "130px",
                width: "550px",
                borderLeft: " 5px yellow solid",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div className="div37">
                    <p>.border-left-warning</p>
                  </div>
                </CardContent>
              </Box>
            </Card>
          </div>
          <div>
            <Card
              sx={{
                display: "flex",
                marginTop: "10px",
                height: "130px",
                width: "550px",
                borderBottom: " 5px yellow solid",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div className="div37">
                    <p>.border-bottom-warning</p>
                  </div>
                </CardContent>
              </Box>
            </Card>
          </div>
        </div>

        <div className="utilitesful">
          <div>
            <Card
              sx={{
                display: "flex",
                marginTop: "10px",
                height: "130px",
                width: "550px",
                borderLeft: " 5px red solid",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div className="div37">
                    <p>.border-left-danger</p>
                  </div>
                </CardContent>
              </Box>
            </Card>
          </div>
          <div>
            <Card
              sx={{
                display: "flex",
                marginTop: "10px",
                height: "130px",
                width: "550px",
                borderBottom: " 5px red solid",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div className="div37">
                    <p>.border-bottom-danger</p>
                  </div>
                </CardContent>
              </Box>
            </Card>
          </div>
        </div>

        <div className="utilitesful">
          <div>
            <Card
              sx={{
                display: "flex",
                marginTop: "10px",
                height: "130px",
                width: "550px",
                borderLeft: " 5px black solid",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div className="div37">
                    <p>.border-left-dark</p>
                  </div>
                </CardContent>
              </Box>
            </Card>
          </div>
          <div>
            <Card
              sx={{
                display: "flex",
                marginTop: "10px",
                height: "130px",
                width: "550px",
                borderBottom: " 5px black solid",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div className="div37">
                    <p>.border-bottom-dark</p>
                  </div>
                </CardContent>
              </Box>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
