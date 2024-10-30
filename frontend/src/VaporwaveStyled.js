import styled, { css, keyframes } from 'styled-components';

export const VaporwaveContainer = styled.div`
  background: linear-gradient(135deg, #ff77ff, #00ffff);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Courier New', Courier, monospace;
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
  perspective: 800px;
`;

export const WebTitle = styled.div`
  font-size: 5rem;
  text-align: center;
  position: absolute;
  top: 30px;
  transform: rotateY(20deg) rotateX(20deg);
  animation: rotate 5s infinite linear;

  text-shadow: 
    -2px 2px 0 #ff77ff, 
    2px -2px 0 #00ffff, 
    2px 2px 0 rgba(0, 0, 0, 0.3);

  @keyframes rotate {
    from {
      transform: rotateY(20deg) rotateX(20deg);
    }
    to {
      transform: rotateY(380deg) rotateX(380deg);
    }
  }
`;

export const VaporwaveBox = styled.div`
  width: 300px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AnimatedContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    transition: transform 0.5s ease;

    ${({ showExtraOptions }) =>
        showExtraOptions &&
        css`
            transform: translateX(-150px);
        `}
`;

export const OptionsButton = styled.button`
    margin-top: 20px;
    background: #00ffff;
    color: #ff77ff;
    border: none;
    border-radius: 5px;
    padding: 8px 50px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #ff33ff;
        color: #00ffff;
    }
`;

export const ExtraOptionsBox = styled.div`
    position: absolute;
    width: 200px;
    font-size: 1rem;
    margin-right: -225px;
    opacity: 0; 

  ${({ showExtraOptions }) =>
    showExtraOptions &&
    css`
      animation: fade-in 2s forwards;
    `}

    @keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

  
  p1 {
    display: block;
    margin-bottom: 10px;
    color: #00ffff;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    color: #ff77ff;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

export const SecretInput = styled.input`
  width: 90%;
  padding: 10px;
  margin-top: 10px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1rem;
  text-align: center;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #ff77ff;
  }
`;

export const AllowedViewsInput = styled(SecretInput)`
  width: 100px;
  margin-top: 5px;
`;

export const SecretIdInput = styled(SecretInput)`
  margin-top: 20px; /* Separates it from the previous input */
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: #ff77ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;

  &:hover {
    background: #ff33ff;
  }
`;

export const ResultDisplay = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 1.2rem;
  color: #ff16ff;
`;
