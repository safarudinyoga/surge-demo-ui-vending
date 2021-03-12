import React, { useRef, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { CarouselProvider, Slider, Slide, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import compro from 'src/assets/compro.mp4';
import { API_URL } from 'src/config/constants';
import Swal from 'sweetalert2';

import './_home.sass';

const Home = (props) => {

  // duwur 12
  // ndisor 24

  const refAtas = useRef(null);
  const refBawah = useRef(null);

  const [index, setIndex] = useState(null);

  const trigger = async (index) => {
    try {
      const res = await fetch(`${API_URL}/${index}`, { method: 'GET' });
      const data = await res.json();

      console.log(res);
      console.log(data);

      const { message } = data;

      if (message === 'OK') {
        Swal.fire({
          icon: 'success',
          title: 'Sukses',
          text: 'Silahkan ambil barang Anda.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }

  };

  useEffect(() => {

    trigger(index);
  }, [index]);


  const clickedAtas = () => {
    refAtas.current.instance.handleOnClick();
  };

  const clickedBawah = () => {
    refBawah.current.instance.handleOnClick();
  };

  const [isShow, setIsShow] = useState(true);

  const stopVideos = (element) => {
    const iframe = element.querySelector('iframe');
    const video = element.querySelector('video');
    if (iframe) {
      const iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
    if (video) {
      video.pause();
    }
  };

  const handleCloseOverlay = () => {
    stopVideos(document);
    setIsShow(false);
  };

  return (
    <div className="wrapper">
      <div
        className={isShow ? "overlay_ads overlay_ads_show" : "overlay_ads overlay_ads_hide"}
        onClick={handleCloseOverlay}
      >
        {isShow
        && (
          <iframe
            src={compro}
            className="video"
            allowFullScreen
            id="video"
            title="video_ads"
          />
        )}
      </div>
      <div className="containerui">
        <div className="wrapperiklan" />
        <div className="wrappercontent">
          <CarouselProvider
            visibleSlides={4}
            totalSlides={12}
            naturalSlideWidth={200}
            naturalSlideHeight={430}
            infinite
            isPlaying
            interval={800}
          >
            <div
              className="wrapperfourslot"
              onClick={clickedAtas}
            >
              <Slider className="slider">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((res, i) => (
                  <Slide
                    index={i}
                    key={i}
                    onClick={() => setIndex(res)}
                  >
                    <div
                      className="wrapperproduct"
                    >
                      <h1 className="center-align text">{res}</h1>
                    </div>
                  </Slide>
                ))}
              </Slider>
            </div>
            <ButtonPlay
              id="play"
              ref={refAtas}
              className="hidden"
            />
          </CarouselProvider>
          <CarouselProvider
            visibleSlides={4}
            totalSlides={24}
            naturalSlideWidth={200}
            naturalSlideHeight={430}
            infinite
            isPlaying
            interval={1000}
          >
            <div
              className="wrappereightslot"
              onClick={clickedBawah}
            >
              <Slider className="slider">
                {[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36].map((res, i) => (
                  <Slide
                    index={i}
                    key={i}
                    onClick={() => setIndex(res)}
                  >
                    <div
                      className="wrapperproduct"
                    >
                      <h1 className="center-align text">{res}</h1>
                    </div>
                  </Slide>
                ))}
              </Slider>
            </div>
            <ButtonPlay
              id="play"
              ref={refBawah}
              className="hidden"
            />
          </CarouselProvider>
        </div>
        <div className="wrapperiklanbottom" />
      </div>
    </div>
  );
};

Home.propTypes = {

};

export default Home;
