
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";

function AppNavBarComponent() {

    const theme = createTheme({
        palette: {
          primary: {
            main: green[200],
          },
          secondary: {
            main: green[500],
          },
        },
      
        components: {
          MuiCard: {
            styleOverrides: {
              root: { margin: 8, maxWidth: 345}
            },
          },
        },
      });

    return (
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Restaurant Management System
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  }



export default AppNavBarComponent;