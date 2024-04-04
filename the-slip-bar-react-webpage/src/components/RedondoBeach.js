import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Nav } from "react-bootstrap";
import redondoBeachCarouselImages from "../data/redondoBeachCarouselImages";
import redondoBeachMenu1 from "../menus/redondomenupage2.jpg";
import redondoBeachMenu2 from "../menus/redondomenupage1.jpg";
import redondoMap from "../maps/redondoparking.png";
import Navbar from "react-bootstrap/Navbar";
import "../styles/RedondoBeach.css";
import ScrollToTopButton from "./ScrollToTopButton"; // Import the ScrollToTopButton component

const RedondoBeach = () => {
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
    <div className="Redondo-Beach">
      <h4>Redondo Beach</h4>

      
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
          {redondoBeachCarouselImages.map((slide, index) => (
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
            <p>Opens Noon Monday-Saturday</p>
            <p>Opens 10AM Sunday</p>
          </Col>
          <Col md={4}>
            <h2>Address</h2>
            <p>120 N International Boardwalk, Redondo Beach, CA 90277</p>
            <a
              href="https://www.google.com/maps/dir//120+N+International+Boardwalk+Redondo+Beach,+CA+90277"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </Col>
          <Col md={4}>
            <h2>Contact Information</h2>
            <p>Phone: <a href="tel:+13109218940">(310) 921-8940</a></p>
            <p>
              Email:{" "}
              <a href="mailto:info@theslipbar.com">info@theslipbar.com</a>
            </p>
          </Col>
        </Row>
  
        <Col md={12}>
        <h2>Parking</h2>
          <p>
            Parking is available in the Redondo Beach Marina parking lot. First 2 hours are free.
            </p>
          {redondoMap && (
            <img
              src={redondoMap}
              alt="Redondo Beach Parking Map"
              className="img-fluid"
              style={{ maxWidth: "100%", border: "1px #0d4d8d solid"}}
              onError={(e) => console.error("Error loading map image:", e)}
            />
          )}
        </Col>
      </Container>

      <Container id="menu">
        <h5>Menu</h5>
        <Row>
          <Col md={12}>
            {redondoBeachMenu1 && (
              <img
                src={redondoBeachMenu1}
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
            {redondoBeachMenu2 && (
              <img
                src={redondoBeachMenu2}
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

export default RedondoBeach;
