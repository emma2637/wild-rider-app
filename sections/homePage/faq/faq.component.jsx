import Button from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import CustomizedButtons from '../../../components/customizedButton/customizedButton.component';

//#endregion FAQ Data

//#region Styles
const isMobileWidth = 800;
const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginTop: '30px',
        backgroundColor: '#f3f3f3',
    },
    title: {
        fontDisplay: 'optional',
        fontFamily: 'Raleway',
        fontSize: '36px',
        fontWeight: '600',
        textAlign: 'center',
        color: '#262f39',
        paddingBottom: '15px',
        paddingTop: '30px'
    },
    descriptionription: {
        fontDisplay: 'optional',
        fontFamily: 'Montserrat',
        fontSize: '15px',
        fontWeight: '500',
        textAlign: 'center',
        color: '#262f39',
        padding: '0 7% 40px 7%',
    },
    faqContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    accordion: {
        margin: '0px 12px 0px 12px',
        flexBasis: '46%',
        justifyContent: 'center',
        [theme.breakpoints.down(isMobileWidth)]: {
            flexBasis: '100%'
        },
        [theme.breakpoints.down(400)]: {
            margin: '0',
        },
        backgroundColor: 'transparent',
        boxShadow: 'unset',
        position: 'initial',
        '&.Mui-expanded': {
            margin: "0 !important",
        }
    },
    accordionSummary: {
        fontDisplay: 'optional',
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    faqBtn: {
        color: '#262f39',
        display: 'flex',
        width: '-webkit-fill-available',
        height: '-webkit-fill-available',
        justifyContent: 'space-between',
        height: '50px',
        '& .MuiTypography-root': {
        fontDisplay: 'optional',
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
//#endregion Styles

const FAQ = (props) => {
    console.log(props);
    const classes = useStyles();
     const {faq, button}=props;
     const {description, faqoptions, title} = faq[0];
    const readMoreBtn = button.find(item => item.type.includes("READ"));
    
    return (
        <Box className={classes.mainContainer}>
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.descriptionription}>{description}</Typography>
            <Box className={classes.faqContainer}>
            {faqoptions.map((x, i) => {
                return(
                    <Accordion key={i} className={classes.accordion}>
                        <AccordionSummary className={`${classes.accordionSummary} ${classes.menuItem}`} >
                            <Button key={i} className={i==faqoptions.length-1 ? `${classes.faqBtn} last` : classes.faqBtn}>
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
           <CustomizedButtons className={classes.readMore} type="readMoreBtn" buttonText={readMoreBtn.text} ></CustomizedButtons>
        </Box>
    )
}

export default FAQ;