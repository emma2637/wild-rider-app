import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';

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

const Rating={
    Title:"What are our clients saying about Wild Rider?",
    ratingCarouselData:{
        description:"Cannot recommend Wild Rider enough. They were really great and took all the changes in my booking (due to the Covid travel issues) in their stride. We arranged to have the car delivered to our hotel, which was really helpful."
    }
}


const RatingCarouselSection = (props) => {

    // const { ratingCarouselData } = props.data;
    return (
        <div
            style={{
                // padding: '30px',
                padding: "0 80px",
                position: 'relative'
            }}
        >
            <Container>
                <Box
                    style={{
                        padding: '30px',
                        position: 'relative'
                    }}
                >
                    <Typography variant="h5" component="span" gutterBottom sx={{ fontSize: "30px", fontWeight: "600", lineHeight: 1.6, textAlign: "center", color: "#262f396" }}>
                        What are our clients saying about Wild Rider?
                    </Typography>

                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container"
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
                    >
                        <Card>
                            <CardHeader>

                            </CardHeader>
                            <CardMedia>
                                <Avatar aria-label="profileImage">
                                    <Image src={'https://st4.depositphotos.com/15648834/23779/v/1600/depositphotos_237795810-stock-illustration-unknown-person-silhouette-profile-picture.jpg'} width={137} height={137} layout="responsive" objectFit="fill" />
                                </Avatar>
                            </CardMedia>
                            <CardContent>
                                <Typography variant="body2" component="p" sx={{ fontSize: "20px", fontWeight: "500", lineHeight: 1.6, textAlign: "center", color: "#262f39" }}>
                                    {/* {ratingCarouselData.description} */} Cannot recommend Wild Rider enough. They were really great and took all the changes in my booking (due to the Covid travel issues) in their stride. We arranged to have the car delivered to our hotel, which was really helpful.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>

                            </CardActions>
                        </Card>
                    </Carousel>
                </Box>
            </Container>
            {/* <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container"
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
                    >

                        <Card>
                            <CardHeader
                                title="Rating 1"
                                subheader="Subheader">


                            </CardHeader>

                        </Card>
                    </Carousel> */}
        </div >
    );
}

export default RatingCarouselSection;