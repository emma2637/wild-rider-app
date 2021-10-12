import React from "react";
import Carousel from 'react-material-ui-carousel'
import Banner from "../banner/banner.component";
import Items from './carousel.data'
import styles from '../../styles/carousel.module.scss'

const Slider = (props) => {
    const [autoPlay, setAutoPlay] = React.useState(false);
    const [animation, setAnimation] = React.useState("slide");
    const [indicator, setIndicator] = React.useState(true);
    const [timeout, setTimeout] = React.useState(500);
    const [navButtonsAlwaysVisible, setNavButtonsAlwaysVisible] = React.useState(false);
    const [navButtonsAlwaysInvisible, setNavButtonsAlwaysInvisible] = React.useState(false);
    const [cycleNavigation, setCycleNavigation] = React.useState(true);


    return (
        <div>
            <Carousel
                autoPlay={autoPlay}
                animation={animation}
                indicator={indicator}
                timeout={timeout}
                navButtonsAlwaysVisible={navButtonsAlwaysVisible}
                navButtonsAlwaysInvisible={navButtonsAlwaysInvisible}
                cycleNavigation={cycleNavigation}
                next={(now, previous) => {
                    console.log(now, previous);
                }}
                prev={(now, previous) => {
                    console.log(now, previous);
                }}

                indicatorContainerProps={{
                    style: {
                        marginBottom: '0', // 5
                        textAlign: 'center', // 4
                        position: 'relative', // 3
                        bottom: '80px', // 2
                        zIndex:'3'
                    }

                }}
                indicatorIconButtonProps={{
                    style: {
                        color: '#f2f2f2', // 1
                        zIndex:'3'

                    }
                }}

                activeIndicatorIconButtonProps={{
                    style: {
                        color: '#ffcc00', // 1
                        zIndex:'3'

                    }
                }}
                >
                {/* // fullHeightHover={false}
                    // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
                    // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
                    // indicatorContainerProps={{style: {margin: "20px"}}}
                    // NextIcon='next' */}
                {

                    Items.map((item, index) => {
                         return <Banner item={item} key={index} contextPosition={item.contentPosition} />
                    })
                }
            </Carousel>
        </div>
    );
};

export default Slider;
