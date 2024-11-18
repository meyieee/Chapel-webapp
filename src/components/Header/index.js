import { ref, onValue } from "@firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/FIrebase/index";
import logo from "../../Assets/image/logoastuf.png";

const Header = () => {
  const defaultLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  const [header, setHeader] = useState({
    links: defaultLinks,
  });

  useEffect(() => {
    const headerRef = ref(database, "header");
    const unsubscribe = onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      if (data && data.links) {
        setHeader(data);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Astuf Logo" />
      </div>

      <nav className="header-nav">
        {(header.links || defaultLinks).map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="nav-link"
            onClick={(e) => handleSmoothScroll(e, link.href)}
          >
            {link.title}
          </a>
        ))}
      </nav>
      <div className="header-container">
        <div className="header-logo">
          <img src={logo} alt="Astuf Logo" />
        </div>
        
        <nav className="header-nav">
          {(header.links || defaultLinks).map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="nav-link"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

