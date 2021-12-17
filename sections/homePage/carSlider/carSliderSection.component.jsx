import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';

import CustomizedButtons from '../../../components/customizedButton/customizedButton.component';

import 'react-multi-carousel/lib/styles.css';
import styles from '../../../styles/carSlider.module.scss';

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
    const isMobile = useMediaQuery(theme.breakpoints.down(600));
    const isTablet = useMediaQuery(theme.breakpoints.down(900));
    const getFreeQuoteBtn = button.find(item => item.type.includes("QUOTE"));

    console.log(tripadvisors);

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
                                item.imagepath.find(image => image.alternativeText === "tablet")
                                :
                                item.imagepath.find(image => image.alternativeText === "web");



                        let imageSize = isMobile ? { width: image.width, height: image.height } :
                            isTablet ? { width: '1024px  !important', height: '688px !important' } :
                                { width: image.width, height: image.height };

                        let imageAdvisor = tripadvisors[0].tripadvisorlogopath.find(image => image.alternativeText === "mobile");

                        return (

                            <div className={styles.mainContainerGrid} key={index}>
                                <div >
                                    <Image src={image.url ? image.url : image} height={imageSize.height} width={imageSize.width} quality={100} />
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
                                        <div className={styles.publicyContainer} >
                                            <div className={styles.publicyImage}>
                                                <Link href={tripadvisors[0].url}>
                                                    <a>
                                                        <Image src={imageAdvisor.url} height={imageAdvisor.height} width={imageAdvisor.width} quality={100} layout='responsive' />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div >
                                                <Typography variant="p" className={styles.publicyText} component="p" >
                                                    {tripadvisors[0].content}
                                                </Typography>
                                            </div>
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