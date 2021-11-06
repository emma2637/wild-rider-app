import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2866ae",
    },
    secondary: {
      main: "#f4cf06",
    },
    custom: {
      main: "#ffcc00",
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
          position: "relative",
          bottom:"14px"
        }
      },

      
    },
    carousel:{
      dots:{
        active:{
          backgroundColor: "#c4c4c4",
        },
        default:{
          backgroundColor: "#f2f2f2",
        }
      }
    }
  },
  fonts: {
    primary: "Roboto",
    secondary: "Roboto",
  },
  

  sections:{
    header:{},
    carSlider:{},
    ourServices:{},
    trustworthyCarRental: {},
    clientsSlider: {},
    faq: {},
    ourTravelExperts: {},
    footer: {}
  }
});

export default theme;