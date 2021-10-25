import * as React from 'react'
import { NextPage, GetStaticProps } from 'next'

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
import HomePageService from '../services/homePage.service';

import { gql } from "@apollo/client";
import { client, queryClient } from "../services/homePage.service";
import { LanguageContext } from '../src/hooks/language.context'


// const getLanguange = () => {
//   const detectBrowserLanguage = require('detect-browser-language')
//   // const detectedLanguage = detectBrowserLanguage().slice(0, 2);
//   const detectedLanguage = 'es';
//   //update value of language in context
//   const { language, updateLanguage } = React.useContext(LanguageContext);
//   updateLanguage(detectedLanguage)

//   return detectedLanguage
// }

const IndexPage: NextPage = ({ homepages }: any) => {

  console.log(homepages[0]);
  const [header, setHeader] = useState(homepages[0].headers);
  const [cars, setCars] = useState(homepages[0].carssliders);
  const [ourServices, setOurServices] = useState(homepages[0].ourservices);
  const [companyRelation, setCompanyRelation] = useState(homepages[0].clientsliders);
  const [trustWorty, setTrustWorty] = useState(homepages[0].thustworthycarrentals);
  const [faqD, setFaqD] = useState(homepages[0].faqs);
  const [otExperts, setOtExperts] = useState(homepages[0].otexperts);
  const [footer, setFooter] = useState(homepages[0].footers);
  const [buttons, setButtons] = useState(homepages[0].buttons);


  const [cards, setCards] = useState<iCardCar[]>(cardData)

  return (
    <div>
      <Header data={header} />
      <main >
        <CarSliderSection data={Items} ></CarSliderSection>
        <OurServices ourservicesD={ourServices} />
        <CompanyRelation />
        <TrustWortySection />
        <FAQ faq={faqD} button={buttons} />
        <OurTravelSection ourTravelData={otExperts} />
      </main>
      <div>
        <Footer footer={footer} button={buttons} ></Footer>
      </div>
    </div >
  )
}

export default IndexPage


//run at builtime
export const getStaticProps: GetStaticProps = async (context) => {

  // const language = getLanguange();


  const { data } = await queryClient('en');
  return {
    props: {
      homepages: data.homepages
    },
  };
}