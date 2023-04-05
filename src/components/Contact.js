import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 80px 0;
`;

const ContactTitle = styled.h2`
  font-size: 36px;
  color: #333;
  text-align: center;
  width: 100%;
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const FormTextarea = styled.textarea`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  resize: vertical;
`;

const FormSubmitButton = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #666;
  }
  id="contact"

`;

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
  };

  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormInput type="text" required />
        </FormGroup>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput type="email" required />
        </FormGroup>
        <FormGroup>
          <FormLabel>Message</FormLabel>
          <FormTextarea rows="5" required></FormTextarea>
        </FormGroup>
        <FormSubmitButton type="submit">Send Message</FormSubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
