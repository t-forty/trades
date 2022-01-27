import React from 'react';
// MATERIAL UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Loading() {
  return (
  <Card elevation={0} 
                sx={{ minWidth: 275, 
                maxWidth: '40%', 
                ml: 10, mt: 1
                }} 
                >
                <CardContent sx={{ pl: 0}}>
                    <Typography variant="h5" component="div" sx={{ mb: 1}}>
                        Loading...
                    </Typography>
                </CardContent>
                
              
</Card>
  )
}

export default Loading;
