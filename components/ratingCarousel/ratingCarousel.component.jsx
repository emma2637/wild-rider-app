import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const RatingCarouselSection = () => {
    return ( 
        <>
            <Box p={2}>
                <Typography variant="h6" gutterBottom>
                    Rating Carousel
                </Typography>
                <Typography variant="body2" gutterBottom>
                    This is a carousel that can be swiped left and right.
                </Typography>
            </Box>
            <Box p={2}>
                <AutoPlaySwipeableViews
                    axis={'x'}
                    index={0}
                    onChangeIndex={(index) => {
                        console.log(index);
                    }}
                    enableMouseEvents
                >
                    <Box p={1}>
                        <Paper>
                            <Box p={1}>
                                <Typography>
                                    This is the first slide.
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                    <Box p={1}>
                        <Paper>
                            <Box p={1}>
                                <Typography>
                                    This is the second slide.
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                    <Box p={1}>
                        <Paper>
                            <Box p={1}>
                                <Typography>
                                    This is the third slide.
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                </AutoPlaySwipeableViews>
            </Box>
            
        </>
     );
}
 
export default RatingCarouselSection;