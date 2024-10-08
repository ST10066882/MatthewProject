import React from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure to install react-router-dom
import Menu from './Menu';
import BankingDetails from './BankingDetails';
import PaymentReceipts from './PaymentReceipts';
import { Button, Container } from '@mui/material';

const CustomerDashboard = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLocalPayment = () => {
    navigate('/payment-process', { state: { type: 'local' } }); // Pass payment details to the next page
  };

  const handleInternationalPayment = () => {
    navigate('/payment-process', { state: { type: 'international' } });
  };

  return (
    <Container>
      <h2>Hello, [Customer’s Name]</h2>

      <div style={styles.paymentOptions}>
        <Button 
          variant="contained" 
          color="primary" 
          style={styles.button} 
          onClick={handleLocalPayment}
        >
          Make Local Payment
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          style={styles.button} 
          onClick={handleInternationalPayment}
        >
          Make International Payment
        </Button>
      </div>

      <div style={styles.content}>
        <Menu />
        <div style={styles.details}>
          <BankingDetails />
          <PaymentReceipts />
          
        </div>
      </div>
    </Container>
  );
};

const styles = {
  paymentOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  button: {
    flex: 1, // Make buttons take equal space
    marginRight: '10px', // Space between buttons
    padding: '15px', // Increased padding for larger buttons
    fontSize: '16px', // Increased font size
  },
  content: {
    display: 'flex',
  },
  details: {
    marginLeft: '20px',
    flex: 1,
  },
};

export default CustomerDashboard;