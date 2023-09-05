import React, { Component } from "react";
import Slider from "react-slick";
import social from "../../assets/images/social.svg";

import style from "./Hero.module.scss";
import "./Hero-carousel.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      id="hero-next-arrow"
      style={{ ...style }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      id="hero-prev-arrow"
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            arrows: false,
          },
        },
      ],
    };
    return (
      <section id={style.Hero} className="Hero">
        <Slider {...settings}>
          <section id={style.hero1} className={style.hero}>
            <div className={style.heroBlock}>
              <div className={`${style.hero__container} container`}>
                <div className={style.content}>
                  <h4>LEANGROUP - тубы и этикетки</h4>
                  <h1>Ламинатные тубы</h1>
                  <p>
                    Используются для производства зубных паст. Широко
                    применяются в сегменте косметики, пищевой индустрии,
                    парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
                  </p>
                  <button>Каталог</button>
                </div>
              </div>
              <div className={style.social}>
                <img src={social} alt="social" />
              </div>
            </div>
          </section>
          <section id={style.hero2} className={style.hero}>
            <div className={style.heroBlock}>
              <div className={`${style.hero__container} container`}>
                <div className={style.content}>
                  <h4>LEANGROUP - тубы и этикетки</h4>
                  <h1>Другая упаковка </h1>
                  <p>
                    Широко используется в сегменте косметики, пищевой
                    промышленности, парафармацевтики, бытовой химии и DIY
                    (Do-it-Yourself).
                  </p>
                  <button>Каталог</button>
                </div>
              </div>
              <div className={style.social}>
                <img src={social} alt="social" />
              </div>
            </div>
          </section>
          <section id={style.hero3} className={style.hero}>
            <div className={style.heroBlock}>
              <div className={`${style.hero__container} container`}>
                <div className={style.content}>
                  <h4>LEANGROUP - тубы и этикетки</h4>
                  <h1>Экструзионные тубы </h1>
                  <p>
                    Экструзионные тубы используются для упаковки и продвижения
                    более дорогих продуктов, в основном в косметической
                    промышленности.
                  </p>
                  <button>Каталог</button>
                </div>
              </div>
              <div className={style.social}>
                <img src={social} alt="social" />
              </div>
            </div>
          </section>
        </Slider>
      </section>
    );
  }
}
