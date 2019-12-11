import React from 'react'

export function FriendCard(props) {
    console.log(props)
    return(
        <div>
            <h2>{props.item.name}</h2>
            <p>Age:  {props.item.age} </p>
            <p>Email: {props.item.email} </p>
        </div>
    )
} 
