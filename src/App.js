import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Home from "./components/Home";
import "./Assets/css/style.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Home />
        <Feature />
        <section id="about" className="about-section">
          <div className="container">
            <h2>About Us</h2>
            <p>
              Welcome to our Computer Science student forum. A place where CS students can connect,
              collaborate, and help each other excel in their programming journey.
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};


export default App;