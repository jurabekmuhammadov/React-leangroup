import React, { Component } from "react";
import Slider from "react-slick";
import style from "./Certificate.module.scss";
import "./Certificate-carousel.scss";
import img1 from "../../assets/images/sertificate-1.png";
import img2 from "../../assets/images/sertificate-2.png";
import img3 from "../../assets/images/sertificate-3.png";
import img4 from "../../assets/images/sertificate-4.png";
import img5 from "../../assets/images/sertificate-5.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      id="next"
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
      id="prev"
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
          },
        },
        {
          breakpoint: 570,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <section id={style.certificate} className="Certificate">
        <div className={`${style.certificate__container} container`}>
          <h1>
            Качество продукции подтверждают <span>сертификаты</span>
          </h1>
          <div className={style.carousel}>
            <Slider {...settings}>
              <div className={style.item}>
                <img src={img1} alt="" />
              </div>
              <div className={style.item}>
                <img src={img2} alt="" />
              </div>
              <div className={style.item}>
                <img src={img3} alt="" />
              </div>
              <div className={style.item}>
                <img src={img4} alt="" />
              </div>
              <div className={style.item}>
                <img src={img5} alt="" />
              </div>
              <div className={style.item}>
                <img src={img1} alt="" />
              </div>
              <div className={style.item}>
                <img src={img2} alt="" />
              </div>
              <div className={style.item}>
                <img src={img3} alt="" />
              </div>
              <div className={style.item}>
                <img src={img4} alt="" />
              </div>
              <div className={style.item}>
                <img src={img5} alt="" />
              </div>
              <div className={style.item}>
                <img src={img1} alt="" />
              </div>
              <div className={style.item}>
                <img src={img2} alt="" />
              </div>
              <div className={style.item}>
                <img src={img3} alt="" />
              </div>
              <div className={style.item}>
                <img src={img4} alt="" />
              </div>
              <div className={style.item}>
                <img src={img5} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
