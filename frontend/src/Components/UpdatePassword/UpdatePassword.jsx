import "./UpdatePassword.css"
import React, { useEffect, useState } from 'react'
import { Typography, Button } from "@mui/material";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { updatePassword } from "../../Actions/User";
import toast from "react-hot-toast";

const UpdatePassword = () => {

    const {loading ,error, message} = useSelector((state)=>state.like)

    const [oldpassword,setOldPassword] =useState("")
    const [newpassword,setNewPassword] =useState("")
    const dispatch =useDispatch();

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(updatePassword(oldpassword,newpassword));
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
    <div className='updatePassword'>
        <form className='updatePasswordForm' onSubmit={submitHandler}>

            <Typography variant='h3' style={{padding:"2vmax"}}>
                Social Aap
            </Typography>

            <input type="password" placeholder='Old Password' required value={oldpassword} onChange={(e)=>setOldPassword(e.target.value)} className="updatePasswordInputs"/>

            <input type="password" placeholder='New Password' required value={newpassword} onChange={(e)=>setNewPassword(e.target.value)} className="updatePasswordInputs"/>


            <Button disabled={loading} type='submit' >Change Password</Button>

        </form>
      
    </div>
  )
}

export default UpdatePassword
