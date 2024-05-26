import React, { useEffect, useState } from 'react'
import './UpdateProfile.css'
import { Avatar, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, updateProfile } from '../../Actions/User';
import toast from 'react-hot-toast';
import Loader from '../Loader/Loader';

const UpdateProfile = () => {

    const {loading ,error ,user} = useSelector((state)=>state.user);
    const {loading:updateLoading , error:updateError,message} =useSelector((state)=>state.like);

    const [name , setName] = useState(user.name);
    const [email , setEmail] = useState(user.email);
    const [avatar, setAvatar] = useState("");
    const [avatarPrev, setAvatarPrev] = useState(user.avatar.url);

    const dispatch =useDispatch();


    const handleImageChange = (e)=>{
      const file = e.target.files[0];
  
      const Reader = new FileReader();
  
      Reader.onload =()=>{
        if(Reader.readyState == 2){
            setAvatarPrev(Reader.result)
          setAvatar(Reader.result)
        }   
      };
      Reader.readAsDataURL(file);
    }
    
    const submitHandler =async(e)=>{
      e.preventDefault();
      await dispatch(updateProfile(name,email,avatar));
      dispatch(loadUser());
    }

    useEffect(()=>{
      if(error){
        toast.error(error)
        dispatch({type:"clearErrors"})
      }
      if(updateError){
        toast.error(error)
        dispatch({type:"clearErrors"})
      }
      if(message){
        toast.success(message)
        dispatch({type:"clearMessage"})
      }
    },[dispatch,error,toast,updateError,message])


  return (
    loading?<Loader/> : <div className='updateProfile'>
    <form className='updateProfileForm' onSubmit={submitHandler}>
        <Typography variant='h3' style={{padding:"2vmax"}}>
            Social Aap
        </Typography>

        <Avatar src={avatarPrev} alt='User' sx ={{height:"10vmax" ,width:"10vmax"}} />

        <input type="file" accept='image/*' onChange={handleImageChange} />

        <input type='text' className='updateProfileInputs' placeholder='Name' required value={name} onChange={(e)=>setName(e.target.value)}/>

        <input type='email' className='updateProfileInputs' placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <Button disabled={updateLoading} type='submit' >Update</Button>

    </form>
  
</div>
  )
}

export default UpdateProfile
