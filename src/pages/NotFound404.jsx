import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { Box, Flex, Paper, Button, PasswordInput, Text, TextInput, BackgroundImage } from '@mantine/core'

function NotFound404() {
  return (
      <Box>
          <BackgroundImage
              src="public/plants-background-image2.jpg"
          >

              <Flex justify="center" align="center">

                  <Box mt={230} mb={60}>
                      <Paper shadow="xl" radius="md" p={100} pt={80} sx={{
                   
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          alignContent: 'center',
                          
                      }}>

                          <h1 style={{ fontSize: '100px', padding: '0px' }}>404</h1>
                          <h2 style={{ fontSize: '30px' }}>You have found a secret place.</h2>
                          <p style={{ fontSize: '16px', color: 'gray', textAlign: 'center', padding: '30px' }}>Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL.</p>
                          <Button component={Link} to={'/'} color="green.8" >
                              Take me back to the homepage
                          </Button>



                      </Paper>
                      <Box
                          sx={{
                              margin: '0 auto',
                              maxWidth: '400px',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              alignContent: 'center',
                              height: 'calc(20vh - 1px)',
                          }}
                      />


                  </Box>


              </Flex>

          </BackgroundImage>
      </Box>



  )
}

export default NotFound404