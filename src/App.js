import React from 'react';
import Banner from "./componenets/Banner";
import Navigation from "./componenets/Navigation";


class App extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Navigation />
        <Banner {...settings} />
      </div>
    );
  }
}

export default App;
