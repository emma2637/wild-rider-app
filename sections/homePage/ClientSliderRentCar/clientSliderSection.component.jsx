import React from 'react';
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { makeStyles } from '@mui/styles';
import CustomizedButtons from '../../../components/customizedButton/customizedButton.component'
import styles from '../../../styles/ratingCustom.module.scss'
import { red } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        textAlign: 'center',
        padding: '20px',
    },
    titleText: {
        fontFamily: "Raleway",
        fontDisplay: 'optional',
        fontSize: "36px",
        fontWeight: 600,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1.61,
        letterSpacing: "-1.62px",
        textAlign: "center",
        color: "#262f39",
    },
    carouselContainer: {
        position: "initial",
    },
    sliderClass: {
        boxShadow: "none",
    },
    avatar: {
        width: "137px",
        height: "137px",
        margin: "0 auto",
        position: 'relative',
        display: 'flow-root',
    },
    cardContentText: {
        fontFamily: "Montserrat",
        fontSize: "20px",
        fontWeight: "500",
        lineHeight: 1.6,
        textAlign: "center",
        color: "#262f39"
    },
    cardActionNameText: {
        fontFamily: "Raleway",
        fontSize: "18px",
        fontWeight: "800",
        lineHeight: 1.22,
        textAlign: "center",
        color: "#262f39",
        letterSpacing: "2.16px",
        display: "grid"
    },
    cardActionRatingValue: {
        marginLeft: "auto",
        marginRight: "auto",
        color: "#2866ae",
        fontSize: "0.5rem"
    }
})
    , { name: "MuiTrustWortyComponent" });

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const ClientSliderSection = ( props ) => {
    const {data,button} = props;
    const { title, clientopinions } =data
    const classes = useStyles();
    const readMoreBtn = button.find(item => item.type.includes("READ"));

    console.log(button);
    const CustomDot = ({ onMove, index, onClick, active }) => {
        // onMove means if dragging or swiping in progress.
        // active is provided by this lib for checking if the item is active or not.

        return (
            <li
                className={active ? styles.active : styles.inactive}
                onClick={() => onClick()}
            >
            </li>
        );
    };
    return (
        <Box className={classes.container}>
            <Typography variant="h5" component="p" gutterBottom className={classes.titleText}>
                {title}
            </Typography>

            <Container maxWidth="sm">
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className={styles.Container}
                    containerClass={styles.Container}
                    sliderClass={classes.sliderClass}
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass={styles.itemClass}
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    responsive={responsive}
                    showDots
                    slidesToSlide={1}
                    swipeable
                    customDot={<CustomDot />}
                >
                    {clientopinions.map((clientOpinion, index) => {

                        return (
                            <Card key={index}>
                                <CardMedia>
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="profileImage" className={classes.avatar} >
                                        <Image src={clientOpinion.profileimagepath[0].url} width={137} height={137} layout="responsive" objectFit="fill" alt="ride" />
                                    </Avatar>
                                </CardMedia>
                                <CardContent>
                                    <Typography variant="body2" component="span" className={classes.cardContentText}>
                                        {clientOpinion.comment}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <Container>
                                        <Typography variant="caption" component="span" className={classes.cardActionNameText}>
                                            {clientOpinion.name}
                                            <Rating name="read-only" value={clientOpinion.rate} readOnly className={classes.cardActionRatingValue} />
                                        </Typography>
                                        <CustomizedButtons type="readMoreBtn" buttonText={readMoreBtn.text} ></CustomizedButtons>
                                    </Container>
                                </CardActions>
                            </Card>
                        )
                    })}
                </Carousel>
            </Container>
        </Box>
    );
}

export default ClientSliderSection;