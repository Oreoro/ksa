// ColorfulBlock.js
import styled from 'styled-components';

export const Block = styled.div`
  width: 50%;
  padding-top: 50%; // Sets height equal to width
  background-color: ${props => props.color};
  position: relative;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  italic: 700;
  color: black;
  background-size: 100% 100%;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
`;

export const CenteredContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center; 
  align-items: center;
`;



