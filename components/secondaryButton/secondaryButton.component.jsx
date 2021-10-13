import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import theme from '../../src/theme'
import { ThemeProvider } from '@mui/material/styles';



// .getFreeQuoteBtn{
//     background-color: #FFCC00 !important;
//     color: #6E5800 !important;
//     font-weight: 800 !important;
//     margin-top: 1em !important;
// }

const GetFreeQuoteButton = {
  color: theme.palette.custom.text,
  backgroundColor: theme.palette.custom.main,
  '&:hover': {
    backgroundColor: theme.palette.custom.main,
  },
  fontWeight: 800,
  marginTop: "1em",
  width: "200px",
  height: "40px",
  marginBottom: "1em",

};


const ReadMoreButton = {
  color: theme.palette.custom.text,
  backgroundColor: theme.palette.custom.main,
  '&:hover': {
    backgroundColor: theme.palette.custom.main,
  },
  fontWeight: 800,
  marginTop: "1em",
  width: "140px",
  height: "40px",
  marginBottom: "1em",

};


export default function CustomizedButtons(props) {
  const { isReadButton, buttonText } = props;
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        {isReadButton ? (
          <Button
            style={ReadMoreButton}
            variant="outlined"
            color="primary"
            onClick={props.onClick}
          >
            {buttonText}
          </Button>
        ) : (
          <Button
            style={GetFreeQuoteButton}
            variant="outlined"
            color="primary"
            onClick={props.onClick}
          >
            {buttonText}
          </Button>
        )}
      </Stack>
    </ThemeProvider>
  );
}
