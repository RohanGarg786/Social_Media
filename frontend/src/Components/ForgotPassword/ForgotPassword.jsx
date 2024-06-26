import React, { useEffect, useState } from 'react'
import './ForgotPassword.css'
import { Button, Typography } from '@mui/material';
import toast from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../Actions/User';

const ForgotPassword = () => {

    const [email,setEmail] = useState("");

    const dispatch =useDispatch();
    const {error,loading,message} = useSelector((state)=>state.like)

    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(forgotPassword(email));
    }

    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch({type:"clearErrors"})
        }
        if(message){
            toast.success(message);
            dispatch({type:"clearMessage"})
        }
        
    },[toast,dispatch,error,message])
  return (
    <div className='forgotPassword'>
        <form className='forgotPasswordForm' onSubmit={submitHandler}>

            <Typography variant='h3' style={{padding:"2vmax"}}>
                Social Aap
            </Typography>

            <input type='email' placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)} className='forgotPasswordInputs'/>


            <Button disabled={loading} type='submit' >Send Token</Button>

        </form>
      
    </div>
  )
}

export default ForgotPassword
