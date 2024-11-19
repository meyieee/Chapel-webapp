import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Home from "./components/Home";
import "./Assets/css/style.css";
import About from './components/About';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Home />
        <Feature />
        <About/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;