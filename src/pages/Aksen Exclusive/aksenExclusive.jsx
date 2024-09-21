import "./aksenExclusive.css";
import "./aksenExclusiveResponse.css";
import FooterTwo from "../../components/footerTwo/footerTwo";
import Buttons from "../../components/buttons/buttons";
import { Container, Col, Row } from "reactstrap";
import { useTranslation } from "react-i18next";

function AksenExclusive() {
  const [t, i18n] = useTranslation("global");
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="sectionAksenExclusive">
      <Container>
        <Col lg={12}>
          <h1>{t('Akcern Exclusive')}</h1>
          <div className="sectionTwoAksenExclusive">
                <div className="photo-sectionTwo">
                    <img src="./image 9.png" alt="sectionTwo"/>
                </div>
                <div className="text-sectionTwo">
                    <h2>{t("Akcern Exclusive")}</h2>
                    <div className="slash">
                    </div>
                        <p>
                        {t("akcern-textSlash")}
                        </p>
                    <div className="btn-sectionTwo">
                        <Buttons name="View more"/>
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

export default AksenExclusive;
