import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Updated */
  justify-content: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  background: #00CDAC;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #008c76;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const LoginCard = () => {
  return (
    <Card>
      <Button>Login</Button>
      <Button>Signup</Button>
    </Card>
  );
};


export default LoginCard;

