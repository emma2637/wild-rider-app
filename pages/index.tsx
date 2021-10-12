import * as React from 'react'
import { NextPage } from 'next'
import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import Header from '../components/header/header.component'
import Footer from '../components/footer/footer.component'
import Slider from '../components/carousel/carousel.component'

const IndexPage: NextPage = () => {
  return (
    <div>
      <Header></Header>
      <div className="" >
        <Slider>loading!</Slider>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default IndexPage