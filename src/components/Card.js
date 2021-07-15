import React from 'react';
import "../assets/css/cardholder.css"
function Card(props) {
    return(
        <div className="pop_nef">
            <div className="pop_name">
            <h4>{props.name}</h4>
            </div>
            <div className="pop_item">

            
                <img src={props.imgs} className="cardimage" alt="test"></img>
            
         
            
            </div>
        </div>
);
}
export default Card;