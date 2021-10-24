import Image from 'next/image'
import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

//#region Data 
const ourServicesData = {
    title:"OurServices",
    services: [
        {
            imagePath: "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/d8195461-2426-49b5-9e81-6a80ebec7369.svg",
            title:"Maintenance",
            description : "Constantly & perfectly maintained vehicles"
        },
        {
            imagePath: "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/c49b95d2-7cb8-4c5e-8562-7af70320bb07.svg",
            title: "Customer Service",
            description : "Friendly & trustworthy customer service"
        },
        {
            imagePath: "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/066dab86-b8f1-4cba-a1d0-cb87d259d4d0.svg",
            title: "Insurance",
            description : "Full cover insurance included in rates"
        },
        {
            imagePath: "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/8f126a4a-ffee-4fd1-8770-1e75b20f6487.svg",
            title: "Mileage",
            description : "Unlimited mileage included in rates"
        },
        {
            imagePath: "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/edfde89d-8ff9-4e5c-a8a7-f47d94fcbb3f.svg",
            title: "Always with you",
            description : "Roadside assistance included in rates"
        },
        {
            imagePath: "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/e17ab05a-9026-45bc-a021-e0bfe046e8d5.svg",
            title: "PICKUP",
            description : "Just in time"
        }
    ]
}
//#endregion 

//#region Styles
const useStyles = makeStyles(theme => ({
    container: { 
        display: 'block',
        paddingTop: '21px',
        height: '490px',
        paddingLeft: '0px',
        paddingRight: '0px',
        [theme.breakpoints.down(940)]: {
            height: '700px',
        },
        [theme.breakpoints.down(580)]: {
            height: '900px',
        },
        [theme.breakpoints.down(290)]: {
            height: '1450px',
        },
    },
    card: { 
        boxShadow: "unset",
        flexBasis: '16%',
        [theme.breakpoints.down(940)]: {
            flexBasis: '26%',
        },
        [theme.breakpoints.down(580)]: {
            flexBasis: '50%',
        },
        [theme.breakpoints.down(290)]: {
            flexBasis: '100%',
        },
    },
    cardContent: { 
        display: 'block',
        textAlign: 'center',
        padding: '9px'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Raleway',
        fontSize: '30px',
        fontWeight: '600',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.61',
        paddingBottom: '20px'
    },
    cardTitle: {
        fontFamily: 'Raleway',
        fontSize: '18px',
        fontWeight: '800',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.22',
        width: '96px',
        margin: '0 auto',
    },
    cardDescription: { 
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.5',
        width: '133px',
        margin: '0 auto'
    },
})
,{name: "MuiOurServicesComponent"});
//#endregion Styles

const OurServices = () => {
    const classes = useStyles();
    
    return(
        <Container className={classes.container}>
            <Typography className={classes.title}>{ourServicesData.title}</Typography>
            <Box className={classes.content}>
                {ourServicesData.services.map((x, i) => (
                <Card key={i} className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Image src={x.imagePath} height={92} width={90} />
                        <Typography className={classes.cardTitle}>
                            {x.title}
                        </Typography>
                        <Typography className={classes.cardDescription}>
                            {x.description}
                        </Typography>
                    </CardContent>
                </Card>
                ))} 
            </Box>
        </Container>
    );
}

export default OurServices;