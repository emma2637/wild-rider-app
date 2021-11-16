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
import hero from '../../../public/hero@2x.png'
import heroTablet from '../../../public/hero-tablet@2x.jpg'
import heroMobile from '../../../public/carousel_Mobile@2x.jpg'
import { flexbox, grid, width } from '@mui/system';

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

    const { button, cars } = props;
    const { tripadvisors, carsliderinfos } = cars;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(425));
    const isTablet = useMediaQuery(theme.breakpoints.down(1024));
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
                    containerClass="cardContainer"
                    dotListClass={styles.dotList}
                    ssr={true} // means to render carousel on server-side.
                    draggable
                    focusOnSelect={false}
                    infinite
                    // itemClass={styles.itemClass}
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
                        let image = isMobile ?
                            item.imagepath.find(image => image.alternativeText === "mobile") :
                            isTablet ?
                                // item.imagepath.find(image => image.alternativeText === "tablet") 
                                heroTablet :
                                item.imagepath.find(image => image.alternativeText === "web");


                        let heightImage = isMobile ? '731px !important' : isTablet ? '688px !important' : '720px !important';
                        let widthImage = isMobile ? '375px !important' : isTablet ? '1024px !important' : '1440px !important';

                        // let image = isMobile ? heroMobile : isTablet ? heroTablet : hero;
                        return (

                            <div className={styles.mainContainerGrid} key={index}>
                                <div >
                                    <Image src={image.url ? image.url : image} height={heightImage} width={widthImage} quality={100} />
                                    <div className={styles.containerFlex} >
                                        <div className={styles.text}>
                                            <Typography gutterBottom variant="p" component="p" className={styles.heading}>
                                                {item.title}
                                            </Typography>
                                        </div>

                                        {item.description?.split('.').map((item, index) => {
                                            return (
                                                <div className={styles.text} key={index}>
                                                    <Typography variant="P" className={styles.subheading} component="p" >
                                                        {item}
                                                    </Typography>
                                                </div>
                                            )
                                        })}
                                        <div className={styles.text}>
                                            <CustomizedButtons type={"getFreeQuoteBtn"} buttonText={getFreeQuoteBtn.text} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}

                </Carousel>
            </div>
        </>
    );
}

export default CarSliderSection;