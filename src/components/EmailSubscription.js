import React, { useState } from 'react';
import styled from 'styled-components';

const SubscriptionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f2f5;
  padding: 80px 0;
`;

const SubscriptionTitle = styled.h2`
  font-size: 28px;
  color: #333;
  text-align: center;
  width: 100%;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const SubscriptionForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SubscriptionInput = styled.input`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 90%;
  max-width: 300px;

  @media (min-width: 768px) {
    width: 300px;
  }
`;
const SubscriptionButton = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  &:hover {
    background-color: #666;
  }
`;

const EmailSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement subscription logic here
  };

  return (
    <SubscriptionContainer>
      <SubscriptionTitle>Subscribe to Our Newsletter</SubscriptionTitle>
      <SubscriptionForm onSubmit={handleSubmit}>
        <SubscriptionInput
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          required
        />
        <SubscriptionButton type="submit">Subscribe</SubscriptionButton>
      </SubscriptionForm>
    </SubscriptionContainer>
  );
};

export default EmailSubscription;
