/* eslint no-restricted-globals: ["error", "scrollTo"] */

import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGallery from './components/ProductGallery';
import Contact from './components/Contact';
import EmailSubscription from './components/EmailSubscription';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import About from './components/AboutUs';
import Scene from './components/Scene';
import * as THREE from 'three';
import { animateScroll as scrollTo } from 'react-scroll';

const GlobalStyle = createGlobalStyle`

body {
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

  font-family: 'Inter', sans-serif;
  color: #333;
  background-color: #f8f8f8;
}
#threeCanvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
`;

const App = () => {
  const threeCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = threeCanvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const scene = new THREE.Scene();
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: '#fff' });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <canvas ref={threeCanvasRef} id="threeCanvas" />
      <Header scrollTo={scrollTo} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Scene />
              <Features />
              <About scrollTo={scrollTo} />
              <ProductGallery />
              <Contact scrollTo={scrollTo} />
              <EmailSubscription />
            </>
          }
        />

        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
