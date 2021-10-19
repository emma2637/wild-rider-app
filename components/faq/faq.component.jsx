import { Button, Typography, Box,
    Toolbar, useMediaQuery, AccordionSummary, AccordionDetails } from '@mui/material';
import Accordion from "@mui/material/Accordion";
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import CustomizedButtons from '../customizedButton/customizedButton.component';

//#region FAQ Data 
const faqData = {
    title: "FAQ",
    description: "Save some time during the rental and read our FAQ",
    faqOptions: [
        {
            title: "What documents do I need for the rental?",
            description: "Please bring your: Original passport Driver’s license (does not need to be the international one, you can drive 3 months with your national license in Costa Rica) Credit card (please make sure you know your PIN)",
        },
        {
            title: "Which credit cards do you accept?",
            description: "We accept following cards: MasterCard, Visa, American Express, Diners Club and Discovery. Some of those offer car rental insurance, however it would be your responsibility to check the coverage before renting a car with us and we are not responsible in case this type of insurance gets declined by your card provider later on.",
        },
        {
            title: "What is the min/ max age to rent a car with Wild Rider?",
            description: "To rent a car with us, you will need to be at least 21 years old. However, drivers under 25 years old are not able to purchase the 0 USD deductible full cover insurance and will have a deductible of 700/900 USD. Maximum age to rent a car with us is 70 years.",
        },
        {
            title: "Parking Tickets and removed License Plates",
            description: "In a lot of cases in addition to the ticket, the police officers remove the license plates of your car. If you are unlucky, they will tow away your car and you will need some help to locate it. We advise our customers to park at private and safe parking lots wherever possible, although we know that this is not always possible. Parking on the side of the street is allowed unless you see a sign clearly stating the opposite or you see a yellow line next to the street. Please keep in mind you will be in Costa Rica, so it might be that the yellow line was painted ten years ago and now only has a couple of yellow spots left, this still counts as no parking under any circumstances. Police officers know the tourist hotspots and especially like to hand out tickets and remove license plates in those areas, since its normal that they will find 5 to 10 cars parking next to a yellow line near the national parks. So those couple of USD will be worth it, as this allows you to really enjoy the park or beach without having to worry about your belongings and car. Receiving a parking ticket and having the license plates removed is one of the worst things that can happen during your vacations and it will end up affecting both parties seriously. You will be responsible for paying for the ticket, but unfortunately also for much more! Depending on the police officer, they will decide if they tow your car away and leave it at some police deposit or if they give you the permission to drive back to our agency (this last point is very hard to achieve). If we need to tow the car back to San Jose, this is not covered by any insurance and you will have to pay for it. Unlike most of our competitors we will not charge you the full price of every day that we do not have the car/ license plate. But you will need to pay an administration fee for the hours we need to put in, to get our license plate back. In some cases, this can take up to 1 month and a lot of work from our site. As this process involves 3 different government agencies, which have each their own handling time and they will use this time to not get themselves stressed. Wild Rider suffers from a big economic impact for every car whose plates gets removed, as this means up to 1 month without being able to rent the car! Since this is not covered by any insurance, we need to charge you for your mistake, so please be extra careful when checking for place to park the car!",
        },
        {
            title: "Safety Deposit",
            description: "We have 2 types of safety deposits, one for the small cars US$700 and US$900 for the big cars. The safety deposit is done via a check in with a credit card. The funds will get blocked until you return the car, if everything is ok with the car then we unblock those funds while you are returning the car. It normally takes 3 up to 5 business days until you have the funds back available on your account. Therefore, we decided to only accept a credit card safety deposit or in some special cases you can also leave the deposit in cash (however this needs to be discussed with management before the rental)",
        },
        {
            title: "What is not covered by the insurance",
            description: "There are several actions that will totally void your insurance and that way you will be 100% responsible of the car, no matter what insurance package you have chosen. River crossings This is one of the big No, if you feel like it, you can go for it. But please keep in mind that this little adventure might cost way more than your vacation and no insurance will cover you! So better drive over the bridge or take the 20 minutes detour. Every year people drown as they get dragged by growing rivers, please take this serious. Wild Rider does not cover any damages which occur due to river crossings because our insurance policy does not cover it either. So if we are not covered, unfortunately you are not covered either. So before ruining your vacation and putting your life into danger, please take the safer route. You might think that all this is exaggerated but we are speaking out of 22 years of experience and had to recover cars from the button of the ocean and several rivers. If you really want to do it, keeping mind that you will get charged if things don’t go as planned (it happens really fast), please walk the river first in order to see where its low enough and to avoid driving into an underwater hole. Please also be aware of the crocs we have in most of our rivers! Driving under the influence The title explains itself, if you are driving under the influence of drugs and/or alcohol you are not covered by any insurance, and if you get stopped by the police chances that you end up in jail for a couple of weeks are very high. If somebody gets hurt, you will disappear at least several months or years in a costa Rican jail. Please keep in mind that 0.5% of alcohol in your blood is already over the allowed limit. This is the equivalent of about 1 beer. If you have less then 3 years of driving experience the limit is at 0.2%. Disrespecting traffic rules I think that this point needs no further explanation. Just check out the traffic rules, in case you are not sure about max speed, overtaking, etc. But just for the lazy ones, if you run over a stop sign, are driving over the speed limit or a red light and have an accident, unfortunately the insurance will not cover the accident. Off road Driving Every time we explain this exception our clients give us a strange look. Don’t worry you are allowed to drive on the dirt roads in Costa Rica, that’s why you are renting a 4x4! But please don’t drive up a viewpoint and on the way back try to fight your way through the jungle, since you don’t want to take the same and only road back again. So, our rules are, if there is a road then you can drive on it, even though it is in rough conditions. Please never drive on the beach, this is completely illegal and a free card for a police ticket. Not having an accident report from the traffic police. If somebody is driving that is not stated on the rental agreement.",
        },
    ],
}
//#endregion FAQ Data

const isMobileWidth = 800;

const useStyles = makeStyles(theme => ({
    mainContainer: {
        backgroundColor: '#f3f3f3',
        [theme.breakpoints.down(isMobileWidth)]: {
            backgroundColor: 'unset'
        }
    },
    title: {
        fontFamily: 'Raleway',
        fontSize: '36px',
        fontWeight: '600',
        textAlign: 'center',
        color: '#262f39',
        paddingBottom: '15px',
        paddingTop: '30px'
    },
    description: {
        fontFamily: 'Montserrat',
        fontSize: '15px',
        fontWeight: '500',
        textAlign: 'center',
        color: '#262f39',
        paddingBottom: '40px'
    },
    faqContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    accordion: {
        flexBasis: '50%',
        [theme.breakpoints.down(isMobileWidth)]: {
            flexBasis: '100%'
        },
        backgroundColor: 'transparent',
        boxShadow: 'unset',
        position: 'initial',
        '&.Mui-expanded': {
            margin: "0 !important",
        }
    },
    accordionSummary: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'center',
        [theme.breakpoints.down(isMobileWidth)]: {
            '& .MuiAccordionSummary-content': {
                margin: 'unset',
                height: '60px'
            }
        }
    },
    faqBtn: {
        color: '#262f39',
        display: 'flex',
        width: '-webkit-fill-available',
        height: '-webkit-fill-available',
        justifyContent: 'space-between',
        height: '50px',
        [theme.breakpoints.down(isMobileWidth)]: {
            borderTopStyle: 'groove',
            borderWidth: '3px',
            borderRadius: '0',
            borderColor: '#f2f2f2;',
            height: '60px',
            '&.last':{
                borderBottomStyle: 'groove',
            },
        },
        '& .MuiTypography-root': {
            fontFamily: 'Montserrat',
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#262f39',
            textAlign: 'left'
        },
        '& .MuiSvgIcon-root ': {
            paddingLeft: '10px',
            fontSize: '30px'
        }
    },
    readMore: {
        marginBottom: '50px !important',
        marginTop: '40px !important',
    }
}),
{name: "MuiFAQComponent"}
);

const FAQ = () => {
    const classes = useStyles();
    console.log(faqData.faqOptions);
    return (
        <Box className={classes.mainContainer}>
            <Typography className={classes.title}>{faqData.title}</Typography>
            <Typography className={classes.description}>{faqData.description}</Typography>
            <Box className={classes.faqContainer}>
            {faqData.faqOptions.map((x, i) => {
                return(
                    <Accordion key={i} className={classes.accordion}>
                        <AccordionSummary className={`${classes.accordionSummary} ${classes.menuItem}`} >
                            <Button key={i} className={i==faqData.faqOptions.length-1 ? `${classes.faqBtn} last` : classes.faqBtn}>
                                <Typography>{x.title}</Typography>
                                <AddIcon />
                            </Button>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accordionDetails}>
                            {x.description}
                        </AccordionDetails>
                    </Accordion>
                )
            })}
            </Box>
            <CustomizedButtons className={classes.readMore} type="readMoreBtn" buttonText='READ MORE' ></CustomizedButtons>
        </Box>
    )
}

export default FAQ;