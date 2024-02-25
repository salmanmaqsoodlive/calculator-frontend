import React, { useState, useEffect } from 'react'

import { auth } from '../firebase.js';
import GoogleSignIn from '../components/GoogleSignIn';
import EmailPasswordSignIn from '../components/EmailPasswordSignIn';

const SignUp = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log("auth user ", authUser);
                setUser(authUser);
                localStorage.setItem('user', JSON.stringify(authUser))
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>

            <div style={{ display: 'flex', flexDirection: 'column', width: '400px', alignItems: 'center' }}>
                <h2>Sign Up</h2>
                <EmailPasswordSignIn isSignUpPage={true} />
                <GoogleSignIn isSignUpPage={true}/>
            </div>

        </div>
    )
}

export default SignUp