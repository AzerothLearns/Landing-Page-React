import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
}
*::-webkit-scrollbar {
  width: 8px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background: rgba(155, 155, 155, 0.5);
  border-radius: 10px;
  border: 1px solid transparent;
  background-clip: content-box;
}
*::-webkit-scrollbar-thumb:hover {
  background: rgba(155, 155, 155, 0.7);
}
`;


export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

// Enhanced button styles for consistency
export const Button = styled.button`
  border-radius: 6px; // Slightly more rounded for modernity
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 70px' : '12px 24px')}; // Better padding
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '22px' : '18px')}; // Slightly larger for emphasis
  font-weight: 600; // Added weight for boldness
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
  transition: all 0.3s ease-in-out; // Smoother transition
  &:hover {
    transform: translateY(-2px); // Lift effect on hover
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    padding: ${({ big }) => (big ? '16px 0' : '14px 0')};
  }
`;


export default  GlobalStyles;