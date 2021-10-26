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


const OurTravelSection = (props) => {
    const classes = useStyles();
    const { title, otexpertsinfos, teamimagepath } = props.ourTravelData[0];
   
    function TravelExpertsCard({ infoSection }) {
        // console.log(infoSection);
        return (
            <Card className={classes.card}>
                <CardMedia>
                    <Image className={classes.cardImg} src={infoSection.img[0].url} height={242} width={350}  alt="carSection"/> 
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Box className={classes.cardTextContainer}>
                        <Typography className={classes.cardDescription}>
                            {infoSection.desc}
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
                    <Typography className={classes.title}>{title}</Typography>
                    <Box className={classes.cardsContainer}>

                        {
                            otexpertsinfos.map((x, i) => {
                                return (
                                    <Box key={i} className={classes.cardContainer}>
                                        <TravelExpertsCard key={i} infoSection={x} />
                                    </Box>)
                            })
                        }

                    </Box>
                    <Box className={classes.cardsContainer}>
                         <Image src={teamimagepath[0].url} height={410} width={1020} alt={title}>
                        </Image> 
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default OurTravelSection;