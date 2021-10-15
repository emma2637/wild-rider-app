import React from 'react';
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import { Card,Button } from '@mui/material'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import classNames from "classnames";

import CustomizedButtons from '../customizedButton/customizedButton.component';
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


    const CustomDot = ({ onClick, active, index, carouselState }) => {
        const { currentSlide } = carouselState;
            console.log(currentSlide + ' current slide');
            console.log(active +' active');
            console.log(index + ' index');

        return (
          <li data-index={index}>
            <button
              className={active? styles.active : ""}
              onClick={e => {
                onClick();
                e.preventDefault();
              }}
            />
          </li>
        );
      };
// position: absolute;
// bottom: 0;
// display: -webkit-flex;
// display: -moz-box;
// display: flex;
// left: 0;
// right: 0;
// -webkit-justify-content: center;
// -moz-box-pack: center;
// justify-content: center;
// margin: auto;
// padding: 0;
// margin: 0;
// list-style: none;


//button
// display: inline-block;
//     width: 12px;
//     height: 12px;
//     border-radius: 50%;
//     opacity: 1;
//     padding: 5px 5px 5px 5px;
//     -webkit-box-shadow: none;
//     box-shadow: none;
//     -webkit-transition: background .5s;
//     transition: background .5s;
//     border-width: 2px;
//     border-style: solid;
//     border-color: grey;
//     padding: 0;
//     margin: 0;
//     margin-right: 6px;
//     outline: 0;
//     cursor: pointer;

//.react-multi-carousel-dot--active button 
//background: #080808;

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
                    className={styles.Container}
                    // containerClass="container-with-dots"
                    containerClass={styles.Container}
                    dotListClass={styles.dotListClass}
                    sliderClass={styles.sliderClass}
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass={styles.itemClass}
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside
                    responsive={responsive}
                    showDots
                    slidesToSlide={1}
                    swipeable
                    customDot={<CustomDot />}
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

                                <CustomizedButtons type="readMoreBtn" buttonText='READ MORE' ></CustomizedButtons>
                            </Container>
                        </CardActions>
                    </Card>
                </Carousel>
            </Container>
        </div >
    );
}

export default RatingCarouselSection;