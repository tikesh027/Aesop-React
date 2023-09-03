import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./SlickSlider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SlickSlider = () => {
  return (
    <div className="wrapper">
      <Swiper
        // install Swiper modules
        className="soap-product-swiper-container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1080: {
            slidesPerView: 3,
          }
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        navigation={{
          nextEl: '#body-next',
          prevEl: '#body-prev',
        }}
        // ref={(ref) => ref.slide}
        style={{width: 'calc(100% - 160px)', marginLeft: 'auto', marginRight: 'auto'}}
      >
        <SwiperSlide className="product-details-container">
          <div className="product-details-heading">
            <h3>For the body</h3>
            <h2>An expression of care</h2>
          </div>
          <div className="product-details-content">
            <div>
              Aesop formulations offer the body deserving care, to cleanse,
              replenish, and nourish skin. Each product is a sensory pleasure to
              use with its own delightful aroma.
            </div>
            <div className="body-care-arrow">
              <div>See all Body Care</div>
              <ArrowForwardIcon className="arrow" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/19Ww037s29aXMKzpBYsDx1/7637bd27642bd4e0345e77d23dbe99f1/Aesop_Body_Nurture_Bar_Soap_150g_Web_Front_Small_700x425px.png"
              alt=""
              className="images"
            />
            <div className="image-discription">
              <h4>Nurture Bar Soap</h4>
              <div>offers a mild yet effective cleanse</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/2gYLQ9uOz20lp9Br2EsOhC/31bbefce348d0d5a1530fb2eb781ccf3/Aesop_Body_Polish_Bar_Soap_150g_Web_Front_Small_700x425px.png"
              alt=""
              className="images"
            />
            <div className="image-discription">
              <h4>Nurture Bar Soap</h4>
              <div>offers a mild yet effective cleanse</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/6W45mQCSsbN1OZ9OBPRye0/b0ce9f7fcb1477bd00c6f750a20d14e0/Aesop_Body_Refresh_Bar_Soap_150g_Web_Front_Small_700x425px.png"
              alt=""
              className="images"
            />
            <div className="image-discription">
              <h4>Nurture Bar Soap</h4>
              <div>offers a mild yet effective cleanse</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div id="body-next" className="swiper-button-next"></div>
      <div id="body-prev" className="swiper-button-prev"></div>
    </div>
  );
};

export default SlickSlider;
