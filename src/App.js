import React from 'react';
// import { StickyContainer, Sticky } from 'react-sticky';
import StickyMenu from './componenets/StickyMenu';

import Banner from "./componenets/Banner";


import './App.scss';

class App extends React.Component {

  render() {
    return (
      <div>
        <Banner />
        <StickyMenu />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
      </div>
    );
  }
}

export default App;
