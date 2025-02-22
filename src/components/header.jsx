import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { closeOutline, searchOutline, cartOutline, arrowForwardOutline, menuOutline } from "ionicons/icons";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header" data-header>
      <div className="container">
      <a href="#" className="logo navbar-brand">
          <img src="./assets/mortarboard-fill.svg" width="70" height="40"/>College Portal
        </a>

        <nav className={`navbar ${isNavOpen ? "open" : ""}`} data-navbar>
          <div className="wrapper">
          
       
          </div>
          <ul className="navbar-list">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#courses", label: "Courses" },
              { href:'#type' , label :"Categories"},
              { href:'https://chat-bot-th5j.onrender.com' , label :"Customer Service"},

            ].map((item, index) => (
              <li className="navbar-item" key={index}>
                <a href={item.href} className="navbar-link" data-nav-link>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="header-action-btn" aria-label="toggle search" title="Search">
            <IonIcon icon={searchOutline} aria-hidden="true" />
          </button>
          <button className="header-action-btn" aria-label="cart" title="Cart">
            <IonIcon icon={cartOutline} aria-hidden="true" />
            <span className="btn-badge">0</span>
          </button>
        
        
        </div>

        {isNavOpen && <div className="overlay" onClick={toggleNav}></div>}
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section
      className="section hero has-bg-image"
      id="home"
      aria-label="home"
>
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 section-title">
            The Best Program to <span className="span">Enroll</span> for Exchange
          </h1>
          <p className="hero-text">Learn, grow, and succeed—because skills shape your future
          </p>
       
        </div>
        <figure className="hero-banner">
          <div className="img-holder one" style={{ "--width": 270, "--height": 300 }}>
            <img src="./assets/hero-banner-1.jpg" width="270" height="300" alt="hero banner" className="img-cover" />
          </div>
          <div className="img-holder two" style={{ "--width": 240, "--height": 370 }}>
            <img src="./assets/hero-banner-2.jpg" width="240" height="370" alt="hero banner" className="img-cover" />
          </div>
        </figure>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <main>
        <article>
          <Hero />
        </article>
      </main>
    </>
  );
};

export default App;
