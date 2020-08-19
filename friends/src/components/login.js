import React, { useState } from 'react'
import axios from 'axios'
import {axiosWithAuth  } from "../utils/axiosWithAuth";

const initialFormValues = {
    username: '',
    password:''
}
export function Login(props){
    const [formValues, setFormValues]= useState(initialFormValues)
    
    const onSubmit =(e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', formValues)
        .then(res=>{
            localStorage.setItem('token', res.data.payload)
            props.history.push('/friendList')
        })
        .catch(err =>{
            console.log("Uh-oh this error came up:", err)
        })
    }
        const onChange = (e) => {
            setFormValues({
                ...formValues,
                [e.target.name]: [e.target.value]
            })
        }
    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="username">Username: </label>
            <input
            type="text"
            value={formValues.username}
            onChange={onChange}
            name="username" />
            <br/>
 <label htmlFor="password">Password: </label>
            <input
            type="text"
            value={formValues.password}
            onChange={onChange}
            name="password" />
    <button>Login</button>
        </form>
    )
}