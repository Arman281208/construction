import React from 'react';
import "./offerCard.css";
import "./media5.css";
import Buttons from '../buttons/buttons';
import { Col, UncontrolledCarousel } from "reactstrap";
import { useTranslation } from 'react-i18next';

function OfferCard(props) {
  const { t } = useTranslation("global");

  const carouselItems = [
    {
      src: './assets/img/Frame 77.png',
      altText: 'Slide 1',
      caption: '',
      key: '1'
    },
    {
      src: './assets/img/Frame 77 (1).png',
      altText: 'Slide 2',
      caption: '',
      key: '2'
    },
    {
      src: './assets/img/Frame 77 (2).png',
      altText: 'Slide 3',
      caption: '',
      key: '3'
    }
  ];

  return (
    <Col lg={4}>
      <div className={props.allClass}>
        <div className="style-offerCard">
          <div className="img-text">
            <div className="cardImage">
              <UncontrolledCarousel items={carouselItems} />
            </div>
            <div className="text-offerCard">
              <h5>
                {props.code}
                <span></span>
              </h5>
            </div>
          </div>
          <div className="offerCard-content">
            <div className="threeButton">
              <button className="btn-1">{props.btn1}</button>
              <button className="btn-2">{props.btn2}</button>
              <button className="btn-3">{props.btn3}</button>
            </div>
            <h3>{props.price}</h3>
            <h4>{props.title}</h4>
            <div className="information">
              <div className="inf1">
                <img src={props.img} alt="" />
                <p>{t("Total Area 61 m²")}</p>
              </div>
              <div className="inf2">
                <img src={props.img2} alt="" />
                <p>{t("Floor 6")}</p>
              </div>
              <div className="inf3">
                <img src={props.img3} alt="" />
                <p>{t("Rooms 2")}</p>
              </div>
            </div>
            <div className="calendar">
              <button>
                <img src={props.img4} alt="" />
                <p>24.05</p>
              </button>
            </div>
            <div className="btn-4">
                <Buttons name="View"/>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default OfferCard;
