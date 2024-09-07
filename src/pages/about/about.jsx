import "./about.css";
import "./aboutResponse.css"
import FooterTwo from "../../components/footerTwo/footerTwo";
import { Container, Col } from "reactstrap";
import { useTranslation } from "react-i18next";

function About() {
const [t, i18n] = useTranslation("global");
const changeLang = (lang) => {
    i18n.changeLanguage(lang)
}
    return (
        <div className="sectionAbout">
            <Container>
                <Col lg={12}>
                    <h1>{t('About Us')}</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/RRW1fnWjvIo?si=ChmdrMNX1nebWV2G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Col>
                <Col lg={6}>
                    <div className="textAbout-photos">
                        <div className="textOne">
                            <p>
                                {t("textOne-About")}
                            </p>
                        </div>
                        <div className="text-Photo">
                            <div className="photo">
                                <img src="./assets/img/Group 13 (1).png" alt="builder"/>
                            </div>
                            <div className="text">
                                <p>
                                    {t("textTwo-About")}
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="textTwo">
                        <p>
                            {t("textThree-About")}
                        </p>
                        <p>
                            {t("textFour-About")}
                        </p>
                        <p>
                            {t("textFive-About")}
                        </p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="three-Photo">
                        <img src="./assets/img/Frame 432528353.png" alt="room"/>
                        <img src="./assets/img/Frame 432528352.png" alt="room"/>
                        <img src="./assets/img/Frame 432528351.png" alt="room"/>
                    </div>
                </Col>
            </Container>
            <Col lg={12}>
                <FooterTwo />
            </Col>
        </div>
    );
}

export default About;
