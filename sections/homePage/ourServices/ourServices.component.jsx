import Image from 'next/image'
import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

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

const OurServices = (props) => {
    const classes = useStyles();
    const {title, services} = props.ourservicesD;
    return(
        <Container className={classes.container}>
        <Typography className={classes.title}>{title}</Typography>
          <Box className={classes.content}>
                {services.map((x, i) => (
                <Card key={i} className={classes.card}>
                    <CardContent className={classes.cardContent}>
                         <Image src={x.imagepath[0].url} height={92} width={90} alt={x.title}/> 
                        <Typography className={classes.cardTitle}>
                            {x.title}
                        </Typography>
                        <Typography className={classes.cardDescription}>
                            {x.desc}
                        </Typography>
                    </CardContent>
                </Card>
                ))} 
            </Box> 
        </Container>
    );
}

export default OurServices;