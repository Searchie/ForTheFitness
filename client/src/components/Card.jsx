import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faSlidersH, faCameraRetro, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const gridItem = {
  border: "2px solid hsl(0, 0%, 13%)",
  fontSize: "30px",
  textAlign: "center",
  minWidth: "250px",
  maxWidth: "325px",
  boxShadow: "0px 4px 4px 4px hsl(0, 0%, 17%)",
  borderRadius: '3px',
  justifyContent: 'center'
};

const cardContentSpacing = {
  margin: '5px 0px, 5px, 0px',
  padding: '10px 20px'
};

const Card = props => {

  let icon;
  switch (props.icon) {
    case 'dumbell':
      icon = <FontAwesomeIcon icon={ faDumbbell } />
      break;
    case 'slider':
      icon = <FontAwesomeIcon icon={ faSlidersH } />
      break;
    case 'camera':
      icon = <FontAwesomeIcon icon={ faCameraRetro } />
      break;
    case 'question':
      icon = <FontAwesomeIcon icon={ faQuestionCircle } />
      break;
    default: console.log(`this is the default clause: props is ${props.icon}`);
  }

  return (
    <div style={gridItem} className="card has-background-dark has-text-white">
      <figure className="image">
        {icon}
      </figure>
      <div className="cardContent" style={cardContentSpacing}>
        <h3 className="title has-text-left has-text-white">{props.title}</h3>
        <p className='has-text-left' style={{ fontSize: '17px' }}>{props.content}</p>
      </div>
    </div>
  );
};

export default Card;
