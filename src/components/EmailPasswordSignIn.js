import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase.js';
import Button from './button/Button.js';
import CustomInput from './input/CustomInput.js';
import { useNavigate } from 'react-router-dom';

const EmailPasswordSignIn = ({ isSignUpPage }) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInOrSignUp = async () => {
        try {
            await isSignUpPage ? createUserWithEmailAndPassword(auth, email, password) : signInWithEmailAndPassword(auth, email, password);
            navigate('/calculator')
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <CustomInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <CustomInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={signInOrSignUp}>{isSignUpPage ? 'Sign up' : 'Sign in'}</Button>
        </div>
    );
};

export default EmailPasswordSignIn;
