import styled from 'styled-components';

export const AboutContainer = styled.div`
  background: #101522;
  padding: 160px 50px;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-size: 48px;
  margin-bottom: 24px;
  color: #fff;
`;

export const OfficeImage = styled.img`
  max-width: 500px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const AboutText = styled.p`
  max-width: 600px;
  font-size: 18px;
  line-height: 28px;
  white-space: pre-line;
`;
