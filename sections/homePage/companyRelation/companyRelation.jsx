import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';

import { makeStyles } from '@mui/styles';
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close';

const mobileModeWidth = 752;
const desktopSmallModeWith = 1000;
const useStyles = makeStyles(theme => ({
    content: {
        display: 'block',
        position: 'relative',
        top:'-150px',
        zIndex: '5',
        width: '-webkit-fill-available',
        marginBottom: '-160px',
    },
    mainContainer: {
        backgroundColor: "#fc0;",
        height: '80%',
        paddingLeft: '0px',
        paddingRight: '0px',
    },
    card: {
        width: '350px',
        '& .MuiCardContent-root': {
            padding: "unset !important",
            height: '100%',
            display: 'flex',
            flexFlow: 'column'
        },
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
        padding: '13px 13px 13px 13px',
        [theme.breakpoints.down(mobileModeWidth)]: {
            flexBasis: '100%',
        },
        width: '100%',
    },
    cardTitle: {
        fontFamily: 'Raleway',
        fontDisplay: 'optional',
        fontSize: '18px',
        fontWeight: '800',
        color: '#262f39',
        textTransform: 'uppercase',
        height: '54px',
        paddingBottom: '6px',
        [theme.breakpoints.down(mobileModeWidth)]: {
            height: 'unset',
        },
    },
    cardDescription: {
        fontFamily: 'Montserrat',
        fontDisplay: 'optional',
        fontSize: '16px',
        fontWeight: '500',
        paddingTop: '12px',
        whiteSpace: "pre-line",
        flexGrow: 1
    },
    cardTextContainer: {
        width: '291px',
        padding: '10px 20px 10px 20px',
        margin: '0 auto',
        width: 'fill',
        display: 'flex',
        flexFlow: 'column',
        flexGrow: 1
    },
    divider: {
        width: '30px',
        height: '4px',
        backgroundColor: '#c4c4c4'
    },
    title: {
        fontDisplay: 'optional',
        fontFamily: 'Raleway',
        fontSize: '30px',
        fontWeight: '600',
        lineHeight: '1.61',
        textAlign: 'center',
        color: '#262f39',
        padding: '0px 9px 16px 9px',
    },

    learnMoreTxt: {
        textDecoration: 'underline',
        color: '#262f39',
        padding: '0px',
        fontWeight: "bold",
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'unset',
        },
        width: 'max-content',
        paddingTop: '16px'
    },
    learnMoreModal: {
        minHeight: '288px',
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        border: 'unset',
        [theme.breakpoints.down(mobileModeWidth)]:{
            width: '100%',
            display:'block',
            overflow:'hidden',
            left: '50% !important',
            maxWidth: '400px',
            height: '100%'
        },
        
        [theme.breakpoints.up(mobileModeWidth)]:{
            width: '70%',
            display:'flex',
            justifyContent: 'center',
            height: 'fit-content',
            left: '55%',
            maxWidth: '920px',
        },
        [theme.breakpoints.up(1800)]:{
            left: '49%',
        },
        [theme.breakpoints.up(1400)]:{
            left: '59%',
        },
        [theme.breakpoints.down(1400)]:{
            left: '60%',
        },
        [theme.breakpoints.down(1200)]:{
            left: '61%',
        },
        [theme.breakpoints.down(1100)]:{
            left: '62%',
        },
        [theme.breakpoints.down(1000)]:{
            left: '60%',
        },
        [theme.breakpoints.down(860)]:{
            left: '62%',
        },
        minWidth: '250px',
        
    },

    closeModalBtn: {
        [theme.breakpoints.up(mobileModeWidth)]: {
            position: 'absolute',
            marginLeft: '94%',
            marginTop: '5px'
        },
        [theme.breakpoints.down(mobileModeWidth)]: {
            margin: '8px 5px 8px 0px',
            fontSize: '22px',
            float: 'right'
        },
        
    },
    imageContainer: {
        [theme.breakpoints.down(mobileModeWidth)]: {
            width: '100%',
            height: '160px',
            position: 'relative',
            image: {
                width: '100%',
                height: '100%',
                position: 'relative !important',
                objectFit: 'cover',
            }
        },
        [theme.breakpoints.up(desktopSmallModeWith)]: {
            width: '360px',
            height: '220px',
            
            image: {
                width: '100%',
                height: '100%',
                position: 'relative !important',
                objectFit: 'cover',
            }
        },
        [theme.breakpoints.between(mobileModeWidth, desktopSmallModeWith)]: {
            width: '300px',
            height: '180px',
            image: {
                width: '100%',
                height: '100%',
                position: 'relative !important',
                objectFit: 'cover',
            }
        },
        
    },
    modalImage: {
        [theme.breakpoints.up(mobileModeWidth)]: {
            position: 'absolute',
            marginLeft: '-116%',
            marginTop: '30px'
        },
        [theme.breakpoints.between(mobileModeWidth, desktopSmallModeWith)]: {
            marginLeft: '-110%',
            position: 'absolute',
            marginTop: '30px'
        },
        [theme.breakpoints.down(mobileModeWidth)]: {
            display: 'inline-block',
            textAlign: 'center',
            width: '100%',
        },
        padding: '0px 15px 0px 15px',
        
    },
    learnMoreTextContent: {
        flexGrow: '0.4',
        whiteSpace: "pre-line",
        [theme.breakpoints.up(mobileModeWidth)]: {
			height: '-webkit-fill-available',
			overflow: 'hidden'
        },
        [theme.breakpoints.up(1100)]:{
            margin: '30px 96px 50px 155px'
        },
        [theme.breakpoints.between(mobileModeWidth, 1100)]:{
            margin: '30px 40px 50px 155px'
        },
        [theme.breakpoints.down(mobileModeWidth)]: {
            margin: '3px 0px 0px 15px',
        },
    },
    titleContainer:{
        width: '281px',
        [theme.breakpoints.down(mobileModeWidth)]: {
            width: '281px',
            height: '42px',
            padding: '12px 0px 11px 0px',
            display: 'inline-table'
        },
        [theme.breakpoints.up(mobileModeWidth)]: {
            marginBottom: '14px',
        },

    },
    modalTitle: {
        fontDisplay: 'optional',
        fontFamily: 'Raleway',
        fontSize: '18px',
        fontWeight: '800',
        lineHeight: '1.33',
        letterSpacing: '2.16px',
        textAlign: 'left',
        color: '#262f39',
    },
    divider: {
        width: '30px',
        height: '4px',
        backgroundColor: '#c4c4c4'
    },
    modalDescBox: {
        overflow: 'auto',
        margin: '16px 3px 10px 0px',
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            background: 'rgba(0,0,0,0.2)',
            marginLeft: '50px'
        },
        [theme.breakpoints.down(mobileModeWidth)]: {
            height: 'calc(100vh - 315px);'
        },
        [theme.breakpoints.up(mobileModeWidth)]: {
            height: 'calc(100% - 68px)'
        },
        
    },
    modalDescription: {
        fontDisplay: 'optional',
        fontFamily: 'Montserrat',
        fontSize: '14px',
        lineHeight: '1.5',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#262f39',
        overflow: 'auto',
        paddingRight: '12px',
    },
    
})
    , { name: "MuiCompanyRelationComponent" });

const CompanyRelation = (props) => {

    console.log("CompanyRelation props", props);

    const { button, companyrelationD } = props;
    const { thrustworthycarrentalinfos, title, Shorttitle } = companyrelationD;
    const learnMoreButton = button.find((x) => x.type === "LEARN MORE");

    const theme = useTheme();
    const classes = useStyles();
    const isMobile = useMediaQuery(theme.breakpoints.down(mobileModeWidth));
    const isDesktopS = useMediaQuery(theme.breakpoints.down(desktopSmallModeWith));

    //#region Modal
    function LearnMoreModal({ cardInfo }) {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        const urlImgMobile = cardInfo.imagepath.find((x) => x.alternativeText == "mobile")?.url;
        const urlImgWebSmall = cardInfo.imagepath.find((x) => x.alternativeText == "webSmall")?.url;
        const urlImgWeb = cardInfo.imagepath.find((x) => x.alternativeText == "webSmall")?.url;;

        return (
            <Box>
                <Typography className={classes.learnMoreTxt} onClick={handleOpen}>{learnMoreButton.text}</Typography>
                <Modal open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
                     <Fade in={open}>
                         <Box className={classes.learnMoreModal}>
                             <CloseIcon className={classes.closeModalBtn} onClick={handleClose} />
                            <Box className={classes.modalImage}>
                                 {isMobile ? 
                                    (<>
                                        <Box className={classes.imageContainer }>
                                            <Image className={classes.modalImage} src={urlImgMobile} layout="fill" alt={cardInfo.title} />                                            
                                        </Box>
                                    </>) :
                                    isDesktopS ?
                                        (<>
                                            <Box className={classes.imageContainer }>
                                                <Image className={classes.modalImage} src={urlImgWebSmall} layout="fill" alt={cardInfo.title} />                                            
                                            </Box>
                                        </>) :
                                        (<>
                                            <Box className={classes.imageContainer }>
                                                <Image className={classes.modalImage} src={urlImgWeb} layout="fill" alt={cardInfo.title} />
                                            </Box>
                                        </>) 
                                 }
                             </Box>
                             <Box className={classes.learnMoreTextContent}>
                                 <Box className={classes.titleContainer}>
                                    <Typography className={classes.modalTitle}>
                                        {cardInfo.title}
                                    </Typography>
                                 </Box>
                                 <Divider className={classes.divider} />
                                 <Box className={classes.modalDescBox}>
                                     <Typography className={classes.modalDescription}>
                                         {cardInfo.longdescription}
                                     </Typography>
                                 </Box>
                             </Box>
                         </Box>
                     </Fade>
                 </Modal>
            </Box>
        )
    }
    //     return (
    //         <Box className={classes.learnMoreContainer}>
    //             <Typography className={classes.learnMoreTxt} onClick={handleOpen}>{learnMoreButton.text}</Typography>
    //             <Modal open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
    //                 <Fade in={open}>
    //                     <Box className={classes.learnMoreModal}>
    //                         <CloseIcon className={classes.closeModalBtn} onClick={handleClose} />
    //                         <Box className={classes.modalImage}>
    //                             {isSmallScreen ?
    //                                     (<>
    //                                         <Image className={classes.cardImg} src={cardInfo.imagepath[1].url} height={200} width={340} alt={cardInfo.title} />
    //                                     </>) :
    //                                     (<>
    //                                         <Image className={classes.cardImg} src={cardInfo.imagepath[0].url} height={259} width={414} alt={cardInfo.title} />
    //                                     </>) 
    //                             }
    //                         </Box>
    //                         <Box className={classes.learnMoreTextContent}>
    //                             <Typography className={classes.modalTitle}>
    //                                 {cardInfo.title}
    //                             </Typography>
    //                             <Divider className={classes.divider} />
    //                             <Box className={classes.modalDescBox}>
    //                                 <Typography className={classes.modalDescription}>
    //                                     {cardInfo.longdescription}
    //                                 </Typography>
    //                             </Box>
    //                         </Box>
    //                     </Box>
    //                 </Fade>
    //             </Modal>
    //         </Box>
    //     )
    // }
    //#endregion Modal

    //#region Card
    function CompanyRelationCard({ cardInfo }) {
        const urlImgCard = cardInfo.imagepath.find((x) => x.alternativeText == "card").url;
        return (
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Image className={classes.cardImg} src={urlImgCard} height={140} width={350} alt={cardInfo.title} />
                    <Box className={classes.cardTextContainer}>
                        <Typography className={classes.cardTitle}>
                            {cardInfo.title}
                        </Typography>
                        <Divider className={classes.divider} />
                        <Typography className={classes.cardDescription}>
                            {cardInfo.shortdescription}
                        </Typography>
                        <LearnMoreModal cardInfo={cardInfo} />
                    </Box>
                </CardContent>
            </Card>
        )
    }
    //#endregion Card
    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.content}>
                <Typography className={classes.title}>{isMobile ? Shorttitle : title}</Typography>
                <Box className={classes.cardsContainer}>
                    {thrustworthycarrentalinfos.map((x, i) => (
                        <Box key={i} className={classes.cardContainer}>
                            <CompanyRelationCard key={i} cardInfo={x} />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default CompanyRelation;
