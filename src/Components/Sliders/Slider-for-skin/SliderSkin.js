import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./SliderSkin.css";
import "./SliderSkin.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SliderSkin = () => {
  return (
    <div className="wrapper">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="skin-care-container"
        navigation={{
          nextEl: '#skin-next',
          prevEl: '#skin-prev',
        }}
        style={{ width: 'calc(100% - 160px)', marginLeft: 'auto', marginRight: 'auto' }}
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
        <SwiperSlide className="about-skin-care-container">
          <h4>For the Skin</h4>
          <h2>Attention for all types</h2>
          <div className="skin-care-details">
            <p>
              The well-being of your skin is the product of hydration,
              nourishment, and protection through discerning rituals. Explore
              requisite skin care for all skin types.
            </p>
            <div className="skin-care-arrow">
              <div>See all Skin Care</div>
              <ArrowForwardIcon className="arrow" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png"
            alt=""
            className="product-image-serum"
          />
          <div className="product-name-discription">
            <div>Lucent Facial Concentrate</div>
            <div>A Vitamin C-rich Layering Serum</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/3hbEDQfTSFg3CMuB1lthQ0/4abe4f2870f1b2869f3f191c219ec534/Aesop_Skin_Purifying_Facial_Cream_Cleanser_100mL_Web_Medium_659x782px.png"
            alt=""
            className="product-image-serum"
          />
          <div className="product-name-discription">
            <div>Lucent Facial Concentrate</div>
            <div>A Vitamin C-rich Layering Serum</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/3bzrMPype61GB4NTtuE3UN/045b424903d4995b565a6d285c48ee82/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-medium.png"
            alt=""
            className="product-image-cream"
          />
          <div className="product-name-discription">
            <div>Lucent Facial Concentrate</div>
            <div>A Vitamin C-rich Layering Serum</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/5jLzsE1UCFsv9z0SP5rakv/963e8c4133ee9b6a3168556d24e6297f/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Medium_704x374px.png"
            alt=""
            className="product-image-cream"
          />
          <div className="product-name-discription">
            <div>Lucent Facial Concentrate</div>
            <div>A Vitamin C-rich Layering Serum</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/M1M4UMetzOHyXrK1Ybehh/244d1a051dacf1e5db6c026186602857/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Medium_704x374px.png"
            alt=""
            className="product-image-cream"
          />
          <div className="product-name-discription">
            <div>Lucent Facial Concentrate</div>
            <div>A Vitamin C-rich Layering Serum</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/3mwcdu7GJc7JGExU372ctl/d88e4f268f45f28c7fcd5e32cd45d61d/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-medium.png"
            alt=""
            className="product-image-cream"
          />
          <div className="product-name-discription">
            <div>Lucent Facial Concentrate</div>
            <div>A Vitamin C-rich Layering Serum</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/7BTURTX4DGagAv3Je29ZDN/264e88881f07be1cc257a5430d7a3e8d/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Intense_Serum_60mL_Web_Medium_535x522px.png"
            alt=""
            className="product-image-serum"
          />
          <div className="product-name-discription">
            <div>Lucent Facial Concentrate</div>
            <div>A Vitamin C-rich Layering Serum</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/1J8SySRI80kNELXpscAPFT/da836678b9807dd381890c118a8e68a2/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-medium.png"
            alt=""
            className="product-image-serum"
          />
          <div className="product-name-discription">
            <div>Lucent Facial Concentrate</div>
            <div>A Vitamin C-rich Layering Serum</div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div id="skin-next" className="swiper-button-next"></div>
      <div id="skin-prev" className="swiper-button-prev"></div>
    </div>
  );
};

export default SliderSkin;
