import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import VytahyHladanie from './VytahyHladanie';
import VytahyVysledky from './VytahyVysledky';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  
  <Container>
    
    <Stack gap={3}>
      <h2 className=" mx-auto">Vyhľadávač</h2>
      <VytahyHladanie/>
      <VytahyVysledky/>
    </Stack>
  </Container>
</>
);


