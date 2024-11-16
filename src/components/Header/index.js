const Header = () => {
  return (
    <section
      className="navbar custom-navbar navbar-fixed-top"
      role="navigation"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon icon-bar" />
            <span className="icon icon-bar" />
            <span className="icon icon-bar" />
          </button>
          {/* Logo text */}
          <a href="#" className="navbar-brand">
            Chapel
          </a>
        </div>
        {/* Menu links */}
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-nav-first">
            <li>
              <a href="#top" className="smoothScroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="smoothScroll">
                About
              </a>
            </li>

            <li>
              <a href="#courses" className="smoothScroll">
                Courses
              </a>
            </li>

            <li>
              <a href="#contact" className="smoothScroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Header;
