import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Footer = () => {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "footer/");

    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
    });
  }, []);
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="footer-info">
              <div className="section-title">
                <h2>Chapel FILKOM</h2>
              </div>
              <address>
                <p>
                  come and join our filkom student forum to get new insight about usefull material that's definitely <br /> gonna be a help for you. 
                  see you thare :)
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
              
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="footer-info">
              <div className="section-title">
                <h2>{footer.title}</h2>
              </div>
              <address>
                <p>{footer.subTitle}</p>
                <p>
                  <a href="rawungito@gmail.com"></a>
                </p>
              </address>
              <div className="footer_menu">
                <h2>{footer.title2}</h2>
                <ul>
                  <li>
                    <a href="#">{footer.subTitle1}</a>
                  </li>
                  <li>
                    <a href="#">{footer.subTitle2}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="footer-info newsletter-form"></div>
          </div>
          <div className="copyright-text">
                <p style={{ marginTop: "20px", fontSize: "14px" }}>
                  Copyright © {new Date().getFullYear()} YourCompany | All
                  Rights Reserved
                </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
