import "./footerTwo.css";
import "./footerTwoResponse.css";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const FooterTwo = () => {
    const { t } = useTranslation("global");

    return (
        <div className="footerTwo">
            <footer>
                <Col lg={2}>
                        <div className="logo3">
                            <Link to="/">
                                <img src="./assets/img/logo (5).png" alt="logo" />
                            </Link>
                        </div>
                </Col>
                <Col lg={12}>
                    <div className="logo-contact-informationTwo-navigation-Services">
                        <div className="logo-contactTwo">
                            <div className="contactTwo">
                                    <h4>
                                        {t("Our addresses")}
                                    </h4>    
                                    <div className="locationTwo">
                                        <p>
                                            {t("location-Text")}
                                        </p>
                                        <p>
                                            {t("location-Text")}
                                        </p>
                                </div>
                               </div> 
                               <div className="contactUs">
                                    <h4>
                                        {t("Contact us")}
                                    </h4>
                                    <p>
                                        info@akcern.am
                                    </p>
                                    <p>
                                        +374 (10) 277-662
                                    </p>
                                    <p>
                                        +374 (91) 277-662
                                    </p>
                                    <p>
                                    WhatsApp:  +374 (96) 277-662
                                    </p>
                                    <p>
                                    Viber:    +374 (96) 277-662
                                    </p>
                               </div>

                               <div className="social-mediaTwo">
                                    <div className="instagramTwo">
                                        <img src="./assets/img/ri_instagram-fill (1).png"/>
                                    </div>
                                    <div className="facebookTwo">
                                        <img src="./assets/img/Frame 3 (1).png"/>
                                    </div>
                                    <div className="youtubeTwo">
                                        <img src="./assets/img/mdi_youtube (1).png"/>
                                    </div>
                               </div>
                        </div>
                        <div className="information3">
                            <Col lg={12}>
                                <div className="two-informationTwo-Two">
                                    <div className="information-content3">
                                        <ul>
                                        <h4>{t("Buy real estate")}</h4>
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
                                    <div className="information-content4">
                                        <ul>
                                        <h4>{t("Rent real estate")}</h4>
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
                        <div className="navigation-Services">
                            <div className="navigation">
                                <h4>
                                    {t("Navigation")}
                                </h4>
                                <ul>
                                <li>{t("Akcern Exclusive")}</li>
                                <li>{t("About Us")}</li>
                                <li>{t("Blog")}</li>
                                <li>{t("Contact")}</li>
                                <li>{t("Compare")}</li>     
                                </ul>
                            </div>
                            <div className="servicesFooter">
                                <h4>
                                    {t("Services")}
                                </h4>
                                <ul>
                                <li>{t("Design")}</li>
                                <li>{t("Construction")}</li>
                                <li>{t("Architecture")}</li>
                                <li>{t("Evaluation")}</li>
                                <li>{t("Buying and Selling")}</li>     
                                <li>{t("Legal advice")}</li>     
                                </ul>
                            </div>
                        </div>
                    </div>
                    </Col>
            </footer>
        </div>
    );
}

export default FooterTwo;
