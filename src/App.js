import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import Banner from "./componenets/Banner";
import Navigation from "./componenets/Navigation";

import './App.scss';

class App extends React.Component {

  render() {
    return (
      <StickyContainer>
        {
          <div className="App">
            <Banner />
            <Banner />
          </div>
        }
        <Sticky topOffset={80}>
          {({
            style,
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => (
            <header style={style}>
              {<Navigation />}
            </header>
          )}
        </Sticky>
        {    <div className="App">
            <Banner />
            <Banner />
          </div>  }
      </StickyContainer>
    );
  }
}

export default App;
