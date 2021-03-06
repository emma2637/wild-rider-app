import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';
import ListItemText from '@mui/material/ListItemText';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';
import Container from '@mui/material/Container';
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
        fontDisplay: 'optional',
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
        fontDisplay: 'optional',
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


const OurTravelSection = ({ data }) => {
    const classes = useStyles();
    const { title, otexpertsinfos, teamimagepath } = data;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(425));
    const isTablet = useMediaQuery(theme.breakpoints.down(1024));

    let imageSrc = validateImage();
    let imgSize = isMobile? { width: imageSrc.width, height: imageSrc.height } : { width: '1120px', height: '410px' };

    function validateImage() {
        return isMobile ?
            teamimagepath.find(image => image.alternativeText === "mobile") :
            teamimagepath.find(image => image.alternativeText === "web");
    }

    function TravelExpertsCard({ infoSection }) {
        return (
            <Card className={classes.card}>
                <CardMedia>
                    <Image className={classes.cardImg} src={infoSection.imagepath[0].url} height={242} width={350} alt="carSection" />
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
                        <div style={{ width: imgSize.width, height: imgSize.height }}>
                            <Image src={imageSrc.url} height={imgSize.height} width={imgSize.width} alt={title} layout='responsive' quality='100' />
                        </div>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default OurTravelSection;