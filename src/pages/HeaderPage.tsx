import journey from "../assets/Путешествие на красную планету.png";
import AboutUs from "./HeaderDetails/AboutUs";
import "./headerPage.css";

import NavBar from "./HeaderDetails/NavBar";
const HeaderPage = () => {
  return (
    <>
      <div className="header">
        <img className="journey__img" src={journey} alt="Путешествие на красную планету"/>
        <div className="container">
          <NavBar/>
          <AboutUs/>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
