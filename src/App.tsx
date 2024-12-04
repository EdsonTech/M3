import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Infrastructure from './components/sections/Infrastructure';
import Healthcare from './components/sections/Healthcare';
import Operations from './components/sections/Operations';
import Development from './components/sections/Development';
import Microsoft from './components/sections/Microsoft';
import Partners from './components/sections/Partners';
import Clients from './components/sections/Clients';
import Contact from './components/sections/Contact';
import Stats from './components/sections/Stats';
import CTA from './components/sections/CTA';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Infrastructure />
      <Healthcare />
      <Operations />
      <Development />
      <Microsoft />
      <Partners />
      <Clients />
      <Stats />
      <CTA />
      <Contact />
    </Layout>
  );
}

export default App;