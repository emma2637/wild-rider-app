import * as React from 'react'
import { NextPage,GetStaticProps } from 'next'

import Header from '../components/header/header.component'
import OurServices from '../components/ourServices/ourServices.component'
import FAQ from '../components/faq/faq.component'
import Footer from '../components/footer/footer.component'


import HomePage from '../services/homePageDataStructure'
import cardData from '../components/card/card.data'
import { useState } from 'react'
import iCardCar from '../components/card/iCardCar'
import CompanyRelation from '../components/companyRelation/companyRelation'
// import RatingCarouselSection from '../components/ratingCarousel/ratingCarousel.component'
import CarSliderSection from '../sections/homePage/carSlider/carSliderSection.component'
import TrustWortySection from '../sections/homePage/trustWorthyCarRental/trustWortySection.component'
import OurTravelSection from '../sections/homePage/ourTravelExperts/ourTravelExperts.section.component'
import Items from '../components/carousel/carousel.data'
import HomePageService from '../services/homePage.service';

import { gql } from "@apollo/client";
import client from "../services/homePage.service";

//run at builtime
export const getStaticProps: GetStaticProps = async (context) => {
     const {data} = await client.query({
        query: gql `
        query GetHomePageData {
            homepages(locale: "es") {
                headers{
                  menuoptions{
                    displayname 
                    img{url}
                    menuoptionchilds{
                      displayname
                      path
                    }
                  }
                  languages {
                    displayname
                    code
                  }
                  logopath {url}
                }
                carssliders{
                  carsliderinfos{
                    title
                    desc
                    img{url}
                    rating
                  }
                  tripadvisors{
                    logopath {url}
                    desc
                    url
                  }
                }
                  ourservices {
                title
                  services{
                    img{url}
                    title
                    desc
                  }
                }      
                thustworthycarrentals{
                  title
                  thrustworthycarrentalinfos{
                      img{url}
                    title
                    shortdesc
                    longdesc
                  }
                }
                clientsliders{
                  title
                  clientopinions{
                      profileimagepath {url}
                    comment
                    name
                    rate
                  }      
                }
                faqs{
                  title
                  desc
                  faqoptions{
                    title
                    desc
                  }
                }
                otexperts{
                  title
                  teamimagepath{url}
                  otexpertsinfos{
                    img {url}
                    desc
                  }
                }
                footers{
                  desc
                }
                buttons{
                  type
                  text
                }
              }    
        }
    `
      })
      return {
        props: {
          homepages: data.homepages
        },
     };
}


const IndexPage: NextPage = ({ homepages  }: any) => {

  console.log(homepages[0]);
  const [header, setHeader] = useState(homepages[0].headers[0]);
  const [cars, setCars] = useState(homepages[0].carssliders);
  const [ourServices, setOurServices] = useState(homepages[0].ourservices);
  const [companyRelation, setCompanyRelation] = useState(homepages[0].clientsliders);
  const [trustWorty, setTrustWorty] = useState(homepages[0].thustworthycarrentals);
  const [faq, setFaq] = useState(homepages[0].faqs);
  const [otExperts, setOtExperts] = useState(homepages[0].otexperts);
  const [footer, setFooter] = useState(homepages[0].footers);
  const [buttons, setButtons] = useState(homepages[0].buttons);
  

  const [cards, setCards] = useState<iCardCar[]>(cardData)

  // console.log('carousel cars',cars);
  // console.log('header ',header);
  // console.log('ourServices ',ourServices);
  // const [tripAdvisor, setTripAdvisor] = useState<TripAdvisor >('https://www.tripadvisor.com/','')
  // const [car, setCar] = useState<CarsSlider[]>(carouselData)
  return (
    <div>
      <Header data={homepages[0].headers} />
      <main >
        <CarSliderSection data={Items} ></CarSliderSection>
        <OurServices />
        <CompanyRelation />
        <TrustWortySection />
        <FAQ />
        <OurTravelSection />
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