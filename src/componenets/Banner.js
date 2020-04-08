import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Banner extends React.Component {
	render() {
		const settings = {
			dots: false,
			infinite: false,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			centerMode: true,
			centerPadding: '20px'
		}

    return (
    	<div className="banner-set">
	    	<h3 className="title">이달의 #추천여행지</h3>
	      <Slider {...settings} className="banner">
	        <div className="slick-item">
	          <h3>1</h3>
	        </div>
	        <div className="slick-item">
	          <h3>2</h3>
	        </div>
	        <div className="slick-item">
	          <h3>3</h3>
	        </div>
	        <div className="slick-item">
	          <h3>4</h3>
	        </div>
	        <div className="slick-item">
	          <h3>5</h3>
	        </div>
	        <div className="slick-item">
	          <h3>6</h3>
	        </div>
	      </Slider>
      </div>
    );
	}
}

export default Banner;
