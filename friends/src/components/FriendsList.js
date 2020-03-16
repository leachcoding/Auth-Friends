import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../axiosWithAuth'
import { FriendCard } from './FriendCard'

export function FriendsList(props) {
    const [friends, setFriends] = useState()

  useEffect(() => {
    localStorage.getItem('token') &&
    axiosWithAuth().get('/api/friends')
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  console.log(friends)
    return(
        <div>
           {friends ? friends.map((item, index) => {
               return <FriendCard item={item} key={index} />

           }):
            <h3>Loading</h3>
           }
        </div>
    )
} 
