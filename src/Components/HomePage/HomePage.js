import React from "react";
import NavBar from "../NavBar/NavBar";
import "./HomePage.css";
import Banner from "../Banner/Banner";
import UnderDevelopmentPage from "../../UnderDevelopmentPage/UnderDevelopmentPage";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SliderSkin from "../Sliders/Slider-for-skin/SliderSkin";
import SlickSlider from "../Sliders/Slick-Slider-for-body/SlickSlider";
import SliderHome from "../Sliders/Slider-for-Home/SliderHome";
import CarouselSlider from "../Carousel/CarouselSlider";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div>
        <div className="img-container">
          <div className="nav-container">
            <NavBar />
          </div>
          <div className="label-content">
            <div>
              <a
                className="deatils-about-company"
                href={<UnderDevelopmentPage />}
              >
                Aesop
              </a>
            </div>
            <div className="about-image-content">
              <p className="first-content">Bar Soaps</p>
              <p className="second-content">A body care classic, reimagined</p>
              <p className="third-content">
                Breathing new life into the humble bar soap are Nurture, Polish
                and Refresh—three additions to the range, each imparting a
                unique constellation of benefits.
              </p>
              <Button className="discover-soap-button" variant="outlined">
                Discover Bar Soap
                <ArrowForwardIcon />
              </Button>
            </div>
          </div>
          <img
            className="home-page-image-content"
            src="https://www.aesop.com/u1nb1km7t5q7/1dvhD6dW4gz1ReQeX6AOOu/0cff9578b20343e987e87db82652fa20/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_XL_5120x1856px.jpg"
            alt="Aesop-collections"
          />
        </div>
        <div className="media-query-content">
        </div>
      </div>
      <div>
        <SlickSlider />
      </div>
      <div className="warm-up-container">
        <div className="warm-up-content-container">
          <h4>The Athenaeum</h4>
          <h2>The Warm-Up</h2>
          <p>
            In The Athenaeum, our digital reading room: a guide to ensuring a
            healthy complexion through the warmer months.
          </p>
          <div>
            <Button className="readmore-button" variant="outlined">
              Read more
              <ArrowForwardIcon />
            </Button>
          </div>
        </div>
        <div>
          <img
            className="warm-up-image"
            src="https://www.aesop.com/u1nb1km7t5q7/3GSzEbfK3uJnoXUkae2D9G/37d1916a82b754c70870cab8f85f34b0/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <SliderSkin />
      </div>
      <div>
        <div className="post-poo-container">
          <div>
            <img
              className="post-poo-image"
              src="https://www.aesop.com/u1nb1km7t5q7/2kTc0kZ961s3KYZGjXIfYH/e9ca7e871e57b090c22c761debbe75ec/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_XL_2560x1540px.png"
              alt=""
            />
          </div>
          <div className="post-poo-content-container">
            <h1>Post-Poo Drops has returned</h1>
            <p>
              Here to make the malodorous melodious once again. Dispense this
              favoured formulation into the toilet bowl after flushing to
              effectively mask disagreeable odours.
            </p>
            <div>
              <Button className="discover-button" variant="outlined">
                Discover Post-Poo Drops
                <ArrowForwardIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SliderHome />
      </div>
      <div className="store-locator">
        <div className="store-content-container">
          <h1>Store Locator</h1>
          <p>
            Our consultants are available to host you in-store and provide
            tailored guidance on gift purchases.
          </p>
          <div>
            <Button className="store-button" variant="outlined">
              Find a nearby Store
              <ArrowForwardIcon />
            </Button>
          </div>
        </div>
        <div className="carouselContainer">
          <CarouselSlider />
        </div>
      </div>
      <div className="quote-container">
        <div className="quote">
          ‘Life never becomes a habit to me. It's always a marvel.’
        </div>
        <div className="author-name">Katherine Mansfield</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
