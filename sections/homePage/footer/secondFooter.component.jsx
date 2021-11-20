import React from 'react';
import { useMediaQuery } from '@mui/material';
import { StylesContext, useTheme } from '@mui/styles';
import Image from 'next/image'
import { makeStyles } from '@mui/styles';
import { fontSize, grid, lineHeight } from '@mui/system';

import logo from '../../../public/WildRiderLogo_Footer.webp';
import location from '../../../public/mapFooter_Desktop@2x.webp';
const useStyles = makeStyles(theme => ({
    root: {
        fontSize: '62.5%',

    },
    text: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        lineHeight: '1.5',
    },
    crTimeText: {
        fontFamily: 'Montserrat',
        fontSize: '12px',
        lineHeight: '1.75',
        fontWeight: 'bold',
    },
    footer: {
        padding: '2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '1rem',
        backgroundColor: '#2866ae;',
        color: '#fff',
        '& h3': {
            fontFamily: 'Raleway',
            fontSize: '36px',
            fontWeight: '600',
            lineHeight: '1.61',
            marginTop: '0',
            marginBottom: '1rem',
        }

    },
    otherMenuLinks: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1.5fr)',
        gap: '.5rem',
        // gridTemplateRows:'repeat(4,40px)',
        '& a': {
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: '#fff',
            fontSize: '15px',
            fontWeight: '800',
            lineHeight: '2.33',
            fontFamily: 'Raleway',
        },

        alignItems: 'start',
        justifyItems: 'stretch'
    },
    logo: {
        maxWidth: '221.3px',
        maxHeight: '46.9px',
        marginBottom: '1rem',
        marginTop: '1rem',
    }
}));
const SecondFooter = () => {


    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <div>
                <div className={classes.logo}>
                    <Image src={logo} alt="footer Logo" />
                </div>
                <span className={classes.text}>We are the specialists for your individual Costa Rica adventure! For 20+ years we have been renting 4×4 cars at economic rates.</span>
            </div>
            <div>
                <h3>Other Links</h3>
                <nav className={classes.otherMenuLinks}>
                    <a href="#">Home</a>
                    <a href="#">Cars & Rates</a>
                    <a href="#">Insurance</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contact</a>
                    <a href="#">Blog</a>
                    <a href="#">Get Your Free Rental Quote</a>
                    <a href="#">Privacy Policy</a>

                </nav>
            </div>
            <div>
                <h3>Support</h3>
                <p className={classes.text}>Phone CR +506-2258-4604</p>
                <p className={classes.text}>info@wild-rider.com</p>
                <p className={classes.text}>WhatsApp +506-8973-2759</p>
                <p className={classes.crTimeText}>* CR Office Tme</p>
            </div>

            <div>
                <h3>Location</h3>
                <span className={classes.text}>
                    <p>Calle Alajuela, behind City Mall, from “Molinos de Costa Rica” 300 meters South. Alajuela, Costa Rica</p>
                </span>
                <div className="locationImage">
                    <Image src={location} alt='location'></Image>
                </div>
            </div>
        </footer>
    );
}

export default SecondFooter;