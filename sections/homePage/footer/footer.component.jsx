import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import CustomizedButtons from '../../../components/customizedButton/customizedButton.component';

//#region Styles
const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: '#3f3f3f',
        color: 'white',
    },
    content: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: '2em 0em 2em 0em',
    },
    footerText: {
        textAlign: 'center',
        fontDisplay: 'optional',
        fontfamily: 'Montserrat',
        fontSize: '20px',
        letterSpacing: 'normal',
    }
}), { name: 'MuiFooterComponent' })
//#endregion Styles

const Footer = (props) => {
    const { footer, button } = props;
    const footerDescription = footer[0].text;
    const getFreeQuoteBtn = button.find(item => item.type.includes("QUOTE"));

    const classes = useStyles();
    return (
        <Box>
            <AppBar position="static" className={classes.footer}>
                <Container maxWidth="md">
                    <Toolbar>
                        <Container className={classes.content}>
                            <Typography className={classes.footerText}>
                                {footerDescription}
                            </Typography>
                            <CustomizedButtons type={"getFreeQuoteBtn"} buttonText={getFreeQuoteBtn.text} />
                        </Container>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )

}

export default Footer;