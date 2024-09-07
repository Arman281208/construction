import "./contact.css";
import "./responseContact.css";
import FooterTwo from "../../components/footerTwo/footerTwo";
import Buttons from "../../components/buttons/buttons";
import Inputs from "../../components/inputs/inputs";
import { Container, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function Contact() {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.grecaptcha && document.getElementById('recaptcha')) {
        window.grecaptcha.render('recaptcha', {
          sitekey: '6LefHyIqAAAAAO14BKUWfBQU91c9KjdQ8qKSwzp2',
        });
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="sectionContact">
      <Container>
        <Col lg={12}>
          <h1>{t('Contact')}</h1>
          <div className="forms-Contact-information-map">
          <div className="formsContact">
            <div className="form1">
              <div className="form-text">
                <h1>
                  {t("Send us an email")}
                </h1>
                <div className="slash2"></div>
              </div>
              <div className="form-inputs">
                <div className="input-One">
                    <Inputs name="Your name"/>
                    <Inputs name="contact-inputMail"/>
                </div>
                <div className="input-Two">
                  <Inputs name="Topic"/>
                </div>
                <div className="input-Three">
                  <Inputs name="Message"/>
                </div>
                <div className="captcha-Btn">
                {/* <form action="/submit" method="post">
                  <div id="recaptcha" className="g-recaptcha"></div>
                </form> */}
                  <Buttons name="Send a letter"/>
              </div>
              </div>
            </div>
          </div>
          <div className="two-informationContent">
              <div className="information-Text">
                  <div className="slash-text">
                    <div className="slash3">

                    </div>
                    <div id="text">
                    <h4>
                      {t("Information")}
                    </h4>
                    </div>

                  </div>
                  <div className="inf-Contact">   
                                    <div className="location">
                                        <img src="./assets/img/pajamas_location.png"/>
                                        <p>
                                            {t("location-Text")}
                                        </p>
                                    </div>
                                    <div className="number">
                                        <p>
                                            {t("Tel. +374 (10) 277-662")}
                                        </p>
                                    </div>
                                    <div className="number2">
                                        <p>
                                            {t("Tel. +374 (91) 277-662")}
                                        </p>
                                    </div>
                                    <div className="number2">
                                        <p>
                                            {t("Tel. +374 (96) 277-662")}
                                        </p>
                                    </div>
                                    <div className="viber">
                                        <img src="./assets/img/simple-icons_viber.png"/>
                                        <p>
                                             {t("Tel. +374 (96) 277-662")}
                                        </p>
                                    </div>
                                    <div className="whatsapp">
                                        <img src="./assets/img/ic_outline-whatsapp.png"/>
                                        <p>
                                            {t("+374 (96) 277-662")}
                                        </p>
                                    </div>
                                    <div className="mail">
                                        <p>
                                            {t("Email. info@akcern.am")}
                                        </p>
                                    </div>
                               </div> 
              </div>
              <div className="information-Text2">
                  <div className="slash-text">
                    <div className="slash3">

                    </div>
                    <div id="text">
                    <h4>
                      {t("slash-textOne")}
                    </h4>
                    </div>

                  </div>
                  <div className="inf-Contact inf-Contact2">   
                                    <div className="number">
                                        <p>
                                            {t("Tel. +374 (10) 277-662")}
                                        </p>
                                    </div>
                                    <div className="number2">
                                        <p>
                                            {t("Tel. +374 (91) 277-662")}
                                        </p>
                                    </div>
                                    <div className="mail">
                                        <p>
                                            {t("Email. appraisal@realakcern.am")}
                                        </p>
                                    </div>
                                    <div className="mail">
                                        <p>
                                            {t("Email. lawyer@realakcern.am")}
                                        </p>
                                    </div>
                               </div> 
                    <div className="slash-text">
                      <div className="slash3">

                      </div>
                      <div id="text">
                        <h4>
                          {t("slash-textTwo")}
                        </h4>
                       </div>

                  </div>
                  <div className="inf-Contact inf-Contact3">   
                                    <div className="number">
                                        <p>
                                            {t("Tel. +374 (10) 277-662")}
                                        </p>
                                    </div>
                                    <div className="number2">
                                        <p>
                                            {t("Tel. +374 (91) 277-662")}
                                        </p>
                                    </div>
                                    <div className="mail">
                                        <p>
                                            {t("Email. appraisal@realakcern.am")}
                                        </p>
                                    </div>
                                    <div className="mail">
                                        <p>
                                            {t("Email. lawyer@realakcern.am")}
                                        </p>
                                    </div>
                               </div> 
                    <div className="slash-text">
                      <div className="slash3">

                      </div>
                      <div id="text">
                        <h4>
                          {t("slash-textThree")}
                        </h4>
                       </div>

                  </div>
                  <div className="inf-Contact inf-Contact3">   
                                    <div className="number">
                                        <p>
                                            {t("Tel. +374 (10) 277-662")}
                                        </p>
                                    </div>
                                    <div className="mail">
                                        <p>
                                            {t("Email. constraction@realakcern.am")}
                                        </p>
                                    </div>
                    </div> 
              </div>
          </div>
          
          <div className="formsContact-Two">
            <div className="form1">
              <div className="form-text">
                <h1>
                  {t("Real estate firms")}
                </h1>
                <div className="slash2"></div>
              </div>

              <div className="two-Slash-Contact-Text">
                  <div className="slash-Contact-Text-One">
                  <div className="slash-text">
                      <div className="slash3">

                      </div>
                      <div id="text">
                        <h4>
                          {t("Aksern Star.")}
                        </h4>
                       </div>

                  </div>
                  <div className="number-mail">
                    <div className="number">
                                        <p>
                                            {t("Tel. +374 (10) 277-662")}
                                        </p>
                                    </div>
                                    <div className="number2">
                                        <p>
                                            {t("Tel. +374 (91) 277-662")}
                                        </p>
                                    </div>
                                    <div className="mail">
                                        <p>
                                            {t("Email. infodesk@realakcern.am")}
                                        </p>
                                    </div>
                  </div>

                    <div className="slash-text" id="slash-text">
                      <div className="slash3">

                      </div>
                      <div id="text">
                        <h4>
                          {t("Aksern Alpha.")}
                        </h4>
                       </div>

                  </div>
                  <div className="number">
                                        <p>
                                            {t("Tel. +374 (10) 277-662")}
                                        </p>
                                    </div>
                                    <div className="number2">
                                        <p>
                                            {t("Tel. +374 (91) 277-662")}
                                        </p>
                                    </div>
                                    <div className="mail">
                                        <p>
                                            {t("Email. infodesk@realakcern.am")}
                                        </p>
                                    </div>
                  </div>
                  <div className="slash-Contact-Text-Two">
                  <div className="slash-text">
                      <div className="slash3">

                      </div>
                      <div id="text">
                        <h4>
                          {t("Aksern Delta.")}
                        </h4>
                       </div>

                  </div>
                  <div className="number">
                                        <p>
                                            {t("Tel. +374 (10) 277-662")}
                                        </p>
                                    </div>
                                    <div className="number2">
                                        <p>
                                            {t("Tel. +374 (91) 277-662")}
                                        </p>
                                    </div>
                                    <div className="mail">
                                        <p>
                                            {t("Email. infodesk@realakcern.am")}
                                        </p>
                                    </div>

                      <div className="slash-text" id="slash-text">
                        <div className="slash3">

                        </div>
                        <div id="text">
                          <h4>
                            {t("Aksern Ground.")}
                          </h4>
                        </div>

                  </div>
                  <div className="number">
                                        <p>
                                            {t("Tel. +374 (10) 277-662")}
                                        </p>
                                    </div>
                                    <div className="number2">
                                        <p>
                                            {t("Tel. +374 (91) 277-662")}
                                        </p>
                                    </div>
                                    <div className="mail">
                                        <p>
                                            {t("Email. infodesk@realakcern.am")}
                                        </p>
                                    </div>
                  </div>

              </div>

            </div>
          </div>
          <div className="Map">
              <div className="slash-Text-Map">
                  <div className="slashOne">

                  </div>
                  <h3>
                    Map
                  </h3>
                  <div className="slashTwo">
                  
                  </div>
              </div>
              <div className="map-Iframe">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48312.75506081758!2d44.47493075!3d40.81594315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041bc1cc2a9ec57%3A0x34e4f0c6190c7ff4!2z0JLQsNC90LDQtNC30L7RgA!5e0!3m2!1sru!2sam!4v1723153466011!5m2!1sru!2sam"
                    style={{ border: 0}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
</div>

          </div>
          </div>

        </Col>
      </Container>
      <Col lg={12}>
          <FooterTwo />
      </Col>
    </div>
  );
}

export default Contact;
