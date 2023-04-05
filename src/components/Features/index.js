import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCogs, FaClock, FaPalette } from 'react-icons/fa';

const FeaturesContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 80px 0;
`;

const FeatureCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  margin: 10px;
`;

const FeatureIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  text-align: center;
`;

const featureVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};


const featureList = [
  {
    id: 1,
    icon: <FaCogs />,
    title: 'Premium Materials',
    description: 'Our straps are made from the highest quality materials to ensure durability and comfort.',
  },
  {
    id: 2,
    icon: <FaClock />,
    title: 'Easy Installation',
    description: 'Easily install and remove your watch straps with our quick-release spring bars.',
  },
  {
    id: 3,
    icon: <FaPalette />,
    title: 'Wide Selection',
    description: 'Choose from a variety of styles, materials, and colors to find the perfect strap for your watch.',
  },
];

const Features = () => {
  return (
    <FeaturesContainer>
      {featureList.map((feature, i) => (
        <FeatureCard 
          key={feature.id}
          initial="hidden"
          animate="visible"
          variants={featureVariants}
          custom={i}
        >
       <FeatureIcon
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  {feature.icon}
</FeatureIcon>
          <FeatureTitle
            whileHover={{ color: 'var(--color-accent)' }}
            whileTap={{ scale: 0.9 }}
          >
            {feature.title}
          </FeatureTitle>
          <FeatureDescription
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {feature.description}
          </FeatureDescription>
        </FeatureCard>
      ))}
    </FeaturesContainer>
  );
};

export default Features;