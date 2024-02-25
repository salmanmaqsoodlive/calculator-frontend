import React from 'react';
import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from '../firebase';
import Button from './button/Button';
import { useNavigate } from 'react-router-dom';


const GoogleSignIn = ({ isSignUpPage }) => {
  const navigate = useNavigate()
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/calculator')
    } catch (error) {
      console.error(error);
    }
  };

  return <Button onClick={signInWithGoogle}>{isSignUpPage ? 'Sign up with Google' : 'Sign in with Google'}</Button>;
};

export default GoogleSignIn;
