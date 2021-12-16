import React from 'react';
import Image from 'next/image'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import theme from '../../src/theme'


const CardExperience = (props) => {

    let title = props.Title.text.toUpperCase();
    let styles = theme.palette.cards;
    return (
        <Card style={styles.cardStyle}>
            <CardMedia
                component="img"
                height="120"
                image={props.Image.path}
                alt={props.Image.text}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={styles.cardContentArea}>
                    {title}
                </Typography>
                <Typography variant="body2"  style={styles.cardContentArea}>
                    {props.Description.text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button size="small" style={styles.cardActionArea.learnMore}>
                    {props.Actions.text}
                </Button>
            </CardActions>
        </Card>

    );
}

export default CardExperience;