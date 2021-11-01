import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { Box, Button, Card, CardContent, Divider, Fade, ListItem, ListItemText, Modal, Typography, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image'



const mobileModeWidth = 742;
const useStyles = makeStyles(theme => ({
    content: {
        display: 'block',
        position: 'absolute',
        marginTop: '-151px',
        width: '-webkit-fill-available'
    },
    mainContainer: {
        backgroundColor: "#fc0;",
        height: '930px',
        paddingLeft: '0px',
        paddingRight: '0px',
        [theme.breakpoints.down(1098)]: {
            height: '1400px',
        },
        [theme.breakpoints.down(840)]: {
            height: '1450px',
        },
        [theme.breakpoints.down(mobileModeWidth)]: {
            height: '980px',
        },
        [theme.breakpoints.down(355)]: {
            height: '1010px',
        },
        [theme.breakpoints.down(353)]: {
            height: '1090px',
        },
        [theme.breakpoints.down(330)]: {
            height: '1070px',
        },
    },
    card: {
        margin: '0px 8px 8px 8px',
        [theme.breakpoints.down(760)]: {
            margin: '0px 6px 6px 6px',
        },
        width: '350px',
        '& .MuiCardContent-root': {
           padding: "unset !important" 
        }
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
        [theme.breakpoints.down(mobileModeWidth)]: {
            flexBasis: '100%'
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
        marginRight: '55px',
        height: '54px',
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
        height: '240px',
        [theme.breakpoints.down(mobileModeWidth)]: {
            height: '150px',
        },
    },
    cardTextContainer: {
        width: '291px',
        padding: '10px 20px 10px 20px',
        margin: '0 auto',
        width: 'strech',
    },
    divider: {
        width: '30px',
        height: '4px',
        backgroundColor: '#c4c4c4'
    },
    title: {
        fontFamily: 'Raleway',
        fontDisplay: 'optional',
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
        fontWeight:"bold",
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
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '8%',
        [theme.breakpoints.down(850)]: {
            marginLeft: '9%',
        },
        maxHeight: '90%'
    },
    learnMoreTextContent: {
        width: '95%',
        padding: '30px 0px 30px 0px',
        flexGrow: '0.4',
        marginLeft: '150px',
        whiteSpace: "pre-line",
    },
    modalTitle: {
        width: '281px',
        fontFamily: 'Raleway',
        fontDisplay: 'optional',
        fontSize: '18px',
        fontWeight: '800',
        lineHeight: '1.33',
        letterSpacing: '2.16px',
        textAlign: 'left',
        color: '#262f39',
        paddingBottom: '7px',
    },
    modalDescription: {
        paddingTop: '15px',
        fontFamily: 'Montserrat',
        fontDisplay: 'optional',

        fontSize: '14px',
        lineHeight: '1.5',
        letterSpacing: '2.16px',
        textAlign: 'left',
        color: '#262f39',
        overflow: 'auto',
        height: '90%',
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            background: 'rgba(0,0,0,0.2)',
            marginLeft: '50px'
        },
        paddingRight: '5%'
    },
    modalImage: {
        position: 'absolute',
        marginLeft: '-105%',
        marginTop: '30px'
    }
})
,{name: "MuiCompanyRelationComponent"});

const CompanyRelation = () => {
    const theme = useTheme();
    const classes = useStyles();
    const isMobile = useMediaQuery(theme.breakpoints.down(mobileModeWidth));
    
    //#region Modal
    function LearnMoreModal({cardInfo}){
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <Box>
                <Typography className={classes.learnMoreTxt} onClick={handleOpen}>{button.text}</Typography>
                <Modal open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
                    <Fade in={open}>
                    <Box className={classes.learnMoreModal}>
                    <Box className={classes.modalImage}>
                        <Image className={classes.cardImg} src={cardInfo.imagePath} height={154} width={300} alt={cardInfo.title}  />
                        {/* use image [2] mobile 800w
                        use image [1] tablet 1200w
                        use image [0] desktop 1600w
                        sizes="(max-width: 800px) 100vw, 800vw"

                        module.exports={
                            images: [
                                deviceSizes:[640,750,828,1080,1200,1920,2048,3840]
                        }
                        */}
                    </Box>
                        <Box className={classes.learnMoreTextContent}>
                            <Typography className={classes.modalTitle}>
                                {cardInfo.title}
                            </Typography>
                            <Divider className={classes.divider} />
                            <Typography className={classes.modalDescription}>
                                {cardInfo.longDescription}
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
    function CompanyRelationCard({cardInfo}) {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        return (
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Image className={classes.cardImg} src={cardInfo.imagePath} height={140} width={350} alt={cardInfo.title} />
                    <Box className={classes.cardTextContainer}>
                        <Typography className={classes.cardTitle}>
                            {cardInfo.title}
                        </Typography>
                        <Divider className={classes.divider} />
                        <Typography className={classes.cardDescription}>
                            {cardInfo.shortDescription}
                        </Typography>
                        {
                            !cardInfo.isMobilInfo ?
                                (<LearnMoreModal cardInfo={cardInfo} />):(null)
                        }
                    </Box>
                </CardContent>
            </Card>
        )
    }
    //#endregion Card

    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.content}>
                <Typography className={classes.title}>{isMobile ? companyRelationData.shortTitle : companyRelationData.title}</Typography>
                <Box className={classes.cardsContainer}>
                    
                    {companyRelationData.cardsInfo.map((x, i) => {
                        if (!isMobile && x.isMobilInfo == false) {
                            return(
                            <Box key={i} className={classes.cardContainer}>
                                <CompanyRelationCard key={i} cardInfo={x} />
                            </Box>)
                        }
                        else if(isMobile && x.isMobilInfo == true) {
                            return(
                                <Box key={i} className={classes.cardContainer}>
                                    <CompanyRelationCard key={i} cardInfo={x} />
                                </Box>) 
                        }
                    })}
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