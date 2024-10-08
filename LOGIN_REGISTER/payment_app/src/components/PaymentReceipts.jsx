import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentReceipts = () => {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    // Fetch receipts from the backend
    const fetchReceipts = async () => {
      try {
        const response = await axios.get('https://localhost:3000/payment-receipts'); // Adjust the endpoint accordingly
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
    // You can trigger a payment API call here, based on receipt details.
  };

  return (
    <div style={styles.paymentReceipts}>
      <h3>Payment Receipts</h3>
      {receipts.map((receipt, index) => (
        <div key={index} style={styles.receipt}>
          <p>{`${receipt.date} - ${receipt.description} - $${receipt.amount}`}</p>
          <button style={styles.payAgainButton} onClick={() => handlePayAgain(receipt)}>
            Pay again
          </button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  paymentReceipts: {
    border: '2px dashed blue',
    padding: '10px',
  },
  receipt: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  payAgainButton: {
    padding: '5px 10px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    cursor: 'pointer',
  },
};

export default PaymentReceipts;