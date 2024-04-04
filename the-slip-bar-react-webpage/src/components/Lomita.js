import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Nav } from "react-bootstrap";
import lomitaCarouselImages from "../data/lomitaCarouselImages";
import lomitaMenu1 from "../menus/lomitamenupage2.jpg";
import lomitaMenu2 from "../menus/lomitamenupage1.jpg"; // Corrected file extension
import lomitaMap from "../maps/lomitamap.png"; // Corrected file path
import Navbar from "react-bootstrap/Navbar";
import "../styles/Lomita.css";
import ScrollToTopButton from "./ScrollToTopButton";

const Lomita = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.tockify.com/browser/embed.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-tockify-script", "embed");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="Lomita">
      <h4>Lomita</h4>

      
        <Navbar
          bg="light"
          expand="lg"
          variant="light"
          style={{ display: "flex", justifyContent: "center", marginBottom: "0", marginTop: "0", paddingBottom: "0" }}>
          <Container>
            <Nav
          className="me-auto"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            margin: "0 auto",
            marginBottom: 0,

          }}
            >
          <Nav.Link
            href="#contact"
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              fontSize: "1.5rem",
              color: "#0d4d8d",
              textDecoration: "none",
              margin: "0 10px", // Add margin to create space between links
            }}
          >
            Contact
          </Nav.Link>
          <Nav.Link
            href="#menu"
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              fontSize: "1.5rem",
              color: "#0d4d8d",
              textDecoration: "none",
              margin: "0 10px", // Add margin to create space between links
            }}
          >
            Menu
          </Nav.Link>
          <Nav.Link
            href="#events"
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              fontSize: "1.5rem",
              color: "#0d4d8d",
              textDecoration: "none",
              margin: "0 10px", // Add margin to create space between links
            }}
          >
            Events
          </Nav.Link>
            </Nav>
          </Container>
      </Navbar>
      
      {/* <div style={{ borderBottom: "2px solid #0d4d8d", marginTop: "0", marginBottom: "20px", padding: "0" }}></div> */}


      <div className="af-height-90 af-max-width mx-auto mt-1 position-relative">
        <Carousel
          activeIndex={currentIndex}
          onSelect={(index) => setCurrentIndex(index)}
          interval={3000} // Set interval to 2 seconds for faster scrolling
        >
          {lomitaCarouselImages.map((slide, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={slide.link}
                alt={slide.title}
              />
              <div className="carousel-caption position-absolute">
                <div className="af-position-lg af-bg-dark-transparent py-5">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <Container id="contact">
        <h5 className="contact-heading">Contact</h5>
        <Row>
          <Col md={4}>
            <h2>Hours of Operation</h2>
            <p> Opens 4PM Monday-Wednesday</p>
            <p> Opens Noon Friday-Saturday </p>
            <p> Opens 10AM on Sundays</p>
          </Col>
          <Col md={4}>
            <h2>Address</h2>
            <p>24503 Narbonne Ave, Lomita, CA 90717</p>
            <a
              href="https://www.google.com/maps/dir//24503+Narbonne+Ave.+Lomita,+CA+90717"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </Col>
          <Col md={4}>
            <h2>Contact Information</h2>
            <p>
              Phone: <a href="tel:+14243766947">(424) 376-6947</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:info@theslipbar.com">info@theslipbar.com</a>
            </p>
          </Col>
        </Row>

        <Col md={12}>
          <h2>Parking</h2>
          <p>Parking is available in the lot across the bar.</p>
          {lomitaMap && (
            <img
              src={lomitaMap}
              alt="Lomita Map"
              className="img-fluid"
              style={{ maxWidth: "100%", border: "1px #0d4d8d solid" }}
              onError={(e) => console.error("Error loading map image:", e)}
            />
          )}
        </Col>
      </Container>

      <Container id="menu">
        <h5>Menu</h5>

        <Row>
          <Col md={12}>
            {lomitaMenu1 && (
              <img
                src={lomitaMenu1}
                alt="Menu Page 1"
                className="img-fluid"
                style={{ maxWidth: "100%" }}
                onError={(e) => console.error("Error loading menu image 1:", e)}
              />
            )}
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {lomitaMenu2 && (
              <img
                src={lomitaMenu2}
                alt="Menu Page 2"
                className="img-fluid"
                style={{ maxWidth: "100%" }}
                onError={(e) => console.error("Error loading menu image 2:", e)}
              />
            )}
          </Col>
        </Row>
      </Container>

      <Container id="events">
        <h5>Events</h5>

        <div
          data-tockify-component="calendar"
          data-tockify-calendar="theslipbar"
        ></div>
      </Container>

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Lomita;
