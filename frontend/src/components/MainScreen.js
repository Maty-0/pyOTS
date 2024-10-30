import React, { useState } from 'react';
import axios from 'axios';
import { VaporwaveBox, Title, SecretInput, SubmitButton, OptionsButton, AnimatedContainer, ExtraOptionsBox, AllowedViewsInput  } from '../VaporwaveStyled';


const MainScreen = () => {
    const [allowedViews, setAllowedViews] = useState(1);
    const [secret, setSecret] = useState('');
    const [secretUrl, setSecretUrl] = useState('');
    const [showExtraOptions, setShowExtraOptions] = useState(false);
    const [copyMessage, setCopyMessage] = useState('');
  
    const toggleExtraOptions = () => {
      setShowExtraOptions(prev => !prev);
    };
  
    const handleStoreSecret = async () => {
      const id = window.crypto.randomUUID()
      await axios.post(`http://127.0.0.1:8000/api/secret/${id}`, { content: secret, views: allowedViews });
      setSecretUrl(`/retrieve/${id}`);
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(`http://localhost:3000${secretUrl}`);
        setCopyMessage('Copied!');
        setTimeout(() => setCopyMessage(''), 2000); // Reset message after 2 seconds
      };
  

  return (
    <VaporwaveBox>
        {showExtraOptions && (
           <ExtraOptionsBox showExtraOptions={showExtraOptions}>
           <p1>Extra Options </p1>
           <label>
             Allowed Views:
             <AllowedViewsInput
               type="number"
               value={allowedViews}
               onChange={(e) => setAllowedViews(Number(e.target.value))}
             />
           </label>
         </ExtraOptionsBox>
        )}


      <AnimatedContainer showExtraOptions={showExtraOptions}> 
      <VaporwaveBox>
      <Title>Share A Secret</Title>
      <SecretInput
        type="text"
        placeholder="Enter your secret"
        value={secret}
        onChange={e => setSecret(e.target.value)}
      />
      <SubmitButton onClick={handleStoreSecret}>Submit</SubmitButton>
      {secretUrl && (
        <>
        <p>Your secret link: http://localhost:3000{secretUrl}</p>
        <SubmitButton onClick={handleCopyToClipboard}>Copy to Clipboard</SubmitButton>
        <span>{copyMessage}</span>
        </>
      )}
      </VaporwaveBox>
       </AnimatedContainer>
       <OptionsButton onClick={toggleExtraOptions}>
        {showExtraOptions ? "Hide Extra Options" : "Show Extra Options"}
      </OptionsButton>
    </VaporwaveBox>
  );
};

export default MainScreen;