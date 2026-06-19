import "./App.css";
import { useEffect } from "react";

import heroImg from "./assets/images/hero.jpg";
import cakeImg from "./assets/images/cake.jpg";
import blackForestImg from "./assets/images/blackforest.jpg";
import muffinImg from "./assets/images/muffin.jpg";
import breadImg from "./assets/images/bread.jpg";
import cookiesImg from "./assets/images/cookies.jpg";
import brownieImg from "./assets/images/brownie.jpg";
import cupcakeImg from "./assets/images/cupcake.jpg";

function App() {

  // ⭐ Active navbar scroll tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    const onScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>GVRK Bliss Bakery</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#testimonials">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="hero"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImg})`
        }}
      >
        <h1>GVRK Bliss Bakery</h1>
        <p>Freshly Baked Happiness Every Day</p>

        <button
          onClick={() =>
            window.open("https://wa.me/919876543210", "_blank")
          }
        >
          Order Now
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          GVRK Bliss Bakery is a local bakery offering fresh cakes, pastries,
          cookies, and breads made with love and premium ingredients.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <h2>Our Specialties</h2>

        <div className="service-container">
          <div className="card">🎂 Cakes</div>
          <div className="card">🧁 Muffins</div>
          <div className="card">🍪 Cookies</div>
          <div className="card">🍞 Bread</div>
          <div className="card">🥐 Pastries</div>
          <div className="card">🎉 Custom Orders</div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="menu">
        <h2>Featured Menu</h2>

        <div className="menu-container">

          <div className="menu-card">
            <img src={cakeImg} alt="Chocolate Cake" />
            <h3>Chocolate Cake</h3>
            <p>Rich chocolate layered cake</p>
            <p>₹499</p>
          </div>

          <div className="menu-card">
            <img src={blackForestImg} alt="Black Forest Cake" />
            <h3>Black Forest Cake</h3>
            <p>Chocolate with cherry layers</p>
            <p>₹549</p>
          </div>

          <div className="menu-card">
            <img src={muffinImg} alt="Muffin" />
            <h3>Blueberry Muffin</h3>
            <p>Soft fruity muffin</p>
            <p>₹80</p>
          </div>

          <div className="menu-card">
            <img src={breadImg} alt="Bread" />
            <h3>Fresh Bread</h3>
            <p>Daily baked soft bread</p>
            <p>₹50</p>
          </div>

          <div className="menu-card">
            <img src={cookiesImg} alt="Cookies" />
            <h3>Butter Cookies</h3>
            <p>Crispy homemade cookies</p>
            <p>₹199</p>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="gallery">
        <h2>Our Gallery</h2>

        <div className="gallery-container">
          <img src={cakeImg} alt="Cake" />
          <img src={muffinImg} alt="Muffin" />
          <img src={cookiesImg} alt="Cookies" />
          <img src={breadImg} alt="Bread" />
          <img src={brownieImg} alt="Brownie" />
          <img src={cupcakeImg} alt="Cupcake" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="testimonials">
        <h2>What Customers Say</h2>

        <div className="testimonial-container">
          <div className="testimonial">"Amazing taste!" - Priya</div>
          <div className="testimonial">"Very fresh bakery." - Rahul</div>
          <div className="testimonial">"Best cakes ever." - Anjali</div>
          <div className="testimonial">"Great service!" - Suraj</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>📍 Andhra Pradesh</p>
        <p>📞 +91 98765 43210</p>
        <p>📧 info@gvrkblissbakery.com</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 GVRK Bliss Bakery</p>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        💬 Order Now
      </a>

    </div>
  );
}

export default App;