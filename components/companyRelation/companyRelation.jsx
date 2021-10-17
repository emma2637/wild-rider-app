import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image'

//#region Data
const companyRelationData = {
    title: "Trustworty Car Rental with strong customer-company relation",
    shortTitle: "What makes us different?",
    cardsInfo: [
        {
            imagePath: "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/de984a0f-dae2-422a-83ee-ae9d51b50213-2x.png",
            title: "25 Years of Costa Rica Experience",
            shortDescription: "All of our customers receive in-depth training on the condition of the roads and the corresponding rules of conduct. Our customers leave the rental station well prepared.",
            longDescription: "We started our business in the 90's when tourism in Costa Rica was in its infancy. Mobility became our business field. Back then, asphalt roads were more the exception than the rule, the dangerous road network has been improved decade by decade.<br /><br />At that time, the enduro motorcycle was the better choice. That's why we started our company as a motorcycle rental company.<br />Since it was a wild time in wild surroundings, we called ourselves WILD RIDER.<br /><br />Little by little, more and more 4 x 4 vehicles came into our fleet. The motorcycles have gone, the name WILD RIDER has stayed. We now offer small to medium-sized all-wheel drive vehicles for 1-5 travelers<br /><br />But there are still wobbly suspension bridges, landslides, tropical heavy rain, fog banks, missing road markings and missing  safety barriers. And there is always a little war going on in the streets. The polite Ticos become egoists in traffic.<br />That is why all of our customers receive in-depth training on the condition of the roads and the corresponding rules of conduct. Our customers leave the rental station well prepared.",
        },
        {
            imagePath: "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/7166b674-e2b2-4ee2-9e06-b4622236c259-2x.png",
            title: "3 languages SUPPORT",
            shortDescription: "Since we also welcome many European customers in addition to our North American & South American customers, we can communicate in English, German or Spanish when making reservations and correspondence as well as when renting, solving technical problems or in the event of an accident.",
            longDescription: "Since we also welcome many European customers in addition to our North American & South American customers, we can communicate in English, German or Spanish when making reservations and correspondence as well as when renting, solving technical problems or in the event of an accident.<br />In the event of an emergency or urgent question, every customer can contact the boss on his mobile phone number. You will never end up in a telephone queue at Wild Rider. Have you ever experienced this at Herz or Budget?",
        },
        {
            imagePath: "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/de984a0f-dae2-422a-83ee-ae9d51b50213-2x.png",
            title: "A family company with its own standards.",
            shortDescription: "As a family business, we work with lower overheads and can therefore offer cheaper rental prices.<br />But why are you more expensive than these big companies?<br />We are never more expensive, but our offer is always honest and with no hidden costs.",
            longDescription: "Many customers believe that the major international car rental companies have their own branches in Costa Rica and thus also US / Canada standards. Unfortunately this is not the case. They are licensees. They have to pay around 15% of fees and commissions to the parent company. This is not their own money, but your money. They have leasing agreements with banks and car financiers. This money, too, has to be paid by you, the customer.<br />As a family business, we work with lower overheads and can therefore offer cheaper rental prices.<br /></br />But why are you more expensive than these big companies?<br>We are never more expensive, but our offer is always honest and with no hidden costs.",
        },
        {
            imagePath: "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/7166b674-e2b2-4ee2-9e06-b4622236c259-2x.png",
            title: "Never hidden costs",
            shortDescription: "Our prices are honest, we never ask for extra money when you are at the counter. Many of our extras are free or we only charge the purchase price (SIM cards KOELBI).<br />We don't suddenly charge CDW, TPL, license plate fee, environmental tax, Red Cross tax or sales tax ",
            longDescription: "Our prices are honest, we never ask for extra money when you are at the counter. Many of our extras are free or we only charge the purchase price (SIM cards KÖLBI). We don't suddenly charge CDW, TPL, license plate fee, environmental tax, Red Cross tax or sales tax.<br /><br />But we offer 2 fully comprehensive insurances with different ones Deductibles. We never force our customers to choose the expensive version.<br />We prove this trust every day. Google and Tripadvisor reviews tell the truth",
        },
        {
            imagePath: "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/de984a0f-dae2-422a-83ee-ae9d51b50213-2x.png",
            title: "Best shuttle service on the airport",
            shortDescription: "Our new office is extremely close to the airport.We pick up each travel group individually. You never have to wait for other customers. 1 call from the luggage belt and 6 minutes later we are there. The transport time to the office is 4 minutes. Absolutely stress-free as we do it.",
            longDescription: "Our new office is extremely close to the airport.<br />We pick up each travel group individually. You never have to wait for other customers. 1 call from the luggage belt and 6 minutes later we are there. The transport time to the office is 4 minutes.<br />Absolutely stress-free as we do it.<br /><br />Bester Shuttle Service on the airport.",
        },
    ]       
}
//#endregion Data

const useStyles = makeStyles(theme => ({
    content: {
        display: 'block',
        position: 'absolute',
        marginTop: '-151px'
    },
    mainContainer: {
        backgroundColor: "#fc0;",
        height: '690px',
        paddingLeft: '0px',
        paddingRight: '0px',
    },
    card: {
        margin: '0px 15px 15px 15px',
        width: '350px',
        '& .MuiCardContent-root': {
           padding: "unset !important" 
        }
    },
    cardsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexBasis: '33%',
        justifyContent: 'center',
    },
    cardTitle: {
        fontFamily: 'Raleway',
        fontSize: '18px',
        fontWeight: '800',
        color: '#262f39',
        textTransform: 'uppercase',
        height: '56px',
        marginRight: '55px'
    },
    cardDescription: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontWeight: '500',
        paddingTop: '12px'
    },
    cardTextContainer: {
        width: '291px',
        padding: '10px 20px 10px 20px',
        margin: '0 auto',
        width: 'fill'
    },
    cardDivider: {
        width: '30px',
        height: '4px',
        backgroundColor: '#c4c4c4'
    },
    title: {
        fontFamily: 'Raleway',
        fontSize: '36px',
        fontWeight: '600',
        lineHeight: '1.61',
        textAlign: 'center',
        color: '#262f39',
        paddingBottom: '16px',
    }
})
,{name: "MuiCompanyRelationComponent"});

const CompanyRelation = (props) => {
    const classes = useStyles();

    function CompanyRelationCard({cardInfo}) {
        return (
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Image className={classes.cardImg} src={cardInfo.imagePath} height={140} width={350} />
                    <Box className={classes.cardTextContainer}>
                        <Typography className={classes.cardTitle}>
                            {cardInfo.title}
                        </Typography>
                        <Divider className={classes.cardDivider} />
                        <Typography className={classes.cardDescription}>
                            {cardInfo.shortDescription}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        );
    }

    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.content}>
                <Typography className={classes.title}>{companyRelationData.title}</Typography>
                <Box className={classes.cardsContainer}>
                        {companyRelationData.cardsInfo.map((x, i) => (
                            <CompanyRelationCard key={i} cardInfo={x} />
                        ))}
                </Box>
            </Box>
        </Box>
    );
}

export default CompanyRelation;



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