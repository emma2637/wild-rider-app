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

//#region Data
//#endregion Data

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
        height: '915px',
        paddingLeft: '0px',
        paddingRight: '0px',
        [theme.breakpoints.down(1098)]: {
            height: '1410px',
        },
        [theme.breakpoints.down(840)]: {
            height: '1458px',
        },
        [theme.breakpoints.down(mobileModeWidth)]: {
            height: '2330px',
        },
        [theme.breakpoints.down(355)]: {
            height: '2375px',
        },
        [theme.breakpoints.down(300)]: {
            height: '2480px',
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
        [theme.breakpoints.down(300)]: {
            height: '260px',
        },
    },
    cardTextContainer: {
        width: '291px',
        padding: '10px 20px 10px 20px',
        margin: '0 auto',
        width: 'fill',
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
        paddingTop: '15px',
        fontDisplay: 'optional',
        fontFamily: 'Montserrat',
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
    },
    closeModalBtn: {
        position: 'absolute',
        right: '10px',
        top: '6px',
        fontSize: '33px'
    }
})
    , { name: "MuiCompanyRelationComponent" });

const CompanyRelation = (props) => {

    console.log("CompanyRelation props", props);

    const { button, companyrelationD } = props;
    const { thrustworthycarrentalinfos, title } = companyrelationD;

    const theme = useTheme();
    const classes = useStyles();
    const isMobile = useMediaQuery(theme.breakpoints.down(mobileModeWidth));

    //#region Modal
    function LearnMoreModal({ cardInfo }) {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <Box>
                <Typography className={classes.learnMoreTxt} onClick={handleOpen}>{button.text}</Typography>
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
                <Typography className={classes.title}>{isMobile ? title : title}</Typography>
                {/* validate this data */}
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