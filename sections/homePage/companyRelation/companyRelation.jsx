import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { Box, Button, Card, CardContent, Divider, Fade, ListItem, ListItemText, Modal, Typography, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close';

//#region Data
const button = {
    type: "LearnMore",
    text: "Learn More"
}
const companyRelationData = {
    title: "Trustworty Car Rental with strong customer-company relation",
    shortTitle: "What makes us different?",
    cardsInfo: [
        {
            imagePath: "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/de984a0f-dae2-422a-83ee-ae9d51b50213-2x.png",
            title: "25 Years of Costa Rica Experience",
            shortDescription: "All of our customers receive in-depth training on the condition of the roads and the corresponding rules of conduct. Our customers leave the rental station well prepared.",
            longDescription: "We started our business in the 90's when tourism in Costa Rica was in its infancy. Mobility became our business field. Back then, asphalt roads were more the exception than the rule, the dangerous road network has been improved decade by decade.\n\nAt that time, the enduro motorcycle was the better choice. That's why we started our company as a motorcycle rental company.\nSince it was a wild time in wild surroundings, we called ourselves WILD RIDER.\n\nLittle by little, more and more 4 x 4 vehicles came into our fleet. The motorcycles have gone, the name WILD RIDER has stayed. We now offer small to medium-sized all-wheel drive vehicles for 1-5 travelers\n\nBut there are still wobbly suspension bridges, landslides, tropical heavy rain, fog banks, missing road markings and missing  safety barriers. And there is always a little war going on in the streets. The polite Ticos become egoists in traffic.\nThat is why all of our customers receive in-depth training on the condition of the roads and the corresponding rules of conduct. Our customers leave the rental station well prepared.",

        },
        {
            imagePath: "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/7166b674-e2b2-4ee2-9e06-b4622236c259-2x.png",
            title: "3 languages SUPPORT",
            shortDescription: "Since we also welcome many European customers in addition to our North American & South American customers, we can communicate in English, German or Spanish when making reservations and correspondence as well as when renting, solving technical problems or in the event of an accident.",
            longDescription: "Since we also welcome many European customers in addition to our North American & South American customers, we can communicate in English, German or Spanish when making reservations and correspondence as well as when renting, solving technical problems or in the event of an accident.\nIn the event of an emergency or urgent question, every customer can contact the boss on his mobile phone number. You will never end up in a telephone queue at Wild Rider. Have you ever experienced this at Herz or Budget?",
        },
        {
            imagePath: "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/577e025f-cd97-4888-b66d-33bcddbc3a62-2x.png",
            title: "A family company with its own standards.",
            shortDescription: "As a family business, we work with lower overheads and can therefore offer cheaper rental prices.\nBut why are you more expensive than these big companies?\nWe are never more expensive, but our offer is always honest and with no hidden costs.",
            longDescription: "Many customers believe that the major international car rental companies have their own branches in Costa Rica and thus also US / Canada standards. Unfortunately this is not the case. They are licensees. They have to pay around 15% of fees and commissions to the parent company. This is not their own money, but your money. They have leasing agreements with banks and car financiers. This money, too, has to be paid by you, the customer.\nAs a family business, we work with lower overheads and can therefore offer cheaper rental prices.\n</br />But why are you more expensive than these big companies?<br>We are never more expensive, but our offer is always honest and with no hidden costs.",
        },
        {
            imagePath: "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/d3729dfb-89ec-42e1-94d1-e6ca7046a8a4-2x.png",
            title: "Never hidden costs",
            shortDescription: "Our prices are honest, we never ask for extra money when you are at the counter. Many of our extras are free or we only charge the purchase price (SIM cards KOELBI).\nWe don't suddenly charge CDW, TPL, license plate fee, environmental tax, Red Cross tax or sales tax ",
            longDescription: "Our prices are honest, we never ask for extra money when you are at the counter. Many of our extras are free or we only charge the purchase price (SIM cards KÖLBI). We don't suddenly charge CDW, TPL, license plate fee, environmental tax, Red Cross tax or sales tax.\n\nBut we offer 2 fully comprehensive insurances with different ones Deductibles. We never force our customers to choose the expensive version.\nWe prove this trust every day. Google and Tripadvisor reviews tell the truth",
        },
        {
            imagePath: "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/56dac488-8884-4560-827a-2da7b3f6eac2-2x.png",
            title: "Best shuttle service on the airport",
            shortDescription: "Our new office is extremely close to the airport.We pick up each travel group individually. You never have to wait for other customers. 1 call from the luggage belt and 6 minutes later we are there. The transport time to the office is 4 minutes. Absolutely stress-free as we do it.",
            longDescription: "Our new office is extremely close to the airport.\nWe pick up each travel group individually. You never have to wait for other customers. 1 call from the luggage belt and 6 minutes later we are there. The transport time to the office is 4 minutes.\nAbsolutely stress-free as we do it.\n\nBester Shuttle Service on the airport.",
        }
    ]
}
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
                                {/* <Image className={classes.cardImg} src={cardInfo.imagePath} height={144} width={310} alt={cardInfo.title} /> */}
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
                    {/* <Image className={classes.cardImg} src={cardInfo.imagePath} height={140} width={350} alt={cardInfo.title} /> */}
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
    console.log(companyRelationData.cardsInfo)
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