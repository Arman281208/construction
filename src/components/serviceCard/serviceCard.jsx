import "./serviceCard.css";
import "./media4.css";

function ServiceCard(props) {
  return (
    <div className={`${props.class}` + " " + `${props.allClass}`}>
      <div className="cardBodySevice">
        <span>{props.name}</span>
        <img src={props.img} alt="" />
        <div className="Service-Text">
            <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
