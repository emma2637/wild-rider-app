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
const drawerWidth = 200;

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

//#region Lenguage Menu
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: '-5px',
    minWidth: 'max-content',
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));
//#endregion Lenguage Menu

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
      left: "35px"
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
      [theme.breakpoints.down("sm")]: {
        top: "55px !important",
      },
      [theme.breakpoints.up("sm")]: {
        top: "64px !important",
      },
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
  }
}));

const Header = () => {
  //#region Const
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  //ABAJO DE 800 A 600 AGREGAR MEDIAQUERY PARA QUE SE ACOMODE EL DESKTOP RESPONSIVE
  const [stateMenuLeft, setMenuLeftState] = React.useState(false);
  //#endregion

  //#region Functions
  const GoTo = (selectedLeftMenuItem) => {
    console.log("add code to search the new direction " + selectedLeftMenuItem)
  }
  //#endregion

  function MenuMobile() {
  //#region Functions
    const menuLeftHandler = (open) => (event) => {
      setMenuLeftState(open);
    }
  //#endregion Functions
    return (<Box>
            <IconButtonMenu className={styles.menuIcon} onClick={menuLeftHandler(true)} open={stateMenuLeft}>
              <MenuIcon />
            </IconButtonMenu>
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

  //#region Flag Button
  function Languages() {
    //#region Const
    const [currentLenguageCode, setcurrentLenguageCode] = React.useState("us");
    const [openMenuLenguage, setOpenMenuLenguage] = React.useState(null);
    const openLenguage = Boolean(openMenuLenguage);
    //#endregion

    //#region Functions
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleLenguageMenuClick = (event) => {
      setOpenMenuLenguage(event.currentTarget);
    };
    const handleLenguageMenuClose = () => {
      setOpenMenuLenguage(null);
    };
    const changeLenguage = (lenguage) => {
      setcurrentLenguageCode(lenguage)
      setOpenMenuLenguage(null)
      console.log("add code to change the lenguage to " + currentLenguageCode)
    }
   //#endregion
    
    return <Box>
              <IconButton  className="flagBtn" onClick={handleClick}>
                <KeyboardArrowDownIcon />
                <span className={`flag-icon flag-icon-${currentLenguageCode}`}></span>
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose} className={classes.languageMenu}>
                {lenguageOption.map((x, i) => {
                      return <MenuItem key={i} onClick={() => {changeLenguage(x.code); handleLenguageMenuClose()}} className={classes.lenguageItem}>
                              <Button className="flagMenuItem">
                                <span className={`flag-icon flag-icon-${x.code}`}></span>
                                <Typography className="lenguageName">{x.displayName}</Typography>
                              </Button>
                            </MenuItem>
                            
                })}
              </Menu>
            </Box>
  }
  //#endregion Flag Button

  

  const logoPath = "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/bd8b2296-2030-49b5-9275-248d22739502.svg";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.appBar} open={stateMenuLeft}>
        <Toolbar>
        { isMobile ?
          (<>
            <MenuMobile />
            <Box className={styles.logoContainer} >
              <Image src={logoPath} layout="fill" objectFit="contain" />
            </Box>
            { (stateMenuLeft) ? null : <Languages /> }
          </>) : (<>
            <Box className={styles.logoContainer} >
              <Image src={logoPath} layout="fill" objectFit="contain" />
            </Box>
            <Box className={styles.headerOptions}>
              {menuOptions.map((x, i) => {
              return <Button key={i} className={styles.menuBtn} onClick={() => GoTo(x.direction)}>
                      {x.displayName}
                      </Button>
              })}
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
