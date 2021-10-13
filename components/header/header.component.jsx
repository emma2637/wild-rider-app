import * as React from 'react';
import { Button, CssBaseline, Divider, IconButton, List, 
         ListItem, ListItemText, Menu ,MenuItem, Typography, Box,
         Toolbar, useMediaQuery, useTheme, styled, alpha,
         SwipeableDrawer, } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Image from 'next/image'
import 'flag-icon-css/css/flag-icon.min.css';
import styles from '../../styles/header.module.scss'


//#region Left Menu
const drawerWidth = 170;

const IconButtonMenu = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ open }) => ({
    mr: 2, 
    ...(open && { display: 'none' }) 
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
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});
//#endregion Left Menu

//#region Listas
const menuOptions = [
  { displayName: 'CARS & RATES', direction: 'card and rates' },
  { displayName: 'INSURANCE', direction: 'insurance' },
  { displayName: 'FAQ', direction: 'faq' },
  { displayName: 'CONTACT', direction: 'contact' },
  { displayName: 'BLOG', direction: 'blog' },
]

const languageOption = [
  { code:'us', displayName: "English" },
  { code:'es', displayName: "Español" },
  { code:'fr', displayName: "Français" },
  { code:'it', displayName: "Italien" },
  { code:'ru', displayName: "Russo" }
]
//#endregion

//#region Language Menu
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
    backgroundColor: 'rgb(255,255,255)'
  },
}));
//#endregion Language Menu

const Header = () => {
  //#region Const
  const theme = useTheme();
  const [openMenuLeft, setopenMenuLeft] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  //#endregion

  //#region Functions
  const GoTo = (selectedLeftMenuItem) => {
    console.log("add code to search the new direction " + selectedLeftMenuItem)
  }
  //#endregion

  //#region Flag Button
  function FlagButton() {
    //#region Const
    const [currentLanguageCode, setcurrentLanguageCode] = React.useState("us");
    const [openMenuLanguage, setOpenMenuLanguage] = React.useState(null);
    const openLanguage = Boolean(openMenuLanguage);
    //#endregion

    //#region Functions
    const handleLanguageMenuClick = (event) => {
      setOpenMenuLanguage(event.currentTarget);
    };
    const handleLanguageMenuClose = () => {
      setOpenMenuLanguage(null);
    };
    const changeLanguage = (language) => {
      setcurrentLanguageCode(language)
      setOpenMenuLanguage(null)
      console.log("add code to change the language to " + currentLanguageCode)
    }
   //#endregion
    
    return <Box>
              <IconButton className={styles.flagBtn} onClick={handleLanguageMenuClick}>
                <KeyboardArrowDownIcon />
                <span className={`flag-icon flag-icon-${currentLanguageCode}`}></span>
              </IconButton>
              <StyledMenu anchorEl={openMenuLanguage} open={openLanguage} onClose={handleLanguageMenuClose} >
                {languageOption.map((x, i) => {
                      return <MenuItem key={i} onClick={() => changeLanguage(x.code)}>
                              <Button className={styles.flagMenuItem}>
                                <span className={`flag-icon flag-icon-${x.code}`}></span>
                                <span className={styles.languageName} >{x.displayName}</span>
                              </Button>
                            </MenuItem>
                            
                })}
              </StyledMenu>
            </Box>
  }
  //#endregion Flag Button
  
  //#region Menu Left
  function MenuLeft({openMenuLeft}){
    //#region Functions
    const handleLeftMenuOpen = () => {
      setopenMenuLeft(true);
    };
    const handleLeftMenuClose = () => {
      setopenMenuLeft(false);
    };
    //#endregion
    
    //#region Resize Listener
    React.useEffect(() => {
      function handleResize() {
        if(window.innerWidth>900)
          handleLeftMenuClose();
      }
      window.addEventListener('resize', handleResize)
    })
    //#endregion Resize Listener
    
    return  <Box>
              <IconButtonMenu className={styles.menuIcon} onClick={handleLeftMenuOpen} open={openMenuLeft}>
                <MenuIcon />
              </IconButtonMenu>
              <Menuleft anchor="left" open={openMenuLeft} onClose={handleLeftMenuClose} onOpen={handleLeftMenuOpen} >
                <Box className={styles.drawerMenuHeader}>
                  <Button className={styles.closeMenuBtn} onClick={handleLeftMenuClose}>
                    <ChevronLeftIcon />
                    <Typography>Menu</Typography>
                  </Button>
                </Box>
                <Divider />
                <List>
                  {menuOptions.map((x, i) => (
                    <ListItem key={i} button onClick={() => GoTo(x.direction)}>
                      <ListItemText className={styles.menuListItem} primary={x.displayName} />
                    </ListItem>
                  ))}
                </List>
              </Menuleft>
            </Box>
  }
  //#endregion Menu Left
    const logoPath = "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/bd8b2296-2030-49b5-9275-248d22739502.svg";
    return (
        <Box>
            <CssBaseline />
            <AppBar className={styles.appBar} open={openMenuLeft}>
                <Toolbar >
                { isMobile ?
                    (<>
                        <MenuLeft openMenuLeft={openMenuLeft} />
                        <Box className={styles.logoContainer} >
                            <Image src={logoPath} layout="fill" objectFit="contain" />
                        </Box>
                        { (openMenuLeft && window.innerWidth<450) ? null : <FlagButton /> }
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
                            <FlagButton />
                        </Box>
                    </>)
                }
                </Toolbar>
            </AppBar> 
        </Box>
  );
}

export default Header;
