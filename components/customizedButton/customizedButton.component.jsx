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
  height: "40px",
  marginBottom: "1em",
  maxWidth: "150px",

};


const ReadMoreButton = {
  color: theme.palette.custom.text,
  backgroundColor: theme.palette.custom.main,
  '&:hover': {
    backgroundColor: theme.palette.custom.main,
  },
  fontWeight: 800,
  marginTop: "2em",
  height: "40px",
  marginBottom: "1em",
  alignItems: "center",
  border:"none",
  marginLeft: "auto",
  marginRight: "auto"

};


const CarouselDotCustomButton={
  color: theme.palette.carousel.dots,
  backgroundColor: theme.palette.carousel.dots.default.backgroundColor,
  '&:active': {
    backgroundColor: theme.palette.carousel.dots.active.backgroundColor,
  },
  marginTop: "1em",
  height: "10px",
  width: "10px",
  alignItems: "center",
  border:"none",
  marginLeft: "auto",
  marginRight: "auto"
};

export default function CustomizedButtons(props) {
  const { type, buttonText } = props;

  const ButtonType = {
    getFreeQuoteBtn: GetFreeQuoteButton,
    readMoreBtn: ReadMoreButton,
    carouselDotBtn: CarouselDotCustomButton
  };

  const button =()=>{
    if(type === "getFreeQuoteBtn"){
      return <Button style={ButtonType.getFreeQuoteBtn}>{buttonText}</Button>
    }
    else if(type === "readMoreBtn"){
      return <Button style={ButtonType.readMoreBtn}>{buttonText}</Button>
    }
    else if(type === "carouselDotBtn"){
      return <Button style={ButtonType.carouselDotBtn} sx={{width:"10px", height:"10px"}}>{buttonText}</Button>
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack>
          {button()}        
      </Stack>
    </ThemeProvider>
  );
}
