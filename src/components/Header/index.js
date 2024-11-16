import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header/");

    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);

  return (
    <section
      className="navbar custom-navbar navbar-fixed-top"
      role="navigation"
    >
      <div className="container">
        <div
          className="navbar-header"
          style={{
            display: "flex",
            alignItems: "center",
            border: "none", // Menghilangkan garis pada elemen header
          }}
        >
          <button
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            style={{ border: "none", outline: "none" }} // Menghilangkan garis pada tombol
          >
            <span className="icon icon-bar" />
            <span className="icon icon-bar" />
            <span className="icon icon-bar" />
          </button>
          <a href="#" className="navbar-brand">
            <img
              src={`data:image/jpeg;base64, ${header.image}`}
              alt="Logo"
              style={{
                width: "40px", // Ukuran logo
                height: "40px",
                objectFit: "cover",
                marginRight: "10px", // Jarak antar logo dan teks
                border: "none", // Menghilangkan garis pada logo
                outline: "none", // Menghilangkan garis luar logo
              }}
            />
          </a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-nav-first">
            <li>
              <a href="#top" className="smoothScroll">
                {header.title}
              </a>
            </li>
            <li>
              <a href="#about" className="smoothScroll">
                {header.title1}
              </a>
            </li>

            <li>
              <a href="#courses" className="smoothScroll">
                {header.title2}
              </a>
            </li>

            <li>
              <a href="#contact" className="smoothScroll">
                {header.title3}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
