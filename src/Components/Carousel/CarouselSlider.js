import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import './Carosole.css'

const CarouselSlider = () => {
  const data = [
    {
      image: "https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg",
      caption: "Aesop Fashion Walk"
    },
    {
      image: "https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg",
      caption: "Aesop MOKO"
    },
    {
      image: "https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg",
      caption: "Aesop ifc mall"
    },
  ];
  const captionStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div>
      <div className="App">
      <div style={{ textAlign: "center" }}>

        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
          className="carosole-subtitle"
            data={data}
            width="100%"
            height="100%"
            captionStyle={captionStyle}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default CarouselSlider