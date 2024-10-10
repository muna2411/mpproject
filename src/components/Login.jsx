import { Link, useNavigate } from "react-router-dom";
import { FaEye ,FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import axios from 'axios';

const Login = () => {
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    
    const [showPass,setShowPass] = useState(false);


    axios.defaults.withCredentials = true;
    const handleSubmit = event =>{
      event.preventDefault();


      axios.post('http://localhost:8081/login' , {id, password})
      .then(res => {
                if(res.data.Status === "Success"){
                  console.log(res);
                  navigate('/dashboard/home'); 
                }
                else{
                  alert(res.data.Message);
                }
            })
            .catch(err => console.log(err));

    }
    return (
        <div className="flex justify-center item center my-[137px]">
        
        <div className="w-[414px] h-[451px] bg-[#F4FAFC] border-t-[4px] border-[#2397C8] shadow-md">
           <div className="w-[328px] h-[356px] m-[43px]">
           <p className="font-a text-[20px] text-[#2397C8] font-semibold mt-[14px]">Welcome To PureLedger</p>
           <p className="font-a text-[16px] text-[#9E9E9E] mt-[14px]">Please Login to continue</p>
              <form onSubmit={handleSubmit}>
              <div className="mt-[30px]">
                <p className="font-a text-[14px] text-[#4A4C51] mt-[14px]">Employee ID</p>
                <input type="text" placeholder="Enter Employee ID here" name='id' className="w-[328px] h-[45px] border border-[#EBEBEB] my-[10px] px-[15px] text-[12px]" onChange={e => setId(e.target.value)} required/>
               
                <p className="font-a text-[14px] text-[#4A4C51] mt-[10px]">Password</p>
                <div className="flex justify-around item-center">
                <input  type={showPass ? "text" : "password"} name='password' placeholder="Enter Password here" className="w-[328px] h-[45px] border border-[#EBEBEB] my-[10px] px-[15px] text-[12px]" onChange={e => setPassword(e.target.value)} required/>
                <span className=" top-[20px] ml-[-30px] mt-[25px]" onClick={() => setShowPass (!showPass)}>
                  {
                    showPass ? <FaEyeSlash className="text-[#979797]"></FaEyeSlash> : <FaEye className="text-[#979797]"></FaEye>
                  }
                </span>
              
              </div>
                
              </div> 
             <input type="submit" value="Login" className="text-white w-[328px] h-[36px] bg-[#2397C8] mt-[15px] text-[14px]"/>
              </form> 
              <div className="flex justify-center item center my-[20px]">
              <p className="text-[#9E9E9E] text-[14px]">Don't have an account? </p>
              <Link to="/register" className="text-[#2397C8] mx-[10px] text-[14px]">Register Now!</Link>
              </div>
           </div>
        </div>
        </div>
    );
};

export default Login;