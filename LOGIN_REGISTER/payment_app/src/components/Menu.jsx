import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Divider, Box, Typography, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../assets/images/logo.jpg';  

const drawerWidth = 240;

const Menu = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { 
          width: drawerWidth, 
          boxSizing: 'border-box', 
          backgroundColor: '#f8f9fa',  // Light gray 
          paddingTop: '45px',
        },
      }}
    >
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '20px 0',
          textAlign: 'center',
        }}
      >
       
        <Avatar 
          src={logo} 
          sx={{ 
            width: 100, 
            height: 100, 
            border: '2px solid #3498db',  // Light blue border
            mb: 2  
          }} 
        />
        <Typography variant="h6" sx={{ color: '#2c3e50' }}>  
          Beepo
        </Typography>
        <Typography variant="body2" sx={{ color: '#7f8c8d' }}> 
          beepo@example.com
        </Typography>
      </Box>
      <Divider sx={{ borderColor: '#3498db' }} />
      <List>
        <ListItemButton onClick={() => navigate('/CustomerDashboard')}>
          <ListItemIcon>
            <HomeIcon sx={{ color: '#3498db' }} /> 
          </ListItemIcon>
          <ListItemText primary="Home" sx={{ color: '#2c3e50' }} /> 
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/transactions')}>
          <ListItemIcon>
            <AccountBalanceWalletIcon sx={{ color: '#3498db' }} />
          </ListItemIcon>
          <ListItemText primary="Transactions" sx={{ color: '#2c3e50' }} />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/payments')}>
          <ListItemIcon>
            <PaymentIcon sx={{ color: '#3498db' }} />
          </ListItemIcon>
          <ListItemText primary="Payments" sx={{ color: '#2c3e50' }} />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/')}>
          <ListItemIcon>
            <LogoutIcon sx={{ color: '#3498db' }} />
          </ListItemIcon>
          <ListItemText primary="Logout" sx={{ color: '#2c3e50' }} />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Menu;


