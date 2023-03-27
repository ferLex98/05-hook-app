import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';

const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm} = useForm({
        username: '',
        email:'',
        password: ''
    })
    

    const {username,email,password} = formState
     
  return (
    <>
        <h1>Formulario cutom hook</h1>
        <hr />
        <input type="text" value={username} className='form-control mb-2' placeholder='usernme' name='username' onChange={onInputChange}/>
        <input type="email" value={email} className='form-control  mb-2' placeholder='email' name='email' onChange={onInputChange}/>
        <input type="password" value={password} className='form-control' placeholder='password' name='password' onChange={onInputChange}/>
        <button onClick={onResetForm} type="reset" className='btn btn-primary mt-2'>Reset</button>
    </>
  )
}

export default FormWithCustomHook
