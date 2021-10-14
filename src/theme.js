import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: "#00bcd4",
    },
    secondary: {
      main: "#ff9800",
    },
    custom: {
      main: "#FFCC00",
      text: "#6E5800"
    },
    cards: {
      cardStyle:{
        maxHeight: 354,
        maxWidth: 345,
        marginBottom: 2,
        backgroundColor: "#f9f9f9",
        color: "#262f39 !important"
      },
      cardContentArea:{
        color:"#262f39"
      },
      cardActionArea:{
        learnMore:{
          fontSize: "14px",
          fontWeight: "bold",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: 1.5,
          letterSpacing: "normal",
          color: "#262f39",
          textDecoration: "underline",
        }
      },

      
    }
  },
});

export default theme;