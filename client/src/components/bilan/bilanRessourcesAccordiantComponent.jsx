// BilanRessourcesAccordiantComponent.js
import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { customStyles, ModalContent, LoadingSpinner, CloseButton } from '../NewsFeed/ModalStyles';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AccordionHeader = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem;
  background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
  color: white;
  border-radius: ${props => (props.isOpen ? '1rem 1rem 0 0' : '1rem')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d, #ff6f61);
    transform: scale(1.02);
  }

  span {
    display: inline-block;
    transition: transform 0.3s ease;
  }
`;

const AccordionContent = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;
  padding: 1rem;
  border: 1px solid #1a2a6c;
  border-radius: 1rem 1rem 0 0;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.5s ease;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 1rem;
  }

  span {
    display: block;
    padding: 0.5rem 1rem;
    background-color: #f0f4f8;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease, transform 0.3s ease;
    cursor: pointer;
    text-decoration: none;
    color: #1a73e8;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #e1eaf5;
      transform: translateY(-2px);
    }
  }
`;

const AccordionWrapper = styled.div`
  position: relative;
  max-width: 100%;
`;

const smallModalStyles = {
  // Vos styles de modal personnalisés
  ...customStyles,
  content: {
    ...customStyles.content,
    width: '53%',
    left: '32%',
    transform: 'translate(-40%, -50%)',
  },
};

export default function BilanRessourcesAccordiantComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const openModal = async (url) => {
    setModalContent(
      `<p>Vous pouvez accéder directement à la ressource en utilisant le lien ci-dessous :</p>
      <p><a href="${url}" target="_blank" style="color: #1a73e8; text-decoration: underline;">${url}</a></p>`
    );
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent('');
    setIsOpen(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <AccordionWrapper>
        <AccordionHeader onClick={toggleOpen} isOpen={isOpen}>
          <span>{isOpen ? "-" : "+"} Références</span>
        </AccordionHeader>
        {isOpen && (
          <AccordionContent>
            <ul className="space-y-4">
              <li>
                <span onClick={() => openModal('https://www.statistiques.developpement-durable.gouv.fr/edition-numerique/chiffres-cles-du-climat-2022/23-quelques-facteurs-demissions')}>
                Chiffres clés du climat France, Europe et Monde
                </span>
              </li>
              <li>
                <span onClick={() => openModal('https://www.2tonnes.org/')}>
                  2tonnes, un atelier de formation à la transition écologique
                </span>
              </li>
              <li>
                <span onClick={() => openModal('https://www.ademe.fr/')}>
                  ADEME
                </span>
              </li>
              <li>
                <span onClick={() => openModal('https://www.impacto.org/')}>
                  Impacto
                </span>
              </li>
              <li>
                <span onClick={() => openModal('https://www.insee.fr/')}>
                  Insee
                </span>
              </li>
            </ul>
          </AccordionContent>
        )}
      </AccordionWrapper>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={smallModalStyles}
        contentLabel="Référence"
      >
        <CloseButton onClick={closeModal}>Fermer</CloseButton>
        {isLoading ? (
          <LoadingSpinner>
            <div className="spinner"></div>
          </LoadingSpinner>
        ) : (
          <ModalContent dangerouslySetInnerHTML={{ __html: modalContent }} />
        )}
      </Modal>
    </div>
  );
}


