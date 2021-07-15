import React from 'react'

const contentData = (props) => {
  //  const [offer, description] = props.contentData;
    return (
        <div className="count-box">
            <h2>
                {props.contentData.offer}
            </h2>
            <p>{props.contentData.description}</p>
        </div>
    )
}

export default contentData


