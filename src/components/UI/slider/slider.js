import React from 'react';
import SlickSlider from 'react-slick';
import PropTypes from 'prop-types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';

const Slider = ({ children }) => {

  let settings = {
    autoplay: false,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: 'linear',
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  return(
    <div className={`sliderWrap`}>
      <SlickSlider {...settings}>
        {children}
      </SlickSlider>
    </div>
  )
};


Slider.propTypes = {
  children: PropTypes.node.isRequired
}

export default Slider