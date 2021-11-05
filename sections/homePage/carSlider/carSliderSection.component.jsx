import React from 'react';
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';

import { red } from '@mui/material/colors';

import CustomizedButtons from '../../../components/customizedButton/customizedButton.component';
import { FiCard, FiCardContent, FiCardMedia } from '../../../components/FullImageCard/FullImageCard';

import 'react-multi-carousel/lib/styles.css';
import styles from '../../../styles/carSlider.module.scss';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide:1// optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide:1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const CarSliderSection = (props) => {

    const { button, cars } = props;
    const { tripadvisors, carsliderinfos } = cars;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    const getFreeQuoteBtn = button.find(item => item.type.includes("QUOTE"));

    // console.log('carsliderinfos',carsliderinfos);


    const CustomDot = ({ onMove, index, onClick, active }) => {
        // onMove means if dragging or swiping in progress.
        // active is provided by this lib for checking if the item is active or not.
        return (
            <li
                className={active ? styles.active : styles.inactive}
                onClick={() => onClick()} />
        );
    };
    return (
        <>
            <div className={styles.carSliderContainer}>
                <Carousel additionalTransfrom={0}
                    autoPlaySpeed={3000}
                    arrows={false}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    // dotListClass={styles.dotList}
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
                    customDot={<CustomDot />}

                >
                    {carsliderinfos.map((item, index) => {
                        console.log('item', item.imagepath);
                        return (
                            <FiCard key={index} >
                                <FiCardMedia media="picture" alt="Car" >
                                    <Image src={item.imagepath[0].url}
                                        width={item.imagepath[0].width} height={item.imagepath[0].height} quality={90}
                                        layout="fill"
                                        objectFit="fill"
                                        priority
                                        alt={item.title} />
                                </FiCardMedia>
                                <FiCardContent className={styles.cardContentResponsive}>
                                    <Box className={styles.titleContainer}>
                                        <Typography gutterBottom variant="h5" component="div" className={styles.title}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                    {item.description?.split('.').map((item, index) => {
                                        return (
                                            <Typography variant="body2" className={styles.caption} component="p" key={index}>
                                                {item}
                                            </Typography>
                                        )
                                    })}

                                    <CustomizedButtons type={"getFreeQuoteBtn"} buttonText={getFreeQuoteBtn.text} />
                                    {
                                        item.carratings[0] ?
                                            <Box className={styles.ratingBox}>
                                                <Card className={styles.rating}>
                                                    <CardHeader className={styles.ratingHeader}
                                                        avatar={
                                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="profileImage" className={styles.avatar}>
                                                                <Image src={item.carratings[0].profileimagepath[0].url} width={item.carratings[0].profileimagepath[0].width} height={item.carratings[0].profileimagepath[0].height} layout="responsive" objectFit="fill" alt={item.carratings[0].name} />
                                                            </Avatar>
                                                        }
                                                        title={
                                                            <Rating name="read-only" value={item.carratings[0].rate} readOnly className={styles.rating.value} />
                                                        } />
                                                    <CardContent className={styles.ratingContent}>
                                                        <Typography className={styles.content}>
                                                            {item.carratings[0].comment}
                                                        </Typography>
                                                        <Typography className={styles.subContent}>
                                                            {item.carratings[0].name}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Box> : <Box />
                                    }
                                    {
                                        tripadvisors[0] ?
                                            <Box className={styles.tripBox}>
                                                <Card className={styles.tripAdvisor}>
                                                    <CardHeader title={
                                                        <Typography className={styles.tripAdvisor.title}>
                                                            {tripadvisors[0].content}
                                                        </Typography>
                                                    }

                                                        avatar={
                                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="tripadvisorImage" className={styles.avatar}>
                                                                <Image src={tripadvisors[0].tripadvisorlogopath[0].url} width={30} height={30} layout="responsive" objectFit="fill" alt="tripAdvisor" />
                                                            </Avatar>
                                                        } />
                                                </Card>
                                            </Box> : null
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