import "./home.css";
import "./media2.css"
import { Container, Row, Col } from "reactstrap";
import ChooseCard from "../../components/chooseCard/chooseCard"
import NumbersInfo from "../../components/numbersInfo/numbersInfo"
import ServiceCard from "../../components/serviceCard/serviceCard";
import OfferCard from "../../components/offerCard/offerCard"
import Footer from "../../components/footer/footer"
import { useTranslation } from 'react-i18next';

function Home() {
const [t, i18n] = useTranslation("global");
const changeLang = (lang) => {
    i18n.changeLanguage(lang)
}

let ChooseCards = [
    {
      allClass: "chooseCard",
      src: "./assets/img/buy.png",
      title: t("Buy Real Estate"),
      btn: t("Catalog"),
    },
    {
      allClass: "chooseCard",
      src: "./assets/img/Frame.png",
      title: t("Rent Real Estate"),
      btn: t("Catalog"),
    },
    {
      allClass: "chooseCard",
      src: "./assets/img/Frame (1).png",
      title: t("Sell Real Estate"),
      btn: t("Catalog"),
    },
  ];

let service = [
    {
      class: "one",
      allClass: "servicesCard",
      title: t("Construction"),
      content: t("serviceText-Two")
    },
    {
      class: "two",
      allClass: "servicesCard",
      title: t("Design"),
      content: t("serviceText-Two")
    },
    {
      class: "three",
      allClass: "servicesCard",
      title: t("Architecture"),
      content: t("serviceText-Two")
    },
  ];


const offerCards = [
  {
    allClass: "offerCard",
    src: "./assets/img/Frame 77.png",
    code: t("CODE - 264851"),
    btn1: t("SPECIAL OFFER"),
    btn2: t("NEW OFFER"),
    btn3: t("EXCLUSIVE"),
    price: "463000 Դ.",
    title: t("offerCard-Title"),
    img: "./assets/img/Frame (2).png",
    img2: "./assets/img/Frame (3).png",
    img3: "./assets/img/Frame (4).png",
    img4: "./assets/img/Frame (17).png"
  },
  {
    allClass: "offerCard",
    src: "./assets/img/Frame 77 (1).png",
    code: t("CODE - 264851"),
    btn1: t("SPECIAL OFFER"),
    btn2: t("NEW OFFER"),
    btn3: t("EXCLUSIVE"),
    price: "498000 Դ.",
    title: t("offerCard-Title"),
    img: "./assets/img/Frame (2).png",
    img2: "./assets/img/Frame (3).png",
    img3: "./assets/img/Frame (4).png",
    img4: "./assets/img/Frame (17).png"
  },
  {
    allClass: "offerCard",
    src: "./assets/img/Frame 77 (2).png",
    code: t("CODE - 266513"),
    btn1: t("SPECIAL OFFER"),
    btn2: t("NEW OFFER"),
    btn3: t("EXCLUSIVE"),
    price: "328000 Դ.",
    title: t("offerCard-Title"),
    img: "./assets/img/Frame (2).png",
    img2: "./assets/img/Frame (3).png",
    img3: "./assets/img/Frame (4).png",
    img4: "./assets/img/Frame (17).png"
  }
];

  return (
    <div className="home">
      <section className="sectionOne">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="sectionOneTitle">
              <h1>{t('AKCERN HOLDING')}</h1>
                        <p>
                            {t('text-SectionOne')}
                        </p>
              </div>
            </Col>
          </Row>
          <Row className="chooseRow">
          {ChooseCards.map((item) => (
            <ChooseCard allClass={item.allClass} src={item.src} title={item.title} btn={item.btn}/>
          ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <NumbersInfo />
        </Container>
      </section>
      <section className="services">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="title">
                <img src="./assets/img/line.png" alt="" />
                <h2>{t("Services")}</h2>
              </div>
              <p className="textServices">
              {t("textOneServices")}
              </p>
            </Col>
          </Row>
          <Row className="serviceRow">
            {service.map((item) => (
              <Col lg={4}>
                <ServiceCard name={item.title} allClass={item.allClass} class={item.class} content={item.content}/>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="offer">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="title">
                <img src="./assets/img/line.png" alt="" />
                <h2>{t("Weekly Offer")}</h2>
              </div>
            </Col>
          </Row>
          <Row className="offerCard">
            {offerCards.map((item) => (
              <Col lg={4}>
                <OfferCard title={item.title} class={item.class} allClass={item.allClass} src={item.src} code={item.code} btn1={item.btn1} btn2={item.btn2} btn3={item.btn3} price={item.price} img={item.img} img2={item.img2} img3={item.img3} img4={item.img4}/>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Col lg={12}>
          <Footer />
      </Col>
    </div>
  );
}

export default Home;
