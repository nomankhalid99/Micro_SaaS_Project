import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ClientTable from '../../components/HomeComponents/ClientTable'

const Home = ({ menuCollapse }) => {
    
  return (
    <Grid
    container
    mb={2}
    sx={{ pl: { xs: 0, lg: menuCollapse ? 14 : 36 } }}
    spacing={2}
  >
     <Grid item xs={12}>
          <Box
            bgcolor="white"
            border={1}
            borderColor="#F0F0F0"
            borderRadius={2}
            p={3}
            mt={4}
          >
            <Typography variant="h6" fontWeight="bold">
              Clients Information
            </Typography>
            <ClientTable />
          </Box>
        </Grid>
  </Grid>
  )
}

export default Home