import React from 'react';
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
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
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="about-info">
                  <h2 className="section-title">
                    Begin Your Journey to Excellence
                  </h2>
                  <p className="section-subtitle">
                    Transform your life through our comprehensive online courses
                  </p>
                  
                  <div className="features-grid">
                    <figure className="feature-card">
                      <span className="feature-icon">
                        <i className="fa fa-users" />
                      </span>
                      <figcaption>
                        <h3>Expert Instructors</h3>
                        <p>
                          Learn from industry professionals with years of practical experience
                          and proven teaching methods.
                        </p>
                      </figcaption>
                    </figure>

                    <figure className="feature-card">
                      <span className="feature-icon">
                        <i className="fa fa-certificate" />
                      </span>
                      <figcaption>
                        <h3>Recognized Certifications</h3>
                        <p>
                          Earn globally recognized certifications to boost your
                          career prospects and validate your skills.
                        </p>
                      </figcaption>
                    </figure>

                    <figure className="feature-card">
                      <span className="feature-icon">
                        <i className="fa fa-bar-chart-o" />
                      </span>
                      <figcaption>
                        <h3>3-Month Trial Period</h3>
                        <p>
                          Experience our platform risk-free with a comprehensive
                          three-month trial period.
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-12 offset-md-1">
                <div className="about-image">
                  <img src="/images/about-image.jpg" alt="About Us" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;