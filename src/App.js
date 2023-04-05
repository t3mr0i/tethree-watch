import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGallery from './components/ProductGallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import EmailSubscription from './components/EmailSubscription';
import Footer from './components/Footer';
import Impressum from './components/Impressum/Impressum';
import Datenschutz from './components/Datenschutz/Datenschutz';

const GlobalStyle = createGlobalStyle`
  /* ... Global styles ... */
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Hero />
          <Features />
          <ProductGallery />
          <Testimonials />
          <Contact />
          <EmailSubscription />
        </Route>
        <Route path="/impressum">
          <Impressum />
        </Route>
        <Route path="/datenschutz">
          <Datenschutz />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;