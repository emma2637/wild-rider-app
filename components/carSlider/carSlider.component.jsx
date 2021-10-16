import React from 'react';
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import CustomizedButtons from '../customizedButton/customizedButton.component';
import { Card, CardContent, CardHeader, CardActionArea, CardActions, Grid, Button, CardMedia, Box } from '@mui/material';
import { red } from '@mui/material/colors';
import { ReactComponent as tripAdvisorLogo } from '../../public/tripAdvisorLogo.svg'


import {
    FiCard,
    FiCardActionArea,
    FiCardActions,
    FiCardContent,
    FiCardMedia
} from "../FullImageCard/FullImageCard";

import 'react-multi-carousel/lib/styles.css';
import styles from '../ratingCarousel/ratingCustom-dots.module.scss'

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

const CarSliderSection = (props) => {

    let carData = props.data;
    const totalItems = props.length ? props.length : 1;
    const mediaLength = totalItems - 1;
    // const CustomDot = ({ onClick, active, index, carouselState }) => {
    //     const { currentSlide } = carouselState;
    //     console.log(currentSlide + ' current slide');
    //     console.log(active + ' active');
    //     console.log(index + ' index');

    //     return (
    //         <li data-index={index}>
    //             <button
    //                 className={active ? styles.active : ""}
    //                 onClick={e => {
    //                     onClick();
    //                     e.preventDefault();
    //                 }}
    //             />
    //         </li>
    //     );
    // };

    return (
        <div
            style={{
                position: 'relative',
                textAlign: 'center',
                marginTop: '56px',

            }}
        >

            <Carousel
                additionalTransfrom={0}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                ssr={true} // means to render carousel on server-side.
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {
                    carData.map((item, index) => {
                        const gridKeyId = `content-${index}`;
                        return (
                            <Grid item xs={12 / totalItems} key={gridKeyId}>
                                <FiCard >
                                    <FiCardMedia
                                        media="picture"
                                        alt="Contemplative Reptile"
                                        image={item.Image}
                                        title="Contemplative Reptile"
                                    >
                                        <Image src={item.Image} layout="fill" objectFit="" priority loading="eager"  />

                                    </FiCardMedia>
                                    <FiCardContent >
                                        <Box>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '24px', color: "#FFF", textAlign: 'left' }}>
                                                {item.Name}
                                            </Typography>
                                        </Box>


                                        {item.Caption.split('.').map((item, index) => {
                                            return (
                                                <Typography
                                                    variant="body2"
                                                    className=''
                                                    component="p"
                                                    sx={{ fontSize: '14px', color: "#FFF", textAlign: 'left' }}
                                                    key={index}
                                                >
                                                    {item}
                                                </Typography>
                                            )
                                        })}

                                        <CustomizedButtons type="getFreeQuoteBtn" buttonText={item.Button} />
                                        {item.Rating ?
                                            <Box>
                                                <Card
                                                //</Box>className={styles.Rating} 
                                                >
                                                    <CardHeader
                                                        avatar={
                                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="profileImage"
                                                            //className={styles.Avatar}

                                                            >
                                                                <Image src=
                                                                    {item.Rating.ProfileImage}
                                                                    width={30}
                                                                    height={30}
                                                                    layout="responsive"
                                                                    objectFit="fill" />
                                                            </Avatar>
                                                        }
                                                        title={
                                                            <Rating name="read-only" value={item.Rating.Stars} readOnly sx={{ textAlign: 'left' }} />
                                                        }

                                                    />
                                                    <CardContent>
                                                        <Typography
                                                        //className={styles.RatingContent}

                                                        >
                                                            {item.Rating.Comment}
                                                        </Typography>
                                                        <Typography
                                                        //className={styles.RatingSubContent}
                                                        >
                                                            {item.Rating.Name}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Box> : <Box />
                                        }
                                        {
                                            item.TripAdvisor ?
                                                <Card
                                                //className={styles.TripAdvisor}
                                                >
                                                    <CardHeader title={
                                                        <Typography
                                                        //className={styles.TripAdvisorTitle}
                                                        >
                                                            {item.TripAdvisor.Content}
                                                        </Typography>
                                                    }

                                                        avatar={
                                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="tripadvisorImage"
                                                            //className={styles.Avatar}

                                                            >
                                                                <Image src={item.TripAdvisor.Image} width={30} height={30} layout="responsive" objectFit="fill" />

                                                            </Avatar>
                                                        } />
                                                </Card> : null
                                        }


                                    </FiCardContent>
                                    <FiCardActions className=''>
                                     
                                    </FiCardActions>
                                </FiCard>
                            </Grid>
                        )
                    })
                }

            </Carousel>
        </div >
    );
}

export default CarSliderSection;