import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f2f5;
  padding: 80px 0;
`;

const TestimonialsTitle = styled.h2`
  font-size: 36px;
  color: #333;
  text-align: center;
  width: 100%;
  margin-bottom: 40px;
`;

const Testimonial = styled.div`
  background-color: #fff;
  width: 800px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TestimonialContent = styled.p`
  font-size: 16px;
  color: #666;
`;

const TestimonialAuthor = styled.p`
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
`;

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: 'I love my Tethree watch strap. The quality and design are amazing!',
      author: 'Jane Doe',
    },
    {
      id: 2,
      content: 'Tethree watch straps are super comfortable and stylish. Highly recommended.',
      author: 'John Smith',
    },
    // Add more testimonials here
  ];

  return (
    <TestimonialsContainer>
    <TestimonialsTitle>What Our Customers Say</TestimonialsTitle>
    {testimonials.map((testimonial) => (
    <Testimonial key={testimonial.id}>
    <TestimonialContent>{testimonial.content}</TestimonialContent>
    <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
    </Testimonial>
    ))}
    </TestimonialsContainer>
    );
    };
    
    export default Testimonials;