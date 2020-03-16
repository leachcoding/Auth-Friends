import React, {useState} from 'react'
import {axiosWithAuth} from '../axiosWithAuth'

export function AddFriendForm(props) {
    const [form, setForm] = useState({
        id: Date.now(),
        name: '',
        age: '',
        email: ''
    })

    return(
        <form onSubmit={(e) => {
            e.preventDefault()
            axiosWithAuth()
                .post('/api/friends', form)
                .then(res => {
                    console.log(res)
                    props.history.push('/friendslist')
                })
                .catch(err => console.log(err))

        }}>
            <input
            name='name'
            placeholder='Name'
            value={form.name}
            onChange={(e) =>{setForm({...form, [e.target.name]: e.target.value})}}
            />
            <input
            name='age'
            placeholder='Age'
            value={form.age}
            onChange={(e) =>{setForm({...form, [e.target.name]: e.target.value})}}
            />
            <input
            name='email'
            placeholder='Email'
            value={form.email}
            onChange={(e) =>{setForm({...form, [e.target.name]: e.target.value})}}
            />
            <button type='submit'>Add Friend</button>

        </form>
    )
}
