import './numbersInfo.css';
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';

function NumbersInfo() {
    const { t } = useTranslation("global");

    let numbers = [
        { "num": "30+", "desc": t("Years in Market") },
        { "num": "5000+", "desc": t("Satisfied Customers") }, 
        { "num": "5000+", "desc": t("Properties Sold") }
    ];

    return (
        <Row>
            <div className='numbersHead'>
                {numbers.map((data, index) =>
                    <Col lg={4} key={index}>
                        <div className='numbersBlock'>
                            <span>
                                {data.num}
                            </span>
                             <p>
                                 {data.desc}
                             </p>
                        </div>
                    </Col>
                )}
            </div>
        </Row>
    );
}

export default NumbersInfo;
