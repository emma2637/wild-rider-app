import * as React from 'react'
import { NextPage } from 'next'
import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import Header from '../components/header/header.component'
import Footer from '../components/footer/footer.component'

const IndexPage: NextPage = () => {
  return (
    <div>
      <Header></Header>
      <Container maxWidth='lg' fixed>
        <Box py={3}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant='h2'>My SaaS App</Typography>
              <Typography variant='subtitle1'>This is the subtitle</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button variant='contained' color='primary' endIcon={<MailOutlineIcon />}>
                Subscribe for updates
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer></Footer>

    </div>
  )
}

export default IndexPage