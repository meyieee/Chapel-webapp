import { ref, onValue } from "@firebase/database";
import { useEffect, useState } from "react";
import { database } from '../../config/FIrebase';
import logo from '../../Assets/image/logoastuf.png';

const Header = () => {
  const defaultLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' }
  ];

  const [header, setHeader] = useState({
    links: defaultLinks
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
          >
            {link.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;