import React from 'react'
import './Banner.css'
import UnderDevelopmentPage from '../../UnderDevelopmentPage/UnderDevelopmentPage'
const Banner = () => {
  return (
    <div>
        <div className="first-banner-container">
        <p className="first-banner">
          Trained Aesop consultations are available to provide bespoke skin care
          advise.
          <a href={<UnderDevelopmentPage />}>Book a video consultation</a>
        </p>
      </div>
      <div className="second-banner-container">
        <p className="second-banner">
          Click and Collect is now available at Hong Kong stores. Enjoy
          complimentary shipping on orders over HK$400
        </p>
      </div>
    </div>
  )
}

export default Banner