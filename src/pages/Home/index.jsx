import React from 'react';
// import PropTypes from 'prop-types';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './_home.sass';

const Home = (props) => {

  // duwur 12
  // ndisor 24

  return (
    <div className="containerui">
      <div className="wrapperiklan" />
      <div className="wrappercontent">
        <CarouselProvider
          visibleSlides={4}
          totalSlides={12}
          naturalSlideWidth={200}
          naturalSlideHeight={430}
          infinite
          // isPlaying
          interval={1000}
        >
          <div className="wrapperfourslot">
            <Slider className="slider">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((res, i) => (
                <Slide
                  index={i}
                  key={i}
                >
                  <div
                    className="wrapperproduct"
                  />
                </Slide>
              ))}
            </Slider>
          </div>
        </CarouselProvider>
        <div className="wrappereightslot">
          {[1, 2, 3, 4].map((res) => (
            <div
              className="wrapperproduct"
              key={res}
            />
          ))}
        </div>
      </div>
      <div className="wrapperiklanbottom" />
    </div>
  );
};

Home.propTypes = {

};

export default Home;
