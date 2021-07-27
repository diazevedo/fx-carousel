import { h } from "preact";
import "../../style/card.css";
import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="bundles-wrapper">
      <Slider className="cards-list" {...settings}>
        <div className="card">
          <div className="header">
            <h3>Platinum Plus</h3>
            <p>
              $139 <span className="discount">$109</span>
              <span>/mth*</span>
            </p>
            <p>Min cost $1248*</p>

            <button className="button-active">Select bundle</button>
          </div>

          <section>
            <ul className="card-features-list">
              <li className="feature-list">
                50+ channels of entertainment drama, lifestyle, docos,, &
                reality
              </li>
              <li className="feature-list">
                Live TV and huge library of On Demand content to watch anytime
              </li>
              <li className="feature-list">
                The world's best drama series and Foxtel Originals
              </li>
              <li className="feature-list">
                Watch on your TV, PC, Mac, laptop, mobile, & tablet
              </li>
              <li className="feature-list link">
                <a href="#">About Premium</a>
              </li>
            </ul>
          </section>
        </div>

        <div className="card">
          <div className="header">
            <h3>Platinum Plus as a as</h3>
            <p>
              $139 <span className="discount">$109</span>
              <span>/mth*</span>
            </p>
            <p>Min cost $1248*</p>

            <button className="button-active">Select bundle</button>
          </div>

          <section>
            <ul className="card-features-list">
              <li className="feature-list">
                50+ channels of entertainment drama, lifestyle, docos,, &
                reality
              </li>
              <li className="feature-list">
                Live TV and huge library of On Demand content to watch anytime
              </li>
              <li className="feature-list">
                The world's best drama series and Foxtel Originals
              </li>
              <li className="feature-list">
                Watch on your TV, PC, Mac, laptop, mobile, & tablet
              </li>
              <li className="feature-list link">
                <a href="#">About Premium</a>
              </li>
            </ul>
          </section>
        </div>

        <div className="card">
          <div className="header">
            <h3>Platinum Plus as a as</h3>
            <p>
              $139 <span className="discount">$109</span>
              <span>/mth*</span>
            </p>
            <p>Min cost $1248*</p>

            <button className="button-active">Select bundle</button>
          </div>

          <section>
            <ul className="card-features-list">
              <li className="feature-list">
                50+ channels of entertainment drama, lifestyle, docos,, &
                reality
              </li>
              <li className="feature-list">
                Live TV and huge library of On Demand content to watch anytime
              </li>
              <li className="feature-list">
                The world's best drama series and Foxtel Originals
              </li>
              <li className="feature-list">
                Watch on your TV, PC, Mac, laptop, mobile, & tablet
              </li>
              <li className="feature-list link">
                <a href="#">About Premium</a>
              </li>
            </ul>
          </section>
        </div>

        <div className="card">
          <div className="header">
            <h3>Platinum Plus as a as</h3>
            <p>
              $139 <span className="discount">$109</span>
              <span>/mth*</span>
            </p>
            <p>Min cost $1248*</p>

            <button className="button-active">Select bundle</button>
          </div>

          <section>
            <ul className="card-features-list">
              <li className="feature-list">
                50+ channels of entertainment drama, lifestyle, docos,, &
                reality
              </li>
              <li className="feature-list">
                Live TV and huge library of On Demand content to watch anytime
              </li>
              <li className="feature-list">
                The world's best drama series and Foxtel Originals
              </li>
              <li className="feature-list">
                Watch on your TV, PC, Mac, laptop, mobile, & tablet
              </li>
              <li className="feature-list link">
                <a href="#">About Premium</a>
              </li>
            </ul>
          </section>
        </div>
      </Slider>
    </div>
  );
};

export default Card;
