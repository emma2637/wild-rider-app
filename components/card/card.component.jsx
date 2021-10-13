import React from 'react';
import Image from 'next/image'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
//   })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   }))

const CardExperience = (props) => {

    console.log(props);
  
    return (
        <Card sx={{ maxHeight:470,maxWidth:350,  marginBottom:2, backgroundColor:"#f9f9f9", color:"#262f39 !important" }}>
            <CardMedia
                component="img"
                height="194"
                image={props.Image.path}
                alt={props.Image.text}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.Title.text}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.Description.text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button size="small">
                    {props.Actions.text}
                </Button>
            </CardActions>
        </Card>

    );
}

export default CardExperience;