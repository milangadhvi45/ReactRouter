import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function LoginPage({onlogin}){

    const [name , setname] = useState('');
    const [email , setemail]  =useState('');
    const [error ,  seterror] = useState('')
     const Navigate = useNavigate();

    const HandleLogin = () => {
    
     setemail('');

   if (name.trim() === '' || email.trim() === '') {
         seterror('Enter Both Name & Emial')
         return
    }

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        seterror('Plese Enter valid Email Address')
        return
    }

     localStorage.setItem('UserName', name)
     localStorage.setItem('UserEmail', email)
    
        console.log('Login success');
        onlogin()
        Navigate('/Home')
    
    }

    return(
                <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Welcome to FollowHub</h1>
                <p className="login-subtitle">Sign in to continue</p>
                
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />
                </div>

                {error && <p className="error-message">{error}</p>}

                <button className="login-btn" onClick={HandleLogin}>
                    Login
                </button>
            </div>
        </div>

    )
}