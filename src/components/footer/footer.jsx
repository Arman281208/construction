import "./footer.css";
import "./media6.css";
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation("global");

    return (
        <div className="footer">
            <footer>
                    <div className="logo-contact-information">
                        <div className="logo-contact">
                            <Col lg={2}>
                                <div className="logo2">
                                    <a>
                                        <img src="./assets/img/Layer 2.png" alt="logo" />
                                    </a>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="contact">
                                    <h4>
                                        {t("Akcern Holding")}
                                    </h4>    
                                    <div className="location">
                                        <img src="./assets/img/system-uicons_location.png"/>
                                        <p>
                                            {t("location-Text")}
                                        </p>
                                    </div>
                                    <div className="mail">
                                        <img src="./assets/img/system-uicons_location.png"/>
                                        <p>
                                            {t("Email")}
                                        </p>
                                    </div>
                                    <div className="number">
                                        <img src="./assets/img/healthicons_phone-outline.png"/>
                                        <p>
                                            {t("numOne")}
                                        </p>
                                    </div>
                                    <div className="number2">
                                        <img src="./assets/img/healthicons_phone-outline.png"/>
                                        <p>
                                            {t("numTwo")}
                                        </p>
                                    </div>
                                    <div className="viber">
                                        <img src="./assets/img/simple-icons_viber.png"/>
                                        <p>
                                             {t("numViber")}
                                        </p>
                                    </div>
                                    <div className="whatsapp">
                                        <img src="./assets/img/ic_outline-whatsapp.png"/>
                                        <p>
                                            {t("numWhatsapp")}
                                        </p>
                                    </div>
                               </div> 
                            </Col>
                            <div className="social-media">
                                <div className="instagram">
                                    <img src="./assets/img/ri_instagram-fill.png"/>
                                </div>
                                <div className="facebook">
                                    <img src="./assets/img/Frame 3.png"/>
                                </div>
                                <div className="youtube">
                                    <img src="./assets/img/mdi_youtube.png"/>
                                </div>
                            </div>
                        </div>
                        <div className="information2">
                            <Col lg={12}>
                                <div className="two-information">
                                    <div className="information-content1">
                                        <ul>
                                        <li className="sale">{t("Sales")}</li>
                                        <li>{t("Apartment")}</li>
                                        <li>{t("House")}</li>
                                        <li>{t("Private House")}</li>
                                        <li>{t("Summer House")}</li>
                                        <li>{t("Office")}</li>
                                        <li>{t("Restaurant")}</li>
                                        <li>{t("Shop")}</li>
                                        <li>{t("Land")}</li>
                                        <li>{t("Auto Service Point")}</li>
                                        <li>{t("Hotel")}</li>
                                        <li>{t("Hairdresser")}</li>
                                        <li>{t("Other")}</li>                                          
                                        </ul>
                                    </div>
                                    <div className="information-content2">
                                        <ul>
                                        <li className="sale2">{t("Rent")}</li>
                                        <li>{t("Apartment")}</li>
                                        <li>{t("House")}</li>
                                        <li>{t("Private House")}</li>
                                        <li>{t("Summer House")}</li>
                                        <li>{t("Office")}</li>
                                        <li>{t("Restaurant")}</li>
                                        <li>{t("Shop")}</li>
                                        <li>{t("Land")}</li>
                                        <li>{t("Auto Service Point")}</li>
                                        <li>{t("Hotel")}</li>
                                        <li>{t("Hairdresser")}</li>
                                        <li>{t("Other")}</li>                                              
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
            </footer>
        </div>
    );
}

export default Footer;
