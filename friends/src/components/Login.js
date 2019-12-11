import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {axiosWithAuth} from '../axiosWithAuth'


export function Login(props) {
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = () => {
        axiosWithAuth().post('/api/login', form)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            props.history.push('/friendslist')
        })
        .catch(err => console.error('hey',err))


    }


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
        }}>
            <input
                type='text'
                name='username'
                placeholder='User Name'
                value={form.name}
                onChange={(e) => {
                    setForm({...form, [e.target.name]: e.target.value})
                }}
            />
            <input
                type='password'
                name='password'
                placeholder='Password'
                value={form.password}
                onChange={(e) => {
                    setForm({...form, [e.target.name]: e.target.value})
                }}
            />
           <button type='submit'>Login</button>
        </form>
    )
} 
