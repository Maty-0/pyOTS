import React, { useState, useEffect, useRef  } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { VaporwaveBox, Title, ResultDisplay } from '../VaporwaveStyled';

const RetrieveSecret = () => {
  const { secretId } = useParams();
  const [retrievedSecret, setRetrievedSecret] = useState('');

  useEffect(() => {
    const fetchSecret = async () => {
        try {
            console.log("Fetching secret with ID:", secretId);  // Debugging
            const response = await axios.get(`http://127.0.0.1:8000/api/secret/${secretId}`);
            console.log("Response data:", response.data);  // Debugging
            setRetrievedSecret(response.data.secret || response.data.message);
            } 
        catch (error) {
            console.error("Error fetching secret:", error);  // Error handling
            setRetrievedSecret("Failed to retrieve secret.");
        }
    };

    fetchSecret();
  }, [secretId]);

  return (
    <VaporwaveBox>
      <Title>Retrieved Secret</Title>
      <ResultDisplay>{retrievedSecret}</ResultDisplay>
    </VaporwaveBox>
  );
};

export default RetrieveSecret;
