import * as React from 'react'
import { NextPage, GetStaticProps } from 'next'

import Header from '../sections/homePage/header/header.component'
import OurServices from '../sections/homePage/ourServices/ourServices.component'
import FAQ from '../sections/homePage/faq/faq.component'
import Footer from '../sections/homePage/footer/footer.component'
import SecondFooter from '../sections/homePage/footer/secondFooter.component'

import cardData from '../components/card/card.data'
import { useState } from 'react'
import iCardCar from '../components/card/iCardCar'
import CompanyRelation from '../sections/homePage/companyRelation/companyRelation'
// import RatingCarouselSection from '../components/ratingCarousel/ratingCarousel.component'
import CarSliderSection from '../sections/homePage/carSlider/carSliderSection.component'
import ClientSliderSection from '../sections/homePage/ClientSliderRentCar/clientSliderSection.component'
import OurTravelSection from '../sections/homePage/ourTravelExperts/ourTravelExperts.section.component'
import { queryClient } from "../services/homePage.service";
import Head from 'next/head'

const IndexPage: NextPage = ({ locale, homepages }: any) => {

  const [header, setHeader] = useState(homepages[0].headers);
  const [carsD, setCarsD] = useState(homepages[0].carssliders[0]);
  const [ourServices, setOurServices] = useState(homepages[0].ourservices[0]);
  const [companyRelation, setCompanyRelation] = useState(homepages[0].thustworthycarrentals[0]);
  const [clientsliders, setClientSliders] = useState(homepages[0].clientsliders[0]);
  const [faqD, setFaqD] = useState(homepages[0].faqs);
  const [otExperts, setOtExperts] = useState(homepages[0].otexperts[0]);
  const [footer, setFooter] = useState(homepages[0].footers);
  const [buttons, setButtons] = useState(homepages[0].buttons);
  const [cards, setCards] = useState<iCardCar[]>(cardData)

  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Raleway:wght@600;800&display=swap" rel="stylesheet"></link>
      </Head>
      <Header data={{ header, locale }} />
      <main >
        <CarSliderSection cars={carsD}button={buttons} ></CarSliderSection>
        <ClientSliderSection data={clientsliders}   button={buttons}/>
        <OurServices ourservicesD={ourServices} />
        <CompanyRelation companyrelationD={companyRelation} button={buttons} />
        <FAQ faq={faqD} button={buttons} />
        <OurTravelSection data={otExperts} />
      </main>
      <div>
        <Footer footer={footer} button={buttons} ></Footer>
        {/* <SecondFooter></SecondFooter> */}
      </div>
    </div >
  )
}

export default IndexPage


//run at builtime
export async function getStaticProps(locale: any) {

  // const language = getLanguange();
  const { data } = await queryClient(locale.locale);
  return {
    props: {
      locale,
      homepages: data.homepages
    },
  };
}

