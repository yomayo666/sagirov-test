import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../assets/лого.png";

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <header className="header__content">
        <div className="header__top_bar"></div>
        <div className="col-md-2 header__logo_container">
          <div className="angle_1 angle"></div>
          <div className="angle_2 angle"></div>
          <div className="angle_3 angle"></div>
          <div className="angle_4 angle"></div>
          <img className="header__logo img-fluid" src={logo} alt="Logo" />
        </div>
        <div className={`header__nav col-md-10 ${isMenuOpen ? "open" : ""}`}>
          <div className="burger-menu" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul
            className={`nav justify-content-md-end ${isMenuOpen ? "show" : ""}`}
          >
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Главная
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">
                Технология
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/flight-schedule">
                График полетов
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/guarantees">
                Гарантии
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                О компании
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacts">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </Router>
  );
}
