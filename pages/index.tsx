import * as React from 'react'
import { NextPage } from 'next'
import Header from '../sections/homePage/header/header.component'
import OurServices from '../sections/homePage/ourServices/ourServices.component'
import FAQ from '../sections/homePage/faq/faq.component'
import Footer from '../sections/homePage/footer/footer.component'


import HomePage from '../services/homePageDataStructure'
import cardData from '../components/card/card.data'
import { useState } from 'react'
import iCardCar from '../components/card/iCardCar'
import CompanyRelation from '../sections/homePage/companyRelation/companyRelation'
// import RatingCarouselSection from '../components/ratingCarousel/ratingCarousel.component'
import CarSliderSection from '../sections/homePage/carSlider/carSliderSection.component'
import TrustWortySection from '../sections/homePage/trustWorthyCarRental/trustWortySection.component'
import OurTravelSection from '../sections/homePage/ourTravelExperts/ourTravelExperts.section.component'
import Items from '../components/carousel/carousel.data'




const IndexPage: NextPage = () => {

  const [cards, setCards] = useState<iCardCar[]>(cardData)
  const [cars, setCars] = useState(Items);
  // const [tripAdvisor, setTripAdvisor] = useState<TripAdvisor >('https://www.tripadvisor.com/','')
  // const [car, setCar] = useState<CarsSlider[]>(carouselData)
  return (
    <div>
      <Header />
      <main >
        <CarSliderSection data={Items} ></CarSliderSection>
        <OurServices />    
        <CompanyRelation />
        <TrustWortySection/>
        <FAQ />
        <OurTravelSection/>
      </main>
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