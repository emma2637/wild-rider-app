import Card from '@mui/material/Card';

import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { withStyles } from '@mui/styles';

export const FiCard = withStyles({
    root: {
      position: "relative",
      height:"720px"
    }
  })(Card);
  
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
  
  export const FiCardMedia = withStyles({
    root: {
      position: "fixed",
      top: 0,
      right: 0,
      height: "100%",
      width: "100%"
    }
  })(CardMedia);
  
  // --- Exports --- //
  export default {
    FiCard,
    FiCardActionArea,
    FiCardActions,
    FiCardContent,
    FiCardMedia
  };