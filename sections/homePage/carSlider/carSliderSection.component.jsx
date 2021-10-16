import React from 'react';
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import { Avatar, Card, CardContent, CardHeader, CardActionArea, CardActions, Grid, Button, CardMedia, Box, Typography, Rating } from '@mui/material';
import { red } from '@mui/material/colors';

import CustomizedButtons from '../../../components/customizedButton/customizedButton.component';
import { FiCard, FiCardActionArea, FiCardActions, FiCardContent, FiCardMedia } from '../../../components/FullImageCard/FullImageCard';

import 'react-multi-carousel/lib/styles.css';
import styles from '../../../styles/carSlider.module.scss';

const CarSliderSection = (props) => {

    console.log(props);
    const { tripAdvisor, carSliderInfo } = props.data;
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
    return (
        <>
            <div className={styles.carSliderContainer}>
                <Carousel additionalTransfrom={0} autoPlaySpeed={3000} centerMode={false} className=""
                    containerClass="container" dotListClass="" ssr={true} // means to render carousel on server-side.
                    draggable focusOnSelect={false} infinite
                    itemClass="" keyBoardControl minimumTouchDrag={80}
                    renderButtonGroupOutside={false} renderDotsOutside={false} responsive={responsive}
                    showDots sliderClass="" slidesToSlide={1} swipeable
                >
                    {carSliderInfo.map((item, index) => {

                        return (
                            <FiCard key={index}>
                                <FiCardMedia media="picture" alt="Car" image={item.imagePath}>
                                    <Image src={item.imagePath} layout="fill" objectFit="" priority loading="eager" />
                                </FiCardMedia>
                                <FiCardContent  className={styles.cardContentResponsive}>
                                    <Box className={styles.titleContainer}>
                                        <Typography gutterBottom variant="h5" component="div" className={styles.title}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                    {item.description.split('.').map((item, index) => {
                                        return (
                                            <Typography variant="body2" className={styles.caption} component="p" key={index}>
                                                {item}
                                            </Typography>
                                        )
                                    })}

                                    <CustomizedButtons type="getFreeQuoteBtn" buttonText={item.Button} /> 
                                    {item.rating ?
                                        <Box className={styles.ratingBox}>
                                            <Card className={styles.rating}>
                                                <CardHeader
                                                    avatar={
                                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="profileImage" className={styles.avatar}>
                                                            <Image src={item.rating.profileImagePath} width={30} height={30} layout="responsive" objectFit="fill" />
                                                        </Avatar>
                                                    }
                                                    title={
                                                        <Rating name="read-only" value={item.rating.rate} readOnly className={styles.rating.value} />
                                                    } />
                                                <CardContent>
                                                    <Typography className={styles.rating.content}>
                                                        {item.rating.comment}
                                                    </Typography>
                                                    <Typography className={styles.rating.subContent}>
                                                        {item.rating.name}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Box> : <Box />
                                    }
                                    {
                                        item.hasTripAdvisor ?
                                            <Box className={styles.tripBox}>
                                                <Card className={styles.tripAdvisor}>
                                                    <CardHeader title={
                                                        <Typography className={styles.tripAdvisor.title}>
                                                            {tripAdvisor.content}
                                                        </Typography>
                                                    }

                                                        avatar={
                                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="tripadvisorImage" className={styles.avatar}>
                                                                <Image src={tripAdvisor.tripAdvisorLogoPath} width={30} height={30} layout="responsive" objectFit="fill" />
                                                            </Avatar>
                                                        } />
                                                </Card> 
                                            </Box>: null
                                    }
                                </FiCardContent>
                            </FiCard>
                        )
                    })}

                </Carousel>
            </div>
        </>
    );
}

export default CarSliderSection;