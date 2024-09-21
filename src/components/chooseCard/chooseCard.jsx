import "./chooseCard.css";
import "./media3.css";
import { Col } from "reactstrap";

function ChooseCard(props) {
  return (
    <Col lg={4}>
      <div className={props.allClass}>
        <img src={props.src} alt="" />
        <h5>
          {props.title.split("\n").map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </h5>
        <button>{props.btn}</button>
      </div>
    </Col>
  );
}

export default ChooseCard;
