/* Import the Montserrat font */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Unlock&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ojuju:wght@200..800&display=swap');

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Urbanist", sans-serif;
  margin: 5px 0;
  text-align: center;
  font-size: 1.5rem;
  color: black;
}

.justify-content-center .custom-nav {
  display: flex;
  justify-content: center;
}

.custom-link .nav-link {
  font-family: "Urbanist", sans-serif;
  font-weight: 400;
  margin: 5px 0;
  font-size: 2rem;
  color: #0d4d8d;
  text-decoration: none;
  padding: 10px 15px;
}

p {
  font-family: "Urbanist", sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
  margin: 5px 0;
}

.contact-heading {
  margin-top: 30px;
}

h1 {
  font-family: "Pacifico", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
}

h2 {
  font-family: "Urbanist", sans-serif;
  font-style: normal;
  font-size: 1.8rem;
  font-weight: 300;
  margin: 5px 0;
}

h4 {
  margin-top: 50px;
  font-family: "Unlock", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 5rem;
}

h5 {
  font-family: "Unlock", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2.2rem;
  margin: 20px 0; /* Increased margin for more space */
  margin-top: 100px;
  position: relative;
}

h5::before,
h5::after {
  display: flex;
  flex-direction: column;
  content: "";
  position: absolute;
  top: 50%;
  width: 30%; /* Adjust line length */
  height: 1px; /* Adjust line thickness */
  background-color: #0d4d8d;
}

h5::before {
  left: 0;
}

h5::after {
  right: 0;
}

h6 {
  font-family: "Poiret One", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
  margin-top: 40px;
}

h3 {
  font-size: 1.2rem;
  margin: 5px 0;
}

.menu {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

#menu .img-fluid {
  width: 100%;
  height: auto;
}

.text-center {
  text-align: center;
}

.custom-nav .custom-link {
  font-family: "Urbanist", sans-serif;
  font-weight: 200;
  font-style: normal;
  margin-top: -10px;
  font-size: 1.5rem;
  color: #0d4d8d;
  text-decoration: none;
  padding: 10px 10px;
}

.custom-nav .custom-link:hover {
  color: #333;
  background-color: transparent;
}

.carousel-caption {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  padding: 60px; /* Adjust padding as needed */
  text-align: center;
}

.carousel-caption h3 {
  font-family: "Urbanist", sans-serif;
  font-weight: 600;
  font-size: 3rem;
  margin: -5px;
  margin-top: -10px;
  padding: 0;
}

/* Hide carousel control arrows */
.carousel-control-prev,
.carousel-control-next {
  display: none;
}

.carousel-caption p {
  font-family: "Urbanist", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-bottom: 1px;
}

@media (max-width: 576px) {
  .custom-nav .custom-link {
    font-size: 1.5rem;
    font-weight: 400;
  }

  .carousel-caption {
    font-size: 100%;
  }

  .carousel-caption h3 {
    font-size: 95%;
  }

  .carousel-caption p {
    font-size: 80%;
  }

  .carousel-caption {
    padding: 50px;
  }

  .carousel-caption h3 {
    margin-top: -5px;
  }

  .carousel-caption p {
    margin-top: -5px;
  }

  .carousel-indicators {
    margin-bottom: 5px;
  }
}
