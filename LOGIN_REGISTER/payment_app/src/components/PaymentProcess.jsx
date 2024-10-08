import React, { useState } from 'react';
import axios from 'axios';
import Menu from './Menu';
import { AppBar, Toolbar, Typography, Container, TextField, Button, Grid, Paper, Snackbar, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate, useLocation } from 'react-router-dom';
import backgroundImage from '../assets/images/dashboardd-background.jpg';  // background image

// Styling the main background
const PaymentBackground = styled(Box)({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  backgroundColor: '#f8f9fa',  // Lighter
});

const PaymentProcess = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    recipientName: '',
    recipientBank: '',
    recipientAccountNumber: '',
    amount: '',
    swiftCode: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
  });
  const location = useLocation();
  const paymentType = location.state?.type || 'local';
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:3000/transaction', paymentDetails); //endpoint
      if (response.data.success) {
        setSnackbar({ open: true, message: 'Payment successful' });
      } else {
        setSnackbar({ open: true, message: 'Payment failed' });
      }
    } catch (error) {
      console.error('Payment Error:', error);
      setSnackbar({ open: true, message: 'There was an issue with the payment' });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: '' });
  };

  return (
    <PaymentBackground sx={{ display: 'flex' }}>
      <Menu />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* AppBar */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#3498db' }}>  
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Payment Process - {paymentType === 'local' ? 'Local Payment' : 'International Payment'}
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar /> {/* Spacer for AppBar */}

        {/* Payment Form */}
        <Container component="main" maxWidth="md" sx={{ mt: 4 }}>
          <Paper elevation={3} sx={{ p: 4, backgroundColor: '#ffffff', color: '#2c3e50' }}>  
            <Typography variant="h5" align="center" gutterBottom>
              Payment Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Recipient's Name"
                    name="recipientName"
                    placeholder="Enter Recipient's Name"
                    value={paymentDetails.recipientName}
                    onChange={handleInputChange}
                    required
                    InputLabelProps={{ style: { color: '#2c3e50' } }} 
                    sx={{ input: { color: '#2c3e50' }, backgroundColor: '#f8f9fa' }} 
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Recipient's Bank"
                    name="recipientBank"
                    placeholder="Enter Recipient's Bank"
                    value={paymentDetails.recipientBank}
                    onChange={handleInputChange}
                    required
                    InputLabelProps={{ style: { color: '#2c3e50' } }}  
                    sx={{ input: { color: '#2c3e50' }, backgroundColor: '#f8f9fa' }}  
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Recipient's Account Number"
                    name="recipientAccountNumber"
                    placeholder="Enter Recipient's Account Number"
                    value={paymentDetails.recipientAccountNumber}
                    onChange={handleInputChange}
                    required
                    InputLabelProps={{ style: { color: '#2c3e50' } }}  // Dark
                    sx={{ input: { color: '#2c3e50' }, backgroundColor: '#f8f9fa' }}  // Light gray
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Amount to Transfer"
                    name="amount"
                    placeholder="Enter Amount"
                    type="number"
                    value={paymentDetails.amount}
                    onChange={handleInputChange}
                    required
                    InputLabelProps={{ style: { color: '#2c3e50' } }} 
                    sx={{ input: { color: '#2c3e50' }, backgroundColor: '#f8f9fa' }}
                  />
                </Grid>
                {paymentType === 'international' && (
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="SWIFT Code"
                      name="swiftCode"
                      placeholder="Enter SWIFT Code"
                      value={paymentDetails.swiftCode}
                      onChange={handleInputChange}
                      required
                      InputLabelProps={{ style: { color: '#2c3e50' } }}  
                      sx={{ input: { color: '#2c3e50' }, backgroundColor: '#f8f9fa' }}  
                    />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth sx={{ py: 1.5, backgroundColor: '#3498db', color: 'white' }}>
                    Pay Now
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            message={snackbar.message}
          />
        </Container>
      </Box>
    </PaymentBackground>
  );
};

export default PaymentProcess;

