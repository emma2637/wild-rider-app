import React, { useState } from 'react';
import { NextPage, GetStaticProps } from 'next'


//components
import Layout from '../components/layouts/layout';
import OurServices from '../sections/homePage/ourServices/ourServices.component'
import FAQ from '../sections/homePage/faq/faq.component'

import CompanyRelation from '../sections/homePage/companyRelation/companyRelation'
import CarSliderSection from '../sections/homePage/carSlider/carSliderSection.component'
import ClientSliderSection from '../sections/homePage/ClientSliderRentCar/clientSliderSection.component'
import OurTravelSection from '../sections/homePage/ourTravelExperts/ourTravelExperts.section.component'
import HomePageService from "../services/homePage.service";

const IndexPage: NextPage = ({ locale, homepages }: any) => {

  const {
    carssliders,
    ourservices,
    thustworthycarrentals,
    clientsliders,
    faqs,
    otexperts,
    buttons
  } = homepages;

  return (
    <Layout >
        <main >
          <CarSliderSection cars={carssliders[0]} button={buttons} ></CarSliderSection>
          <ClientSliderSection clientsliders={clientsliders} button={buttons} />
          <OurServices ourservicesD={ourservices[0]} />
          <CompanyRelation companyrelationD={thustworthycarrentals[0]} button={buttons} />
          <FAQ faq={faqs} button={buttons} />
           <OurTravelSection data={otexperts[0]} /> 
        </main>
        <div>
        </div>
    </Layout>
  )
}

export default IndexPage


//run at builtime
export async function getStaticProps(locale: any) {

  const result = await HomePageService(locale.locale);
  return {
    props: {
      locale,
      homepages: result.data.homepages[0]
    },
  };
}

