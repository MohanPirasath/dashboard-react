import "./App.css";

import * as React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import Badge from "@mui/material/Badge";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import ListAltOutlinedIcon from "@mui/icons-material/MonetizationOn";
import ChatIcon from "@mui/icons-material/Chat";
import { Routes, Route, Link } from "react-router-dom";
import SentimentVerySatisfiedTwoToneIcon from "@mui/icons-material/SentimentVerySatisfiedTwoTone";
import SpeedTwoToneIcon from "@mui/icons-material/SpeedTwoTone";
import SettingsApplicationsTwoToneIcon from "@mui/icons-material/SettingsApplicationsTwoTone";
import BuildTwoToneIcon from "@mui/icons-material/BuildTwoTone";
import FolderOpenTwoToneIcon from "@mui/icons-material/FolderOpenTwoTone";
import StackedBarChartTwoToneIcon from "@mui/icons-material/StackedBarChartTwoTone";
import TableChartTwoToneIcon from "@mui/icons-material/TableChartTwoTone";

import Typography from '@mui/material/Typography';

import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import MoreVertIcon from '@mui/icons-material/MoreVert';


// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';

import { blue, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Dashboard } from "./Dashboard";
import { Component } from "./Component";
import { Utilities } from "./Utilities";
import { Page } from "./Page";
import { Not } from "./Not";


// import Box from "@mui/material/Box";

// import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Table } from "./Table";



function App() {
  return (
    <div className="App">
      <MiniDrawer />

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function MiniDrawer() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ background: "white", color: "blue" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <input className="searchbar" placeholder="search for..."></input>
          <Button variant="contained">
            <IconButton color="primary" aria-label="searchbar ">
              <SavedSearchIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
          <Button variant="text" sx={{ marginLeft: "auto" }}>
            <IconButton color="primary" aria-label="notification ">
              <Badge badgeContent={3} color="error">
                <NotificationsNoneOutlinedIcon color="action" />
              </Badge>
            </IconButton>
          </Button>
          <Button variant="text">
            <IconButton color="primary" aria-label="Mailicon ">
              <Badge badgeContent={7} color="error">
                <MailIcon color="action" />
              </Badge>
            </IconButton>
          </Button>
          <p className="profil">Ajith kumar</p>
          <span>
            <Avatar alt="ARemy Sharp" src="/static/images/avatar/1.jpg" />
          </span>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <div className="admin">
            <div>
              <SentimentVerySatisfiedTwoToneIcon
                sx={{ fontSize: "25px", color: "primary" }}
              />
            </div>
            <div>
              <h6>SB ADMIN</h6>
            </div>
          </div>
        </List>
        <Divider />
        <List>
          <div className="admin">
            <div>
              <IconButton
                aria-label="delete"
                color="primary"
                onClick={() => navigate("/")}
              >
                <SpeedTwoToneIcon sx={{ fontSize: "25px" }} />
              </IconButton>
            </div>
            <div>
              <h6>Dashboard</h6>
            </div>
          </div>
        </List>
        <Divider />
        <h6 className="lite">INTERFACE</h6>
        <List>
          <div className="admin">
            <div>
              <IconButton aria-label="delete" color="primary">
                <SettingsApplicationsTwoToneIcon
                  sx={{ fontSize: "25px" }}
                  onClick={() => navigate("/Component")}
                />
              </IconButton>
            </div>
            <div>
              <h6>Components</h6>
            </div>
          </div>
        </List>

        <List>
          <div className="admin">
            <div>
              <IconButton
                aria-label="delete"
                color="primary"
                onClick={() => navigate("/Utilities")}
              >
                <BuildTwoToneIcon sx={{ fontSize: "25px" }} />
              </IconButton>
            </div>
            <div>
              <h6> Utilitiess </h6>
            </div>
          </div>
        </List>

        <Divider />
        <h6 className="lite">ADDONS</h6>

        <List>
          <div className="admin">
            <div>
              <IconButton aria-label="delete" color="primary"
              onClick={() => navigate("/Page")}>
                <FolderOpenTwoToneIcon sx={{ fontSize: "25px" }} />
              </IconButton>
            </div>
            <div>
              <h6 className=""> Pages </h6>
            </div>
          </div>
        </List>
        <List>
          <div className="admin">
            <div>
              <IconButton aria-label="delete" color="primary"
              onClick={()=>{
                navigate("/Chart")
              }}>
                <StackedBarChartTwoToneIcon sx={{ fontSize: "25px" }} />
              </IconButton>
            </div>
            <div>
              <h6> Charts </h6>
            </div>
          </div>
        </List>
        <List>
          <div className="admin">
            <div>
              <IconButton aria-label="delete" color="primary"
              onClick={() => navigate("/Table")}>
                <TableChartTwoToneIcon sx={{ fontSize: "25px" }} />
              </IconButton>
            </div>
            <div>
              <h6> Tables </h6>
            </div>
          </div>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <div className="body">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Component" element={<Component />} />
            <Route path="/Utilities" element={<Utilities />} />
            <Route path="/Page" element={<Page />} />
            <Route path="/Table" element={<Table />} />
            <Route path="/Chart" element={<Chart />} />
            <Route path="*" element={<Not />} />
            {/* <Route path="about" element={<About />} /> */}
          </Routes>
          {/* <Dashboard /> */}
        </div>
      </Box>
    </Box>
  );
}



function Chart(){
  return(
    <div>
      <h1>Chart</h1>
      <p>Chart.js is a third party plugin that is used to generate the charts in this theme.
         The charts below have been customized- for further customization options,
          please visit the official Chart.js documentation.</p>
          <div className="sep">
            <div>
            <Card sx={{ width: 705, height: 450 }}>
      <CardHeader

        // action={<IconButton aria-label="settings">
        //   <MoreVertIcon />
        // </IconButton>}
        title="Area Chart"
        subheader=""
        sx={{ color: "blue", backgroundColor: "whitesmoke" }} />
      <CardMedia
        component="img"
        height="350"
        width="395"
        image="./task chart img.png"
        alt="chart" />

          <Typography sx={{marginLeft:"25px"}}>
          Styling for the area chart can be found in the /js/demo/chart-area-demo.js file.
          </Typography>

    </Card>
            </div>
            <div>
            <Card sx={{ width: 405, height: 480 }}>
      <CardHeader

        
        title="Donut Chart"
        subheader=""
        sx={{ color: "blue", backgroundColor: "whitesmoke" }} />
      <CardMedia
        component="img"
        height="350"
        width="595"
        image="./download.png"
        alt="chart" />

<Typography sx={{marginLeft:"25px"}}>
Styling for the donut chart can be found in the /js/demo/chart-pie-demo.js file.
          </Typography>

    </Card>
            </div>
          </div>
          <div>
          <Card sx={{ width: 705, height: 470 }}>
      <CardHeader

        // action={<IconButton aria-label="settings">
        //   <MoreVertIcon />
        // </IconButton>}
        title="Bar Chart"
        subheader=""
        sx={{ color: "blue", backgroundColor: "whitesmoke" }} />
      <CardMedia
        component="img"
        height="350"
        width="395"
        image="./task img bar chart.png"
        alt="chart" />

          <Typography sx={{marginLeft:"25px",marginTop:"25px"}}>
          Styling for the area chart can be found in the /js/demo/chart-area-demo.js file.
          </Typography>

    </Card>
          </div>
    </div>
  )
}



function Footer() {
  return (
    <div>
      <div className="footerdiv">
        <h5>Copyright © Your Website 2021</h5>
      </div>
    </div>
  );
}

export default App;
