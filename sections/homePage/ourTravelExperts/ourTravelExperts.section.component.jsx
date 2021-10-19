import React from 'react';
import { Box, Button, Card, CardContent, Divider, Container, CardMedia, ListItemText, Modal, Typography, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'block',
    },
    container: {
        position: 'relative',
        textAlign: 'left',
        padding: '20px',
    },
    title: {
        fontFamily: "Raleway",
        fontSize: "36px",
        fontWeight: 600,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1.61,
        letterSpacing: "-1.62px",
        textAlign: "center",
        color: "#262f39"
    },
    card: {
        margin: '10px',
        [theme.breakpoints.down(760)]: {
            margin: '0px 6px 6px 6px',
        },
        width: '350px',
        boxShadow: 'none'
        // '& .MuiCardContent-root': {
        //     padding: "unset !important"
        // }
    },
    cardsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    cardContainer: {
        flexBasis: '28%',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            flexBasis: '100%'
        },
        [theme.breakpoints.down('md')]: {
            flexBasis: '50%'
        },
        [theme.breakpoints.down('lg')]: {
            flexBasis: '40%'
        },
        [theme.breakpoints.down('1280')]: {
            flexBasis: '39%'
        },
        width: '100%',
        marginTop: "20px"
    },
    cardDescription: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.5,
        letterSpacing: 'normal',
        // [theme.breakpoints.down(mobileModeWidth)]: {
        //     height: '150px',
        // },
    },
    cardTextContainer: {
        width: '291px',
        padding: '1px 0 10px 0',
        margin: '0 auto',
        width: 'fill',
        height: '100%',
    },
    cardImg: {
        maxWidth: '350px',
        maxHeight: '242px',
    }

}), { name: 'MuiOurTravelExperts' });

const ourTravelData = {
    title: 'Our Travel Experts',
    infoSections: [
        {
            imagePath: 'https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/56fc0452-de3e-4f1c-b770-750a78e0d99b.png',
            description: 'We have all been living in Costa Rica for more than 25 years and have travelled a lot during this time. Morten is passionate surfer and know all beaches, waves, which tides and swells they need and the cool places you should check out. Along both coasts.'
        },
        {
            imagePath: 'https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/56fc0452-de3e-4f1c-b770-750a78e0d99b.png',
            description: 'As a motorcycle tour guide, Thomas has travelled about 500,000 km by motorcycle in Costa Rica. In the years 1992-1997 he was mainly traveling on his mountain bike through Costa Rica.'
        },
        {
            imagePath: 'https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/56fc0452-de3e-4f1c-b770-750a78e0d99b.png',
            description: 'Jose who worked less time outdoors, knows a lot of  the Costa Rica’s best restaurants and interesting destinations.  We look forward to sharing this knowledge and experience with you. Our goal is to organize an unforgettable and unique vacation for you.'
        }
    ],
    teamImagePath: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
}

const OurTravelSection = () => {
    const classes = useStyles();


    function TravelExpertsCard({ infoSection }) {
        return (
            <Card className={classes.card}>
                <CardMedia>
                    <Image className={classes.cardImg} src={infoSection.imagePath} height={242} width={350} />
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Box className={classes.cardTextContainer}>
                        <Typography className={classes.cardDescription}>
                            {infoSection.description}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        )
    }


    return (
        <>
            <Box className={classes.container}>
                <Box className={classes.content}>
                    <Typography className={classes.title}>{ourTravelData.title}</Typography>
                    <Box className={classes.cardsContainer}>

                        {
                            ourTravelData.infoSections.map((x, i) => {
                                return (
                                    <Box key={i} className={classes.cardContainer}>
                                        <TravelExpertsCard key={i} infoSection={x} />
                                    </Box>)
                            })
                        }

                    </Box>
                    <Box className={classes.cardsContainer}>
                        <Image src={ourTravelData.teamImagePath} height={410} width={1020}>
                        </Image>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default OurTravelSection;