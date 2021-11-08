import Card from '@mui/material/Card';

import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { withStyles } from '@mui/styles';
const mobileModeWidth = 742;

export const FiCard = withStyles(theme=>({
  root: {
    position: "relative",
    maxHeight: "1300px",
    boxShadow: 'none',
    [theme.breakpoints.down(2561)]: {
      height: '1170px',
    },
    [theme.breakpoints.down(1460)]: {
      height: '785px',
    },
    [theme.breakpoints.up(1098)]: {
      height: '638px',
    },
    [theme.breakpoints.down(1098)]: {
      height: '585px',
    },
    [theme.breakpoints.down(840)]: {
      height: '545px',
    },
    [theme.breakpoints.down(mobileModeWidth)]: {
      height: '690px',
    },
    [theme.breakpoints.down(355)]: {
      height: '700px',
    },
    [theme.breakpoints.down(353)]: {
      height: '670px',
    },
    [theme.breakpoints.down(330)]: {
      height: '640px',
    },
  }
}))(Card);

export const FiCardMedia = withStyles(theme=>({
  root: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
    [theme.breakpoints.up(1098)]: {
      height: '731px',
    },
    [theme.breakpoints.down(1098)]: {
      height: '645px',
    },
    [theme.breakpoints.down(840)]: {
      height: '545px',
    },
    [theme.breakpoints.down(mobileModeWidth)]: {
      height: '710px',
    },
    [theme.breakpoints.down(355)]: {
      height: '700px',
    },
    [theme.breakpoints.down(353)]: {
      height: '700px',
    },
    [theme.breakpoints.down(330)]: {
      height: '640px',
    },
  }
}))(CardMedia);

export const FiCardActionArea = withStyles({
  root: {
    position: "relative"
  }
})(CardActionArea);

export const FiCardActions = withStyles({
  root: {
    position: "relative"
  }
})(CardActions);

export const FiCardContent = withStyles({
  root: {
    position: "relative",
    backgroundColor: "transparent",
    marginTop: "120px",
    marginLeft: "100px"
  }
})(CardContent);



// --- Exports --- //
export default {
  FiCard,
  FiCardActionArea,
  FiCardActions,
  FiCardContent,
  FiCardMedia
};