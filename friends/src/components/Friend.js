import React from 'react'


function Friend(props){
    return(
        <div>
            <h2>{props.item.name}</h2>
            <p>{props.item.age}</p>
            <p>{props.item.email}</p>
        </div>
    )
}

export default Friend