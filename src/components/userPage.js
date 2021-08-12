import React from 'react'

const userPage = (props) => {
    console.log(props)
    return (
        <div>
            
           {props.state.firstName}
        </div>
    )
}

export default userPage
