import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./SliderHome.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SliderHome = () => {
  return (
    <div className="wrapper">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="home-container"
        navigation={{
          nextEl: '#home-next',
          prevEl: '#home-prev',
        }}
        style={{width: 'calc(100% - 160px)', marginLeft: 'auto', marginRight: 'auto'}}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1080: {
            slidesPerView: 4,
          }
        }}
      >
        <SwiperSlide className="about-home-container">
          <div className="content-of-home">
            <h4>For the Home</h4>
            <h2>Domestic Pleasures</h2>
            <div className="home-details">
              <p>
                Our range of aromatic formulations for the home are practical
                and pleasing in equal measure.
              </p>
              <div className="home-arrow">
                <div>See all Home</div>
                <ArrowForwardIcon className="arrow" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/wKO0ryRSiXAAewkrMPbfE/c0463fb70e0fa7c9b060ed7508044dd5/Aesop_Home_Post-Poo_Drops_100mL_Web_Medium_611x622px.png"
            alt=""
            className="product-image-serum"
          />
          <div className="product-name-discription">
            <div>Post-Poo Drops</div>
            <div>A botanical bathroom deodoriser</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/4A6vzBFbfH8Gn2pGdAKvSj/d7e7119a352d9381720f698b65307224/Aesop_Home_Aganice_Aromatique_Candle_Web_Medium_862x752px.png"
            alt=""
            className="product-image"
          />
          <div className="product-name-discription">
            <div>Aganice Aromatique Candle</div>
            <div>Cardamom, Mimosa, Tobacco</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/4A6vzBFbfH8Gn2pGdAKvSj/d7e7119a352d9381720f698b65307224/Aesop_Home_Aganice_Aromatique_Candle_Web_Medium_862x752px.png"
            alt=""
            className="product-image"
          />
          <div className="product-name-discription">
            <div>Ptolemy Aromatique Candle</div>
            <div>A sensuous blend of leather, smoke and wood</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/4A6vzBFbfH8Gn2pGdAKvSj/d7e7119a352d9381720f698b65307224/Aesop_Home_Aganice_Aromatique_Candle_Web_Medium_862x752px.png"
            alt=""
            className="product-image"
          />
          <div className="product-name-discription">
            <div>Callippus Aromatique Candle</div>
            <div>A marriage od deep greens and earthy spices</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/5ELT6e15yRgXnlNdSEeJ7M/155052d4171cd5db45a8cdb1f9d2a512/Aesop_Home_Bronze_Incense_Holder_Web_Medium_899x376px.png"
            alt=""
            className="product-image-holder"
          />
          <div className="product-name-discription">
            <div>Bronze Incense Holder</div>
            <div>Suited to any interior</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/6ZWdd6jy3H6C0N12FMBoWl/cb5902e68e3e138327cb94580f35f694/Aesop_Home_Murasaki_Aromatique_Incense_Web_Small_863x754px.png"
            alt=""
            className="product-image-serum"
          />
          <div className="product-name-discription">
            <div>Murasaki Aromatique Incense</div>
            <div>For those who favour aromas of warm spice</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/6ZWdd6jy3H6C0N12FMBoWl/cb5902e68e3e138327cb94580f35f694/Aesop_Home_Murasaki_Aromatique_Incense_Web_Small_863x754px.png"
            alt=""
            className="product-image-serum"
          />
          <div className="product-name-discription">
            <div>Kagerou Aromatique Incense</div>
            <div>For those particularly partial to vativer</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/6ZWdd6jy3H6C0N12FMBoWl/cb5902e68e3e138327cb94580f35f694/Aesop_Home_Murasaki_Aromatique_Incense_Web_Small_863x754px.png"
            alt=""
            className="product-image-serum"
          />
          <div className="product-name-discription">
            <div>Sarashina Aromatique Incense</div>
            <div>For those particularly partial to sandalwood</div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div id="home-next" className="swiper-button-next"></div>
      <div id="home-prev" className="swiper-button-prev"></div>
    </div>
  );
};

export default SliderHome;
