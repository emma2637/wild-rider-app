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

const mobileModeWidth = 742;
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
        padding: '30px 10px 10px',
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
    },
    learnMoreModal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '66%',
        [theme.breakpoints.down(1150)]: {
            width: '72%',
        },
        backgroundColor: 'white',
        border: 'unset',
        
        marginLeft: '8%',
        [theme.breakpoints.down(850)]: {
            marginLeft: '9%',
        },
        [theme.breakpoints.up(mobileModeWidth)]: {
            display: 'flex',
            justifyContent: 'center',
        },
        [theme.breakpoints.down(mobileModeWidth)]: {
            marginLeft: 'unset',
            width: '310px',
            height: 'max-content',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        maxHeight: '90%'
    },
    learnMoreTextContent: {
        flexGrow: '0.4',
        [theme.breakpoints.up(mobileModeWidth)]: {
            marginLeft: '150px',
            padding: '30px 0px 30px 0px',
            width: '95%',
        },
        [theme.breakpoints.down(mobileModeWidth)]: {
            padding: '10px 10px 10px 10px'
        },
        whiteSpace: "pre-line",
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
        paddingBottom: '7px',
    },
    modalDescription: {
        fontDisplay: 'optional',
        fontFamily: 'Montserrat',
        fontSize: '14px',
        lineHeight: '1.5',
        letterSpacing: '2.16px',
        textAlign: 'left',
        color: '#262f39',
        overflow: 'auto',
        height: '90%',
        marginTop: '15px',
        [theme.breakpoints.up(mobileModeWidth)]: {
            paddingTop: '15px',
            paddingRight: '5%'
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            background: 'rgba(0,0,0,0.2)',
            marginLeft: '50px'
        },
        height: '-webkit-fill-available'
    },
    modalImage: {
        [theme.breakpoints.up(mobileModeWidth)]: {
            position: 'absolute',
            marginLeft: '-105%',
            marginTop: '30px'
        },
    },
    closeModalBtn: {
        position: 'absolute',
        right: '10px',
        top: '6px',
        fontSize: '21px',
    },
    learnMoreContainer: {
        paddingTop: '20px'
    }
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
    //#region Modal
    function LearnMoreModal({ cardInfo }) {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <Box className={classes.learnMoreContainer}>
                <Typography className={classes.learnMoreTxt} onClick={handleOpen}>{learnMoreButton.text}</Typography>
                <Modal open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
                    <Fade in={open}>
                        <Box className={classes.learnMoreModal}>
                            <CloseIcon className={classes.closeModalBtn} onClick={handleClose} />
                            <Box className={classes.modalImage}>
                                <Image className={classes.cardImg} src={cardInfo.imagepath[1].url} height={144} width={310} alt={cardInfo.title} />
                            </Box>
                            <Box className={classes.learnMoreTextContent}>
                                <Typography className={classes.modalTitle}>
                                    {cardInfo.title}
                                </Typography>
                                <Divider className={classes.divider} />
                                <Typography className={classes.modalDescription}>
                                    {cardInfo.longdescription}
                                </Typography>
                            </Box>
                        </Box>
                    </Fade>
                </Modal>
            </Box>
        )
    }
    //#endregion Modal

    //#region Card
    function CompanyRelationCard({ cardInfo }) {
        return (
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Image className={classes.cardImg} src={cardInfo.imagepath[1].url} height={140} width={350} alt={cardInfo.title} />
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

// {companyRelationData.cardsInfo.map((x, i) => {
//     if (x.isMobilInfo != undefined) {
//         return(<CompanyRelationCard key={i} cardInfo={x} />)
//     }
//     else {
//         return(<CompanyRelationCard key={i} cardInfo={x} />) 
//     }
// })}

{/* <Grid sx={{ flexGrow: 1, mb: 3, mt: 3, backgroundColor: "#fc0;" }} 
  container 
  spacing={1}
  justifyContent="center"
  direction="row"
  alignItems="center"
  //sx={{ mb: 3, mt: 3, backgroundColor: "#fc0;" }}
  > */}



{/* <Grid item xs={12}>
  <Grid container
   justifyContent="center"
    spacing={1}
   >
    {cards.map((card: iCardCar, index) => (
      <Grid key={index} item xs={4}>
        <Paper sx={{ height: 450, width: 350 }} />
      </Grid>
    ))}

  </Grid>
</Grid> */}
{/* </Grid> */ }