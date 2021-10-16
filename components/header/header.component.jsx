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

const IconButtonMenu = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ open }) => ({
    mr: 2, 
    ...(open && { display: 'none !important' }) 
}));

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
  { code:'us', displayName: "English" },
  { code:'de', displayName: "Deutsch" },
  { code:'es', displayName: "Español" },
]
//#endregion

const useStyles = makeStyles(theme => ({
  menuAccordion: {
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
  menuAccordionSummary: { 
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
        //borderTop: "1px solid rgba(0, 0, 0, 0.12)"
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
    '& .MuiSvgIcon-root': {
      position: "absolute",
      left: "-13px"
    },
    width: "100%",
    color: "white",
    display: "flex",
    justifyContent: "center"
  },
  menuAccordionDetails: { 
    padding: "0px 0px 9px 0px"
  },
  menuAccordionList: {
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
      top: "64px !important",
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
    display: "flex",
    alignItems: "center",
    '& .MuiButtonBase-root': {
      height: "-webkit-fill-available",
      width: "-webkit-fill-available",
      borderRadius: "unset"
    }
  }
}));

const Header = () => {
  //#region Const
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(750));
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
              <Button className={styles.menuIcon} onClick={menuLeftHandler(true)} open={stateMenuLeft}>
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
                  <Accordion key={i} className={classes.menuAccordion}>
                    <AccordionSummary className={`${classes.menuAccordionSummary} ${classes.menuItem}`} >
                      <ExpandMoreIcon />
                      <Typography>{x.displayName}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.menuAccordionDetails}>
                      {x.children.map((cx, ci) => (
                        <ListItem key={ci} button onClick={() => GoTo(cx.direction)} className={classes.menuAccordionList} button divider>
                          <ListItemText className={`${classes.accordionItem} ${styles.menuListItem}`} primary={cx.displayName} />
                        </ListItem>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                )} else {
                  return (
                    <ListItem key={i} button onClick={() => GoTo(x.direction)} button divider>
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
    //AGREGAR CLASS AL BOX
    return <Box > 
              <Button className={`${styles.menuBtn} ${styles.flagBtn}`}  onClick={handleClick}>
                <KeyboardArrowDownIcon />
                <span className={`flag-icon flag-icon-${currentLenguageCode}`}></span>
              </Button>
              <Menu anchorEl={lenguageMenuOpen} open={open} onClose={handleClose} className={classes.languageMenu}>
                {lenguageOption.map((x, i) => {
                      return <MenuItem key={i} onClick={() => {changeLenguage(x.code); handleClose()}} className={classes.lenguageItem}>
                              <Button className={styles.flagBtn}>
                                <span className={`flag-icon flag-icon-${x.code}`}></span>
                                <Typography>{x.displayName}</Typography>
                              </Button>
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
              if (x.children != undefined) {
                return (
                  <Accordion key={i} >
                    <AccordionSummary  >
                      <ExpandMoreIcon />
                      <Typography>{x.displayName}</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                      {x.children.map((cx, ci) => (
                        <ListItem key={ci} button onClick={() => GoTo(cx.direction)} button divider>
                          <ListItemText  primary={cx.displayName} />
                        </ListItem>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                )} else {
                  return (
                    <ListItem key={i} button onClick={() => GoTo(x.direction)} button divider>
                      <ListItemText  primary={x.displayName} />
                      {/* AGREGAR CLASS AL LIST ITEM TEXT */}
                    </ListItem>
                  )
                }
              }
            )}
              <Languages />
            </Box>
          </>)
        }
        </Toolbar>
      </AppBar>
    </Box>
  );

  //   const logoPath = "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/bd8b2296-2030-49b5-9275-248d22739502.svg";
  //   return (
  //       <Box>
  //           <CssBaseline />
  //           <AppBar className={styles.appBar} open={openMenuLeft}>
  //               <Toolbar >
  //               { isMobile ?
  //                   (<>
  //                       <MenuLeft openMenuLeft={openMenuLeft} />
  //                       <Box className={styles.logoContainer} >
  //                           <Image src={logoPath} layout="fill" objectFit="contain" />
  //                       </Box>
  //                       { (openMenuLeft && window.innerWidth<450) ? null : <FlagButton /> }
  //                   </>) : (<>
  //                       <Box className={styles.logoContainer} >
  //                           <Image src={logoPath} layout="fill" objectFit="contain" />
  //                       </Box>
  //                       <Box className={styles.headerOptions}>
  //                           {menuOptions.map((x, i) => {
  //                           return <Button key={i} className={styles.menuBtn} onClick={() => GoTo(x.direction)}>
  //                                   {x.displayName}
  //                                   </Button>
  //                           })}
  //                           <FlagButton />
  //                       </Box>
  //                   </>)
  //               }
  //               </Toolbar>
  //           </AppBar> 
  //       </Box>
  // );
}

export default Header;
