import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import "./Assets/css/style.css";

const App = () => {
  return (
    <div>
      <Header />
      {/* FEATURE */}
      <section id="feature">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="feature-thumb">
                <span>01</span>
                <h3>Trending Courses</h3>
                <p>
                  Known is a free education HTML Bootstrap template. You can
                  modify it in any way and use it for your website.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="feature-thumb">
                <span>02</span>
                <h3>Books & Library</h3>
                <p>
                  You are allowed to use Known HTML Template for your commercial
                  or non-commercial websites.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="feature-thumb">
                <span>03</span>
                <h3>Certified Teachers</h3>
                <p>
                  Please spread the word about us. Template redistribution is
                  NOT allowed on any download website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="about-info">
                <h2>
                  Start your journey to a better life with online practical
                  courses
                </h2>
                <figure>
                  <span>
                    <i className="fa fa-users" />
                  </span>
                  <figcaption>
                    <h3>Professional Trainers</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sint ipsa voluptatibus.
                    </p>
                  </figcaption>
                </figure>
                <figure>
                  <span>
                    <i className="fa fa-certificate" />
                  </span>
                  <figcaption>
                    <h3>International Certifications</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sint ipsa voluptatibus.
                    </p>
                  </figcaption>
                </figure>
                <figure>
                  <span>
                    <i className="fa fa-bar-chart-o" />
                  </span>
                  <figcaption>
                    <h3>Free for 3 months</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sint ipsa voluptatibus.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-md-offset-1 col-md-4 col-sm-12"></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <form id="contact-form" role="form" method="post">
                <div className="section-title">
                  <h2>
                    Contact us <small>we love conversations. Let’s talk!</small>
                  </h2>
                </div>
                <div className="col-md-12 col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter full name"
                    name="name"
                    required
                  />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email address"
                    name="email"
                    required
                  />
                  <textarea
                    className="form-control"
                    rows={6}
                    placeholder="Tell us about your message"
                    name="message"
                    required
                  />
                </div>
                <div className="col-md-4 col-sm-12">
                  <input
                    type="submit"
                    className="form-control"
                    name="send message"
                    value="Send Message"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="contact-image">
                <img
                  src="images/contact-image.jpg"
                  className="img-responsive"
                  alt="Smiling Two Girls"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
