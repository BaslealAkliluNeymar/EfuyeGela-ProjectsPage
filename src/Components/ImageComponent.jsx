import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

const ImageComponent = (props) => {

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        width: '305px',
        height: '313px',
        flex: 1,
        overflow:"hidden",
        position: 'relative',
        borderRadius: '30px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${props.img})`,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      }}
      xs={12}
    >
      <Typography
        variant="h1"
        
        sx={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          color: 'white',
          fontSize: '1.75rem',
          letterSpacing:'0.15rem'
        }}
      >
        {props.text}
      </Typography>
    </Card>
  );
};

export default ImageComponent;
