import styled from 'styled-components';

export const AboutContainer = styled.div`
  background: #101522;
  padding: 180px 50px; // More padding
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const AboutRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const AboutColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media (min-width: 480px) and (max-width: 1200px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const AboutHeading = styled.h1`
  font-size: 52px; // Larger
  margin-bottom: 32px;
  color: #fff;
  font-weight: 700;
`;

export const OfficeImage = styled.img`
  max-width: 550px; // Slightly larger
  width: 100%;
  border-radius: 10px; // More rounded
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); // Deeper shadow
`;

export const AboutText = styled.p`
  max-width: 650px; // Wider
  font-size: 20px; // Larger
  line-height: 32px; // Better spacing
  white-space: pre-line;
`;
