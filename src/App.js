import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGallery from './components/ProductGallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import EmailSubscription from './components/EmailSubscription';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  /* ... Global styles ... */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Features />
      <ProductGallery />
      <Testimonials />
      <Contact />
      <EmailSubscription />
      <Footer />
    </>
  );
}

export default App;
