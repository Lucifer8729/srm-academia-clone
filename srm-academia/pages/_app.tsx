import * as React from "react";

import "../styles/globals.css";
import type { AppProps } from "next/app";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DvrIcon from "@mui/icons-material/Dvr";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ListIcon from "@mui/icons-material/List";

const drawerWidth = 290;

function MyApp({ Component, pageProps }: AppProps) {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const handleClick5 = () => {
    setOpen5(!open5);
  };
  const handleClick6 = () => {
    setOpen6(!open6);
  };
  const handleClick7 = () => {
    setOpen7(!open7);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            backgroundColor: "#42a5f5",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "right",
              justifyContent: "right",
              pr: 0,
            }}
          >
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} /> */}
            <Button color="inherit" sx={{ height: "55px", width: "150px" }}>
              student
              <Avatar sx={{ ml: 1, height: "30px", width: "30px" }} />
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar sx={{ backgroundColor: "#0288d1" }}>
            <Typography sx={{ color: "white" }}>
              Academia - Academic W...
            </Typography>
          </Toolbar>
          <Divider />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
          >
            <ListItemButton onClick={handleClick1}>
              <ListItemIcon sx={{ ml: 1 }}>
                <DvrIcon sx={{ fontSize: "medium" }} />
              </ListItemIcon>
              <ListItemText primary="CIRCULAR" sx={{ ml: -3 }} />
              {open1 ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
            </ListItemButton>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component="a"
                  href="SRMIST_CET_Circulurs"
                >
                  <ListItemIcon sx={{ ml: 1 }}>
                    <WysiwygIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="SRMIST CET_Circulurs"
                    sx={{ ml: -3 }}
                  />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component="a"
                  href="Circular_III_Year_BTECH"
                >
                  <ListItemIcon sx={{ ml: 1 }}>
                    <WysiwygIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Circular lll Year BTECH"
                    sx={{ ml: -3 }}
                  />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton>
              <ListItemIcon sx={{ ml: 1 }}>
                <DvrIcon sx={{ fontSize: "medium" }} />
              </ListItemIcon>
              <ListItemText primary="WELCOME" sx={{ ml: -3 }} />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon sx={{ ml: 1 }}>
                <DvrIcon sx={{ fontSize: "medium" }} />
              </ListItemIcon>
              <ListItemText primary="Student Profile" sx={{ ml: -3 }} />
            </ListItemButton>

            <ListItemButton onClick={handleClick2}>
              <ListItemIcon sx={{ ml: 1 }}>
                <DvrIcon sx={{ fontSize: "medium" }} />
              </ListItemIcon>
              <ListItemText primary="Academic Reports" sx={{ ml: -3 }} />
              {open2 ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ ml: 1 }}>
                    <WysiwygIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Academic_Planner_2021..."
                    sx={{ ml: -3 }}
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ ml: 1 }}>
                    <MilitaryTechIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Academic_Planner_2021..."
                    sx={{ ml: -3 }}
                  />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={handleClick3}>
              <ListItemIcon sx={{ ml: 1 }}>
                <DvrIcon sx={{ fontSize: "medium" }} />
              </ListItemIcon>
              <ListItemText primary="Student" sx={{ ml: -3 }} />
              {open3 ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
            </ListItemButton>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ ml: 1 }}>
                    <LocalHospitalIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Student Contact Update..."
                    sx={{ ml: -3 }}
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ ml: 1 }}>
                    <ListIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Student_Master_Contact..."
                    sx={{ ml: -3 }}
                  />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={handleClick4}>
              <ListItemIcon sx={{ ml: 1 }}>
                <DvrIcon sx={{ fontSize: "medium" }} />
              </ListItemIcon>
              <ListItemText primary="Unified Time Table" sx={{ ml: -3 }} />
              {open4 ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
            </ListItemButton>
            <Collapse in={open4} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ ml: 1 }}>
                    <WysiwygIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText primary="Minor Time Table" sx={{ ml: -3 }} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ ml: 1 }}>
                    <WysiwygIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Special TIme Table - 1"
                    sx={{ ml: -3 }}
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ ml: 1 }}>
                    <WysiwygIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Special TIme Table - 2"
                    sx={{ ml: -3 }}
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ ml: 1 }}>
                    <WysiwygIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Unified Time Table Jan-2..."
                    sx={{ ml: -3 }}
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ ml: 1 }}>
                    <WysiwygIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Unified Time Table Jan-2..."
                    sx={{ ml: -3 }}
                  />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton>
              <ListItemIcon sx={{ ml: 1 }}>
                <DvrIcon sx={{ fontSize: "medium" }} />
              </ListItemIcon>
              <ListItemText primary="Course Feedback" sx={{ ml: -3 }} />
            </ListItemButton>

            <ListItemButton onClick={handleClick5}>
              <ListItemIcon sx={{ ml: 1 }}>
                <DvrIcon sx={{ fontSize: "medium" }} />
              </ListItemIcon>
              <ListItemText primary="New Regulation" sx={{ ml: -3 }} />
              {open5 ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
            </ListItemButton>
            <Collapse in={open5} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ ml: 1 }}>
                    <WysiwygIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Course Registration Page..."
                    sx={{ ml: -3 }}
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ ml: 1 }}>
                    <WysiwygIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Course Registration Page..."
                    sx={{ ml: -3 }}
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ ml: 1 }}>
                    <WysiwygIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="My Electives 18 Regulati..."
                    sx={{ ml: -3 }}
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ ml: 1 }}>
                    <WysiwygIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Course Confirmation Ele..."
                    sx={{ ml: -3 }}
                  />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={handleClick6}>
              <ListItemIcon sx={{ ml: 1 }}>
                <DvrIcon sx={{ fontSize: "medium" }} />
              </ListItemIcon>
              <ListItemText primary="Time Table & Attendance" sx={{ ml: -3 }} />
              {open6 ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
            </ListItemButton>
            <Collapse in={open6} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ ml: 1 }}>
                    <WysiwygIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="My Time Table 2020-21-..."
                    sx={{ ml: -3 }}
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ ml: 1 }}>
                    <WysiwygIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText primary="My Attendance" sx={{ ml: -3 }} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={handleClick7}>
              <ListItemIcon sx={{ ml: 1 }}>
                <DvrIcon sx={{ fontSize: "medium" }} />
              </ListItemIcon>
              <ListItemText
                primary="Student Service Requests"
                sx={{ ml: -3 }}
              />
              {open7 ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
            </ListItemButton>
            <Collapse in={open7} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ ml: 1 }}>
                    <LocalHospitalIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Student Service Request..."
                    sx={{ ml: -3 }}
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ ml: 1 }}>
                    <WysiwygIcon sx={{ fontSize: "medium" }} />
                  </ListItemIcon>
                  <ListItemText primary="My Service Requests" sx={{ ml: -3 }} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Box>
            <Component {...pageProps} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MyApp;
