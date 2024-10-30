import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { VaporwaveContainer, WebTitle } from './VaporwaveStyled';
import MainScreen from './components/MainScreen';
import RetrieveSecret from './components/RetrieveSecret';


function App() {
 
  return (
    <Router>
      <VaporwaveContainer>
      <WebTitle>pyOTS</WebTitle>
        <Routes>
          <Route
            path="/"
            element={<MainScreen />}
          />
          <Route path="/retrieve/:secretId" element={<RetrieveSecret />} />
        </Routes>
      </VaporwaveContainer>
    </Router>
  );
}

export default App;
