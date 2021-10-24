import { AppBar, Toolbar, Container, Typography } from '@mui/material';
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
        fontfamily: 'Montserrat',
        fontSize: '20px',
        letterSpacing: 'normal',
    }
}),{name: 'MuiFooterComponent'})
//#endregion Styles

const Footer = () => {
    const classes = useStyles();
    return (
        <Box>
            <AppBar position="static" className={classes.footer}>
                <Container maxWidth="md">
                    <Toolbar>
                        <Container className={classes.content}>
                            <Typography className={classes.footerText}>
                                We are the specialists for your individual Costa Rica adventure!<br />For 20+ years we have been renting 4×4 cars at economic rates.
                            </Typography>
                            <CustomizedButtons type="getFreeQuoteBtn" buttonText={"GET A FREE QUOTE"} />
                        </Container>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )

}

export default Footer;