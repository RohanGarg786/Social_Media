import React, { useEffect, useState } from 'react'
import "./ReactPassword.css"
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../Actions/User';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const ResetPassword = () => {

    const [newPassword , setNewPassword] =useState("");
    const dispatch = useDispatch();
    const params = useParams();
    const {error,loading,message} = useSelector((state)=>state.like)

    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(resetPassword(params.token,newPassword))
    }

    useEffect(()=>{
        if(error){
          toast.error(error)
          dispatch({type:"clearErrors"})
        }
        
        if(message){
          toast.success(message)
          dispatch({type:"clearMessage"})
        }
      },[dispatch,error,toast,message])

  return (
    <div className='resetPassword'>
        <form className='resetPasswordForm' onSubmit={submitHandler}>

            <Typography variant='h3' style={{padding:"2vmax"}}>
                Social Aap
            </Typography>

            <input type="password" placeholder='New Password' required value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} className="resetPasswordInputs"/>

            <Link to="/">
                <Typography>Login</Typography>
            </Link>

            <Typography>Or</Typography>


            <Link to="/forgot/password">
                <Typography>Request New Token!</Typography>
            </Link>


            <Button disabled={loading} type='submit' >Reset Password</Button>

        </form>
      
    </div>
  )
}

export default ResetPassword
