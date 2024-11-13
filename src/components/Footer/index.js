const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="footer-info">
              <div className="section-title">
                <h2>Headquarter</h2>
              </div>
              <address>
                <p>
                  1800 dapibus a tortor pretium, <br /> Integer nisl dui, ABC
                  12000
                </p>
              </address>
              <ul className="social-icon">
                <li>
                  <a href="#" className="fa fa-facebook-square" />
                </li>
                <li>
                  <a href="#" className="fa fa-twitter" />
                </li>
                <li>
                  <a href="#" className="fa fa-instagram" />
                </li>
              </ul>
              <div className="copyright-text">
                <p>Copyright Chapel</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="footer-info">
              <div className="section-title">
                <h2>Contact Info</h2>
              </div>
              <address>
                <p>+65 2244 1100, +66 1800 1100</p>
                <p>
                  <a href="mailto:youremail.co">hello@youremail.co</a>
                </p>
              </address>
              <div className="footer_menu">
                <h2>Quick Links</h2>
                <ul>
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="#">Investor</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Refund Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="footer-info newsletter-form"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
