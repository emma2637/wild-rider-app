import { AppBar, Button, Container, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';
// import './footer.scss'
import sytles from '../../styles/footer.module.scss'
import CustomizedButtons from '../secondaryButton/secondaryButton.component'

const Footer = () => {
    return (
        <Box>
            <AppBar position="static" className={sytles.footer}>
                <Container maxWidth="md">
                    <Toolbar>
                        <Container className={sytles.content}>
                            <Typography className={sytles.footerText}>
                                We are the specialists for your individual Costa Rica adventure!<br />For 20+ years we have been renting 4×4 cars at economic rates.
                            </Typography>
                            <CustomizedButtons isReadButton buttonText={"GET A FREE QUOTE"} />
                        </Container>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )

}

export default Footer;