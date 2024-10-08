import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Grid, Paper } from '@mui/material';

const PaymentProcess = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    recipientName: '',
    recipientBank: '',
    recipientAccountNumber: '',
    amount: '',
    swiftCode: ''
  });

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
      const response = await axios.post('http://localhost:5000/api/transaction', paymentDetails);
      if (response.data.success) {
        alert('Payment successful');
      } else {
        alert('Payment failed');
      }
    } catch (error) {
      console.error('Payment Error:', error);
      alert('There was an issue with the payment');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={styles.paper}>
        <Typography variant="h5" align="center" style={styles.title}>
          Payment Form
        </Typography>
        <form onSubmit={handleSubmit} style={styles.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Recipient's Name"
                name="recipientName"
                placeholder="Enter Recipient's Name"
                value={paymentDetails.recipientName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Recipient's Bank"
                name="recipientBank"
                placeholder="Enter Recipient's Bank"
                value={paymentDetails.recipientBank}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Recipient's Account No"
                name="recipientAccountNumber"
                placeholder="Enter Recipient's Account No"
                value={paymentDetails.recipientAccountNumber}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
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
              />
            </Grid>
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
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" style={styles.submitButton}>
                Pay Now
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button type="button" variant="outlined" color="secondary" onClick={() => window.history.back()}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

const styles = {
  paper: {
    padding: '20px',
    marginTop: '20px',
  },
  title: {
    marginBottom: '20px',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '10px',
  },
  submitButton: {
    width: '100%',
  },
};

export default PaymentProcess;