import React from 'react'

const contentData = (props) => {
  //  const [offer, description] = props.contentData;
    return (
        <div className="count-box">
            <h3>
                {props.contentData.offer}
            </h3>
            <p>{props.contentData.description}</p>
        </div>
    )
}

export default contentData


