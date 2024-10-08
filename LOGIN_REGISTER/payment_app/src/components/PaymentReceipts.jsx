import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

const PaymentReceipts = () => {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    // Fetch receipts from the backend
    const fetchReceipts = async () => {
      try {
        const response = await axios.get('https://localhost:3000/payment-receipts'); //endpoint
        setReceipts(response.data);
      } catch (error) {
        console.error('Error fetching payment receipts', error);
      }
    };

    fetchReceipts();
  }, []);

  const handlePayAgain = (receipt) => {
    // Implement the logic to pay again using receipt details
    console.log(`Paying again for: ${receipt.description}`);
  
  };

  return (
    <Card sx={{ backgroundColor: '#1E1E2C', color: 'white', border: '2px solid #6A0DAD', mb: 4 }}> {/* Dark background with purple border */}
      <CardContent>
        <Typography variant="h5" sx={{ color: '#6A0DAD' }} gutterBottom> {/* Purple heading */}
          Payment Receipts
        </Typography>
        {receipts.length > 0 ? (
          receipts.map((receipt, index) => (
            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="body2">
                {`${receipt.date} - ${receipt.description} - $${receipt.amount}`}
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#3498db', color: 'white' }}  
                onClick={() => handlePayAgain(receipt)}
              >
                Pay Again
              </Button>
            </Box>
          ))
        ) : (
          <Typography variant="body2">
            No receipts found.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentReceipts;