import React from 'react';
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import classNames from "classnames";

import CustomizedButtons from '../secondaryButton/secondaryButton.component';
import 'react-multi-carousel/lib/styles.css';
 import styles from  './custom-dots.module.scss'

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

const RatingObject = {
    Title: "What are our clients saying about Wild Rider?",
    ratingCarouselData: {
        description: "Cannot recommend Wild Rider enough. They were really great and took all the changes in my booking (due to the Covid travel issues) in their stride. We arranged to have the car delivered to our hotel, which was really helpful."
    }
}


const RatingCarouselSection = (props) => {

    // const { ratingCarouselData } = props.data;


    const CustomDot = ({
        index,
        onClick,
        active
    }) => {
        return (
            <button
                onClick={e => {
                    onClick();
                    e.preventDefault();
                }}
                className={
                    classNames(styles.carouselWithCustomDots,
                        {
                            "customDotActive": active
                        })}
            >
                {/* <Avatar sx={{ width: "10px", height: "10px", marginLeft: "auto", marginRight: "auto" ,backgroundColor:"#c4c4c4"}}></Avatar> */}
            </button>
        );
    };


    console.log(props)
    return (
        <div
            style={{
                position: 'relative',
                textAlign: 'center'
            }}
        >
            <Typography variant="h5" component="span" gutterBottom sx={{ fontSize: "30px", fontWeight: "600", lineHeight: 1.6, textAlign: "center", color: "#262f396" }}>
                What are our clients saying about Wild Rider?
            </Typography>

            <Container maxWidth="sm">

                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside
                    responsive={responsive}
                    showDots
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    // customDot={<CustomDot />}
                >
                    <Card>
                        <CardHeader>

                        </CardHeader>
                        <CardMedia>
                            <Avatar aria-label="profileImage" sx={{ width: "137px", height: "137px", marginLeft: "auto", marginRight: "auto" }} >
                                <Image src={'https://st4.depositphotos.com/15648834/23779/v/1600/depositphotos_237795810-stock-illustration-unknown-person-silhouette-profile-picture.jpg'} width={137} height={137} layout="responsive" objectFit="fill" />
                            </Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography variant="body2" component="p" sx={{ fontSize: "20px", fontWeight: "500", lineHeight: 1.6, textAlign: "center", color: "#262f39" }}>
                                Cannot recommend Wild Rider enough. They were really great and took all the changes in my booking (due to the Covid travel issues) in their stride. We arranged to have the car delivered to our hotel, which was really helpful.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Container>
                                <Typography variant="caption" component="span" sx={{ fontSize: "18px", fontWeight: "800", lineHeight: 1.22, textAlign: "center", color: "#262f39", letterSpacing: "2.16px", display: "grid" }}>

                                    — Shelley Trimmer
                                    <Rating name="read-only" value={5} readOnly sx={{ marginLeft: "auto", marginRight: "auto", color: "#2866ae", fontSize: "0.5rem" }} />
                                </Typography>

                                <CustomizedButtons isReadButton buttonText='READ MORE' ></CustomizedButtons>
                            </Container>
                        </CardActions>
                    </Card>
                </Carousel>
            </Container>
        </div >
    );
}

export default RatingCarouselSection;