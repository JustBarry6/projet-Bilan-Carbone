import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from "../context/AuthContext";
import { lightTheme, darkTheme } from "../themes";
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(135deg, #a8e063, #56ab2f);
  overflow: hidden; /* Désactiver le défilement global */
  // transform: scale(0.9); /* Réduire l'échelle pour éviter le défilement */
`;

const GameContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  padding-bottom: 70%; /* Augmenter la hauteur */
  height: 0;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 8px;
  flex: 1;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 5%,
    transparent 0%,
    transparent 90%,
    rgba(0, 0, 0, 1) 0%
  );
  z-index: 1;
`;

const Title = styled.h1`
  font-family: 'Outfit', Helvetica, sans-serif;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const MenuButton = styled.button`
  background-color: #ff5733;
  color: white;
  font-size: 1.2rem;
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin-top: 20px;

  &:hover {
    background-color: #e74c3c;
    transform: scale(1.05);
  }
`;

const Note = styled.p`
  font-size: 1rem;
  color: #fff;
  margin-top: 20px;
  text-align: center;
  max-width: 600px;
`;

const EcoGame = ({ gameUrl }) => {
  const { isAuthenticated } = useAuth();
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const navigate = useNavigate();

  return (
      <>
        <PageContainer>
          <GameContainer>
            <Title>Jeu Écologique</Title>
            <MenuButton onClick={() => navigate('/jeux-ludiques')}>Menu des Jeux</MenuButton>
            <IframeContainer>
              <iframe
                src={gameUrl}
                title="Jeu Écologique"
                allowFullScreen
              ></iframe>
              <Overlay />
            </IframeContainer>
            {gameUrl.includes('recycling-waste') && (
              <Note>Note: Ce jeu nécessite l'utilisation d'une souris pour déplacer les objets dans les poubelles correspondantes.</Note>
            )}
          </GameContainer>
        </PageContainer>
      </>
  );
};

export default EcoGame;
