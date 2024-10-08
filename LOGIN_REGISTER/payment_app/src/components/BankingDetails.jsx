import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

const BankingDetails = () => {
  const [accountDetails, setAccountDetails] = useState({
    accountNumber: '',
    availableBalance: 0,
  });

  useEffect(() => {
    // Fetch user banking details
    const fetchBankingDetails = async () => {
      try {
        const response = await axios.get('/api/user/banking-details'); // endpoint
        setAccountDetails(response.data);
      } catch (error) {
        console.error('Error fetching banking details', error);
      }
    };

    fetchBankingDetails();
  }, []);

  return (
    <Card sx={{ backgroundColor: '#ffffff', color: '#2c3e50', border: '1px solid #3498db', mb: 4 }}> {/* White background with light blue border */}
      <CardContent>
        <Typography variant="h5" sx={{ color: '#3498db' }} gutterBottom> {/* Light blue heading */}
          Banking Details
        </Typography>
        <Typography variant="body1">
          <strong>Current Acc No:</strong> {accountDetails.accountNumber} <br />
          <strong>Available Bal:</strong> ${accountDetails.availableBalance}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BankingDetails;
