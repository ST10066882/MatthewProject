import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';
import BankingDetails from './BankingDetails';
import PaymentReceipts from './PaymentReceipts';
import { AppBar, Toolbar, Typography, Box, Button, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from '../assets/images/login-background.jpg';  // background image here

//main background
const DashboardBackground = styled(Box)({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  backgroundColor: '#f8f9fa',  // Light grey
});

const CustomerDashboard = () => {
  const navigate = useNavigate();

  const handleLocalPayment = () => {
    navigate('/payment-process', { state: { type: 'local' } });
  };

  const handleInternationalPayment = () => {
    navigate('/payment-process', { state: { type: 'international' } });
  };

  return (
    <DashboardBackground sx={{ display: 'flex' }}>
      <Menu />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* AppBar */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#3498db' }}>  
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Customer Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar /> {/* Spacer for AppBar */}

        {/* Welcome Box */}
        <Card sx={{ mt: 4, mb: 4, p: 2, backgroundColor: '#ffffff', color: '#2c3e50' }}>  
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              Welcome Back, [Customer’s Name]
            </Typography>
            <Typography variant="h6" align="center">
              Manage your accounts and payments seamlessly
            </Typography>
          </CardContent>
        </Card>

        {/* Payment Options */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleLocalPayment}
              sx={{ py: 2, backgroundColor: '#3498db', color: 'white' }}  
            >
              Make Local Payment
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleInternationalPayment}
              sx={{ py: 2, backgroundColor: '#27ae60', color: 'white' }} 
            >
              Make International Payment
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <BankingDetails />
          </Grid>
          <Grid item xs={12} md={6}>
            <PaymentReceipts />
          </Grid>
        </Grid>
      </Box>
    </DashboardBackground>
  );
};

export default CustomerDashboard;

