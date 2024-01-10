import { useState } from "react";
import logo from "../assets/лого.png";
import journey  from '../assets/Путешествие на красную планету.png'

import "./headerPage.css";

const HeaderPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header">
      <img className="journey__img" src={journey} alt="Путешествие на красную планету"/>
        <div className="header__top_bar"></div>
        <div className="container">
          <header className="header__content">
            <div className="col-md-2 header__logo_container">
              <div className="angle_1 angle"></div>
              <div className="angle_2 angle"></div>
              <div className="angle_3 angle"></div>
              <div className="angle_4 angle"></div>
              <img className="header__logo img-fluid" src={logo} alt="Logo" />
            </div>
            <div
              className={`header__nav col-md-10 ${
                isMenuOpen ? "open" : ""
              }`}
            >
              <div className="burger-menu" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <ul
                className={`nav justify-content-md-end ${
                  isMenuOpen ? "show" : ""
                }`}
              >
                <li className="nav-item">
                  <a className="nav-link" href="dd">
                    Главная
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ss">
                    Технология
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="gr">
                    График полетов
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ff">
                    Гарантии
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="aa">
                    О компании
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="cc">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <div className="about_us">
            <div className="journey">
              Начать путешествие

            </div>
            <div className="info">
              <section className="info_item">
                  <span className="title">мы</span>
                  <strong className="value">1</strong>
                  <span className="description">на рынке</span>
              </section>
              <section className="info_item">

                  <span className="title">гарантируем</span>
                  <strong className="value">50%</strong>
                  <span className="description">безопасность</span>

              </section>
              <section className="info_item">
                  <span className="title">календарик за</span>
                  <strong className="value">2001г</strong>
                  <span className="description">в подарок</span>
              </section>
              <section className="info_item">
                  <span className="title">путешествие</span>
                  <strong className="value">597</strong>
                  <span className="description">дней</span>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
