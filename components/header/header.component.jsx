import * as React from 'react';
import { Button, CssBaseline, Divider, IconButton, List, 
         ListItem, ListItemText, Menu ,MenuItem, Typography, Box,
         Toolbar, useMediaQuery, useTheme, styled, alpha,
         SwipeableDrawer, AccordionSummary, AccordionDetails } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from 'next/image'
import 'flag-icon-css/css/flag-icon.min.css';
import styles from '../../styles/header.module.scss'
import Accordion from "@mui/material/Accordion";
import { makeStyles } from '@mui/styles';

//#region Left Menu
const drawerWidth = 195;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Menuleft = styled(SwipeableDrawer)({
});



//#endregion Left Menu

//#region Listas
const menuOptions = [
  { displayName: 'CARS & RATES', children: [
    {displayName: 'SUZUKI JIMNY', direction: 'suzuki jimny'}, 
    {displayName: 'DAIHATSU BEGO', direction: 'daihatsu bego'}, 
    {displayName: 'HYUNDAI TUCSON', direction: 'hyundai tucson'},
    {displayName: 'TOYOTA RAV4', direction: 'toyota rav4'},
    {displayName: 'RATES', direction: 'Rates'},
  ]},
  { displayName: 'INSURANCE', direction: 'insurance' },
  { displayName: 'FAQ', direction: 'faq' },
  { displayName: 'CONTACT', direction: 'contact' },
  { displayName: 'BLOG', direction: 'blog' },
]

const lenguageOption = [
  { code:'us', displayName: "ENGLISH" },
  { code:'de', displayName: "DEUTSCH" },
  { code:'es', displayName: "ESPAÑOL" },
]
//#endregion

const useStyles = makeStyles(theme => ({
  menuDesktopAccordion :{
    backgroundColor: "#2866ae !important",
    '&.MuiPaper-root':{
      boxShadow: "none !important",
      backgroundColor: "transparent",
    },
    '& .MuiCollapse-root': {
      position: "absolute",
      backgroundColor: "#2866ae !important",
    },
    '&.Mui-expanded': {
      margin: "0 !important",
      '&::before': {
        opacity: "unset"
      }
    },
  },
  menuDesktopAccordionSummary: {
    height: "64px",
    padding: "unset !important",
    whiteSpace: "nowrap",
    '& .MuiAccordionSummary-content':{
      alignItems: "center",
      margin: "unset",
      '& .MuiSvgIcon-root': {
        marginRight: "-2px"
      }
    },
  },
  menuDesktopAccordionDetails: { 
    padding: "0px 0px 0px 0px"
  },
  menuMobileAccordion: {
    width: "100%",
    backgroundColor: "#2866ae !important",
    color: "white",
    '&.MuiPaper-root':{
      boxShadow: "none !important",
      backgroundColor: "transparent",
    },
    '&.Mui-expanded': {
      margin: "0 !important",
      '&::before': {
        opacity: "unset"
      }
    },
  },
  menuDesktopAccordionList: {
    color: "white",
    width: "100%",
    height: "36px",
    textDecoration: "underline",
    textAlign: "center",
    '& .MuiTypography-root': {
      fontFamily: "Raleway",
      fontSize: "12px",
      fontWeight: "800",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "3",
      letterSpacing: "1.4px",
    }
    
  },
  menuMobileAccordionSummary: { 
    padding: "unset",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    width: "100%",
    '& .MuiAccordionSummary-content': {
      justifyContent: "center",
      padding: "0 !important",
      display: "contents"
    },
    '&.MuiAccordionSummary-root': {
      '&.Mui-expanded': {
        minHeight: "49px",
      },
    },
    '& .Mui-expanded': {
      margin: "0 !important",
      minHeight: "0 !important",
    },
    '& .MuiTypography-root': {
      display: "contents",
    },
    '& .MuiSvgIcon-root': {
      position: "absolute",
      left: "3px"
    }
  },
  closeMenuBtn: {
    width: "100%",
    color: "white",
    display: "flex",
    justifyContent: "center"
  },
  menuMobileAccordionDetails: { 
    padding: "0px 0px 9px 0px"
  },
  menuMobileAccordionList: {
    backgroundColor: "#1B60AC",
    width: "100%",
    height: "36px",
    textDecoration: "underline",
    '& .MuiTypography-root': {
      fontFamily: "Raleway",
      fontSize: "12px",
      fontWeight: "800",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "3",
      letterSpacing: "1.4px",
    }
    
  },
  menuItem:{
    color: "white",
    '& .MuiTypography-root': {
      fontFamily: "Raleway",
      fontSize: "16px",
      fontWeight: "800",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "2.33",
      letterSpacing: "2.16px"
    }
  },
  lenguageItem:{
    color: "white",
    '& .MuiTypography-root': {
      fontFamily: "Raleway",
      fontSize: "12px",
      fontWeight: "800",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "3",
      letterSpacing: "1.4px",
    }
  },
  languageMenu: {
    '& .MuiMenu-paper': {
      backgroundColor: "#2866ae",
      top: "60px !important",
      borderRadius: "0px",
      boxShadow: "unset",
      left: `calc(100% - (136px)) !important`,
      width: "136px !important",
    },
    '& .MuiList-root': {
      paddingTop: "0px",
      paddingBottom: "0px"
    },
    '& .MuiButton-root': {
      color: "white",
      padding: "8px 12px 8px 12px",
      width: "100%",
      display: "grid",
      gridAutoFlow: "column",
      gridColumnGap: "10px"
    },
    '& .MuiMenuItem-root':{
      padding: "0px"
    }
  },
  menuLanguage: {
    flexGrow: "0.3",
    height: "64px",
    '& .MuiButtonBase-root': {
      height: "-webkit-fill-available",
      width: "-webkit-fill-available",
      borderRadius: "unset"
    }
  },
  lenguageOption: { 
    fontFamily: "Raleway !important",
    fontSize: "12px !important",
    fontWeight: "800 !important",
    '& .flag-icon': {
      marginRight: "10px",
      fontSize: "19px !important",
    }
  }
}),
{name: "MuiHeaderComponent"}
);

const Header = () => {
  //#region Const
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));
  //ABAJO DE 800 A 600 AGREGAR MEDIAQUERY PARA QUE SE ACOMODE EL DESKTOP RESPONSIVE
  const [stateMenuLeft, setMenuLeftState] = React.useState(false);
  //#endregion

  //#region Functions
  const GoTo = (selectedLeftMenuItem) => {
    console.log("add code to search the new direction " + selectedLeftMenuItem)
  }
  //#endregion

  //#region Menu Mobile
  function MenuMobile() {
  //#region Functions
    const menuLeftHandler = (open) => (event) => {
      setMenuLeftState(open);
    }
  //#endregion Functions
    return (<Box>
            {(stateMenuLeft) ? null : 
              <Button className={styles.menuBtn} onClick={menuLeftHandler(true)} open={stateMenuLeft}>
                <MenuIcon />
              </Button>
            }
            <SwipeableDrawer classes={{ paper: styles.menuLeftContainer }} anchor="left" open={stateMenuLeft} onClose={menuLeftHandler(false)} onOpen={menuLeftHandler(true)}>
            <Box className={styles.menuLeftHeader }>
              <Button className={`${classes.closeMenuBtn} ${classes.menuItem}`} onClick={menuLeftHandler(false)}>
                <ChevronLeftIcon />
                <Typography>Menu</Typography>
              </Button>
            </Box>
            {menuOptions.map((x, i) => {
              if (x.children != undefined) {
                return (
                  <Accordion key={i} className={classes.menuMobileAccordion}>
                    <AccordionSummary className={`${classes.menuMobileAccordionSummary} ${classes.menuItem}`} >
                      <Button key={i} className={styles.menuBtn} onClick={() => GoTo(x.direction)}>
                        <ExpandMoreIcon />
                        <Typography>{x.displayName}</Typography>
                      </Button>
                    </AccordionSummary>
                    <AccordionDetails className={classes.menuMobileAccordionDetails}>
                      {x.children.map((cx, ci) => (
                        <ListItem key={ci} onClick={() => GoTo(cx.direction)} className={classes.menuMobileAccordionList} button divider>
                          <ListItemText className={`${classes.accordionItem} ${styles.menuListItem}`} primary={cx.displayName} />
                        </ListItem>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                )} else {
                  return (
                    <ListItem key={i} onClick={() => GoTo(x.direction)} button divider>
                      <ListItemText className={`${styles.menuListItem} ${classes.menuItem}`} primary={x.displayName} />
                    </ListItem>
                  )
                }
              }
            )}
            </SwipeableDrawer>
          </Box>)
  }
  //#endregion Menu Mobile

  //#region Flag Button
  function Languages() {
    //#region Const
    const [currentLenguageCode, setcurrentLenguageCode] = React.useState("us");
    const [lenguageMenuOpen, setLenguageMenuOpen] = React.useState(null);
    const open = Boolean(lenguageMenuOpen);
    //#endregion

    //#region Functions
    const handleClick = (event) => {
      setLenguageMenuOpen(event.currentTarget);
    };
    const handleClose = () => {
      setLenguageMenuOpen(null);
    };
    const changeLenguage = (lenguage) => {
      setcurrentLenguageCode(lenguage)
      handleClose()
      console.log("add code to change the lenguage to " + currentLenguageCode)
    }
   //#endregion
    return <Box className={classes.menuLanguage}> 
              <Button className={`${styles.menuBtn} ${styles.flagBtn}`}  onClick={handleClick}>
                <KeyboardArrowDownIcon />
                <span className={`flag-icon flag-icon-${currentLenguageCode}`}></span>
              </Button>
              <Menu anchorEl={lenguageMenuOpen} open={open} onClose={handleClose} className={classes.languageMenu}>
                {lenguageOption.map((x, i) => {
                      return <MenuItem key={i} onClick={() => {changeLenguage(x.code); handleClose()}} className={classes.lenguageItem}>
                              {/* <Button className={styles.flagBtn}>
                                <span className={`flag-icon flag-icon-${x.code}`}></span>
                                
                              </Button> */}
                              <ListItem sx={{ textDecoration: "underline"}} button divider>
                                <ListItemText>
                                  <Typography className={ classes.lenguageOption }>
                                    <span className={`flag-icon flag-icon-${x.code}`}></span>
                                    {x.displayName}
                                  </Typography>
                                </ListItemText>
                              </ListItem>
                            </MenuItem>
                            
                })}
              </Menu>
            </Box>
  }
  //#endregion Flag Button

  

  const logoPath = "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/bd8b2296-2030-49b5-9275-248d22739502.svg";
  return  (
    <Box>
      <AppBar className={styles.appBar} open={stateMenuLeft}>
        <Toolbar className={styles.toolBar}>
        { isMobile ?
          (<>
            <MenuMobile />
            <Box className={styles.logoContainer} sx={{margin: (stateMenuLeft ? "0px 10px 0 10px" : "0px 0px 0px 0px")}}>
              <Image src={logoPath} layout="fill" objectFit="contain" />
            </Box>
            { (stateMenuLeft) ? null : <Languages /> }
          </>) : (<>
            <Box className={styles.logoContainer} >
              <Image src={logoPath} layout="fill" objectFit="contain" />
            </Box>
            <Box className={styles.headerOptions}>
              {menuOptions.map((x, i) => {
              // return <Button key={i} className={styles.menuBtn} onClick={() => GoTo(x.direction)}>
              //         {x.displayName}
              //         </Button>
              if (x.children != undefined) {
                return (
                  <Accordion key={i} className={classes.menuDesktopAccordion} >
                    <AccordionSummary className={`${classes.menuDesktopAccordionSummary} ${classes.menuItem}`} >
                      <Button key={i} className={styles.menuBtn} onClick={() => GoTo(x.direction)}>
                        <ExpandMoreIcon />
                        {x.displayName}
                      </Button>
                    </AccordionSummary>
                    <AccordionDetails className={classes.menuDesktopAccordionDetails}>
                      {x.children.map((cx, ci) => (
                        <ListItem key={ci} className={classes.menuDesktopAccordionList} onClick={() => GoTo(cx.direction)} button divider>
                          <ListItemText  primary={cx.displayName} />
                        </ListItem>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                )} else {
                  return (
                    <Button key={i} className={styles.menuBtn} onClick={() => GoTo(x.direction)}>
                      {x.displayName}
                    </Button>
                  )
                }
              
              })}
              <Languages />
            </Box>
          </>)
        }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
