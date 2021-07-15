import React from 'react';
import "../assets/css/cardholder.css"
function Card(props) {
    return(
        <div className="pop_nef">
            <div className="pop_name">
            <h5>{props.name}</h5>
            </div>
            <div className="pop_item">

            
                <img src={props.imgs} className="cardimage" alt="test"></img>
            
         
            
            </div>
        </div>
);
}
export default Card;