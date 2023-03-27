import React, { useEffect, useState } from 'react'
import { Messaje } from './Messaje';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'srider2',
        email:'alguien@google.com'
    });

    const {username,email } = formState;

    const onInputChange = ({target})=>{

        const {name, value} = target;
        console.log(event.target.value);
        setFormState({ 
            ...formState,
            [name]: value,

         });
    }

    useEffect(()=>{
        //console.log('Use efect called'); 
    }, []); 
        //Se ejecuta uan sola vz cuand oe larray es vacio

    //Para disparar el use efect cada que el formulario cmabia
    useEffect(()=>{
        //console.log('Form state changed');
    }, formState)

    //Ejecutar cuando el coreo cambia
    useEffect(()=>{
        //console.log('Email changed');
    }, [email])

     
  return (
    <>
        <h1>Formulario simple</h1>
        <hr />
        <input type="text" value={username} className='form-control mb-2' placeholder='usernme' name='username' onChange={onInputChange}/>
        <input type="email" value={email} className='form-control' placeholder='email' name='email' onChange={onInputChange}/>
    

        {
            (username === 'srider2') && <Messaje/>
        }
    </>
  )
}

export default SimpleForm
