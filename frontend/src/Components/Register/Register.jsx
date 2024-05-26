import React, { useEffect, useState } from 'react'
import './Register.css'
import { Avatar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../Actions/User';
import toast from 'react-hot-toast';

const Register = () => {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [password , setPassword] = useState("");

    const dispatch =useDispatch();
    const {loading ,error } = useSelector((state)=>state.user)


    const handleImageChange = (e)=>{
      const file = e.target.files[0];
  
      const Reader = new FileReader();
  
      Reader.onload =()=>{
        if(Reader.readyState == 2){
          setAvatar(Reader.result)
        }   
      };
      Reader.readAsDataURL(file);
    }
    
    const submitHandler =(e)=>{
      e.preventDefault();
      dispatch(registerUser(name,email,password,avatar))
    }

    useEffect(()=>{
      if(error){
        toast.error(error)
        dispatch({type:"clearErrors"})
      }
    },[dispatch,error,toast])


  return (
    <div className='register'>
        <form className='registerForm' onSubmit={submitHandler}>
            <Typography variant='h3' style={{padding:"2vmax"}}>
                Social Aap
            </Typography>

            <Avatar src={avatar} alt='User' sx ={{height:"10vmax" ,width:"10vmax"}} />

            <input type="file" accept='image/*' onChange={handleImageChange} />

            <input type='text' className='registerInputs' placeholder='Name' required value={name} onChange={(e)=>setName(e.target.value)}/>

            <input type='email' className='registerInputs' placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <input type="password" className='registerInputs' placeholder='Password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <Link to='/'><Typography>Already Signed Up? Login Now</Typography></Link>

            <Button disabled={loading} type='submit' >Sign Up</Button>

        </form>
      
    </div>
  )
}

export default Register
