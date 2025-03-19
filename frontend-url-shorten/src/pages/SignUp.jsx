import React, { useState } from 'react';
import TextField from '../components/TextField';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUp = () => {

  const navigate = useNavigate();

  const [username,setUsername] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpHandler = () => {
    try {
      console.log(username);
      console.log(email);
      console.log(password);
    } catch (error) {
      toast.error(error);
    }
  }


  return (
    <div className="w-full max-w-md mx-auto mt-16 bg-white shadow-xl rounded-2xl p-10 space-y-8 mb-10">
      <h2 className="text-3xl font-bold text-center text-gray-800">Create Account</h2>
      <p className="text-center text-gray-500 text-sm">Join us and start analyzing your links smarter!</p>

      {/* Username */}
      <TextField 
        label={"Username"}
        value={username} 
        onChange={(e)=>setUsername(e.target.value)} placeholder={"type your username"} 
        isPassword={false}
      />


      {/* Email */}
      <TextField 
        label={"Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        isPassword={false}
      />

      {/* Password */}
      <TextField 
        label={"Password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        isPassword={true}
      />

      {/* Sign Up Button */}
      <button 
        className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300 font-medium text-lg"
        onClick={signUpHandler}
      >
        Sign Up
      </button>

      {/* Optional - Already have an account */}
      <p className="text-center text-gray-500 text-sm">
        Already have an account? <span className="text-black font-medium cursor-pointer hover:underline" onClick={()=>navigate("/login")}>Log in</span>
      </p>
    </div>
  );
};

export default SignUp;
