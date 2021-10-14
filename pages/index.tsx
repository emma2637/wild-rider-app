import * as React from 'react'
import { NextPage } from 'next'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from '../components/header/header.component'
import Footer from '../components/footer/footer.component'
import Slider from '../components/carousel/carousel.component'
import Card from '../components/card/card.component'
import cardData from '../components/card/card.data'
import { useState } from 'react'
import iCardCar from '../components/card/iCardCar'



const IndexPage: NextPage = () => {

  const [cards, setCards] = useState<iCardCar[]>(cardData)

  // React.useEffect(()=>{
  //   setCards(cardData)

  // },[])



  return (
    <div>
      <Header></Header>
      <div className="" >
        {/* <Slider>loading!</Slider> */}


        {/* <Container maxWidth="xl" fixed sx={{mb:3, backgroundColor:"#fc0;"}}> */}
        {/* <Box sx={{ flexGrow: 1 }} > */}
        <Grid container
          spacing={{ xs: 1, md: 1, lg: 1, xl: 1 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 3, backgroundColor: "#fc0;" }} >
          {cards.map((card: iCardCar, index) => (
            <Box key={index} >
              <Grid item xs={4} sm={4} md={4} key={index} mb={20} sx={{ mt: 2 }}>
                <Card {...card}></Card>
              </Grid>
            </Box>
          ))}
        </Grid>
        {/* </Box> */}
        {/* </Container> */}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div >
  )
}

export default IndexPage




// <Grid container
//           spacing={{ xs: 1, md: 1, lg: 1, xl: 1 }}
//           direction="row"
//           justifyContent="center"
//           alignItems="center"
//           sx={{ mb: 3, backgroundColor: "#fc0;" }} >

//           <Box sx={{ flexGrow: 1 }} >

//             {cards.map((card: iCardCar, index) => (
//               <Grid item xs={4} sm={4} md={4} key={index} mb={20} sx={{ mt: 2 }}>
//                   <Card {...card}></Card>
//               </Grid>
//             ))}
//           </Box>

//         </Grid>