import "./blog.css";
import "./responseBlog.css";
import CardBlog from "../../components/cardBlog/cardBlog";
import FooterTwo from "../../components/footerTwo/footerTwo";
import { Container, Col, Row} from "reactstrap";
import { useTranslation } from "react-i18next";

function Blog() {
    const [t, i18n] = useTranslation("global");
  
    const changeLang = (lang) => {
      i18n.changeLanguage(lang);
    };

    let CardsBlog = [
      {
          name: t("blogContent-Text"),
          slash: t("cardBlog-Slash")
      }
   ];

  return (
        <div className="sectionBlog">
            <Container>
                    <Col lg={12}>
                        <h1>{t('Blog')}</h1>
                    <Col lg={6}>
                        <div className="card-sectionBlog">
                            <Row>
                                <div className="two-sectionCard">
                                <div className="sectionCard-One">
                                  {CardsBlog.map((item =>
                                      <CardBlog name={item.name} slash={item.slash} />
                                  ))}
                                  {CardsBlog.map((item =>
                                      <CardBlog name={item.name} slash={item.slash} />
                                  ))}

                                </div>
                                <div className="sectionCard-Two">
                                  {CardsBlog.map((item =>
                                      <CardBlog name={item.name} slash={item.slash} />
                                  ))}
                                  {CardsBlog.map((item =>
                                      <CardBlog name={item.name} slash={item.slash} />
                                  ))}
                                </div>
                                </div>

                            </Row>
                        </div>
                    </Col>
                    </Col>
            </Container>
              <Col lg={12}>
                <FooterTwo />
              </Col>
        </div>
  );
}

export default Blog;
