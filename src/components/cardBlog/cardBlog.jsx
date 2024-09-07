import "./cardBlog.css";
import { useTranslation } from "react-i18next";

function CardBlog(props) {
    const [t, i18n] = useTranslation("global");

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div>
                <div className="cardBlog">
                    <div className="cardBlog-Content">
                        <h2>
                            {props.name}
                        </h2>
                        <div className="cardBlog-Slash">
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default CardBlog;
