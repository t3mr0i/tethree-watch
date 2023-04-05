import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import detailShot from '../assets/Detail.JPG';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  padding: 0 20px;
`;

const Image = styled(motion.img)`
  width: 100%;
  max-width: 600px;
`;

const Title = styled(motion.h1)`
  font-size: 32px;
  margin: 0 0 20px 0;
`;

const Text = styled(motion.p)`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
`;

const About = () => {
  const imageVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Section>
      <ContentContainer id="about" data-scroll="about">
        <Image
          src= {detailShot}
          alt="Tenylon Strap"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />
        <Title variants={titleVariants} initial="hidden" animate="visible">
          Quality Above All Else
        </Title>
        <Text variants={textVariants} initial="hidden" animate="visible">
          At Tethree, quality is of the utmost importance to us. As a German company, we pride ourselves on our attention to detail and commitment to providing the best possible products to our customers. That's why we've crafted our Tenylon straps to be nothing short of exceptional. A perfect blend of Perlon and NATO, Tenylon straps offer adjustable length and a single-pass design for ultimate comfort. With a unique alternating nylon weave, you won't find anything else like it in stores. Plus, each strap undergoes rigorous quality control, ensuring only the best make it to your wrist. Finished with top-quality 316L hardware, Tenylon straps are the perfect complement to any watch.
        </Text>
      </ContentContainer>
    </Section>
  );
};

export default About;

