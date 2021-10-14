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
const drawerWidth = 140;

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
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: "140px",
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

const lenguageOption = [
  { code:'us', displayName: "English" },
  { code:'es', displayName: "Español" },
  { code:'fr', displayName: "Français" },
  { code:'it', displayName: "Italien" },
  { code:'ru', displayName: "Russo" }
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

const Header = () => {
  //#region Const
  const theme = useTheme();
  const [stateMenuLeft, setMenuLeftState] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  //#endregion

  //#region Functions
  const menuLeftHandler = (open) => (event) => {
    setMenuLeftState(open);
  }

  const GoTo = (selectedLeftMenuItem) => {
    console.log("add code to search the new direction " + selectedLeftMenuItem)
  }
  //#endregion

  //#region Flag Button
  function FlagButton() {
    //#region Const
    const [currentLenguageCode, setcurrentLenguageCode] = React.useState("us");
    const [openMenuLenguage, setOpenMenuLenguage] = React.useState(null);
    const openLenguage = Boolean(openMenuLenguage);
    //#endregion

    //#region Functions
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
              <IconButton  className="flagBtn" onClick={handleLenguageMenuClick}>
                <KeyboardArrowDownIcon />
                <span className={`flag-icon flag-icon-${currentLenguageCode}`}></span>
              </IconButton>
              <StyledMenu anchorEl={openMenuLenguage} open={openLenguage} onClose={handleLenguageMenuClose} >
                {lenguageOption.map((x, i) => {
                      return <MenuItem key={i} onClick={handleLenguageMenuClose} onClick={() => changeLenguage(x.code)}>
                              <Button className="flagMenuItem">
                                <span className={`flag-icon flag-icon-${x.code}`}></span>
                                <span className="lenguageName">{x.displayName}</span>
                              </Button>
                            </MenuItem>
                            
                })}
              </StyledMenu>
            </Box>
  }
  //#endregion Flag Button
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoPath = "https://cdn.zeplin.io/61044a546c36f17c9709e0c9/assets/bd8b2296-2030-49b5-9275-248d22739502.svg";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.appBar} open={stateMenuLeft}>
        <Toolbar>
          <Box>
            <IconButtonMenu className={styles.menuIcon} onClick={menuLeftHandler(true)} open={stateMenuLeft}>
              <MenuIcon />
            </IconButtonMenu>
            <Menuleft anchor="left" open={stateMenuLeft} onClose={menuLeftHandler(false)} onOpen={menuLeftHandler(true)}>
            <Box className={styles.drawerMenuHeader}>
              <Button className={styles.closeMenuBtn} onClick={menuLeftHandler(false)}>
                <ChevronLeftIcon />
                <Typography>Menu</Typography>
              </Button>
            </Box>
            <Divider />
            {menuOptions.map((x, i) => (
              <ListItem key={i} button onClick={() => GoTo(x.direction)}>
                <ListItemText className={styles.menuListItem} primary={x.displayName} />
              </ListItem>
            ))}
            </Menuleft>
          </Box>
          <Box className={styles.logoContainer} >
            <Image src={logoPath} layout="fill" objectFit="contain" />
          </Box>
          { (stateMenuLeft) ? null : <FlagButton /> }
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
