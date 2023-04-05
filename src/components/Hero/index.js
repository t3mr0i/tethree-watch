import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import heroImage from '../../assets/hero-image.png';

const HeroContainer = styled(motion.section)`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
`;

const heroVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const HeroTitle = styled.h1`
  font-size: 64px;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 24px;
`;

const Hero = () => {
  return (
    <HeroContainer
      initial="hidden"
      animate="visible"
      variants={heroVariant}
    >

    </HeroContainer>
  );
};

export default Hero;
