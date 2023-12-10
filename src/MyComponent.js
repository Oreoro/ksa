import React from 'react';
import styled from 'styled-components';


const PlaidStyleWrapper = styled.div`
background-color:grey;
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
color: #3d4956;
font-family: 'Helvetica Neue', Arial, sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid #ddd;
border-radius: 6px;
padding: 16px;
margin: 16px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 @media (max-width: 768px) {
    flex-direction: column;


`;

function MyComponent() {
  return ( 
    <PlaidStyleWrapper>
      <h1>Plaid</h1>
    </PlaidStyleWrapper>
  );
}


export default MyComponent;
