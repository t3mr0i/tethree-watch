import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 80px 0;
`;

const GalleryTitle = styled.h2`
  font-size: 36px;
  color: #333;
  text-align: center;
  width: 100%;
  margin-bottom: 40px;
`;

const ProductCard = styled.div`
  background-color: #f0f2f5;
  width: 300px;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductName = styled.h3`
  font-size: 24px;
  color: #333;
  padding: 20px;
`;

const ProductGallery = () => {
  const products = [
    {
      id: 1,
      name: 'Blue',
      image: '../assets/Blau.JPG',
    },
    {
      id: 2,
      name: 'Grau',
      image: '../assets/Grau.JPG',
    },
    // Add more products here
  ];

  return (
    <GalleryContainer>
      <GalleryTitle>Our Collection</GalleryTitle>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductName>{product.name}</ProductName>
        </ProductCard>
      ))}
    </GalleryContainer>
  );
};

export default ProductGallery;
