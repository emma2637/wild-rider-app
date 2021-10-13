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
    custom:{
        main: "#FFCC00",
        text:"#6E5800"
    }
  },
});

export default theme;