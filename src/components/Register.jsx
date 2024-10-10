// import { NavLink } from "react-router-dom";

import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Register = () => {


  const [values, setValues] = useState({
    name: '',
    gender: '',
    date: '',
    email: '',
    id: '',
    po: '',
    password: ''
  })

const navigate = useNavigate();
const handleChange = (event) =>{
setValues({...values, [event.target.name] : [event.target.value]})
}


  const handleSubmit = event =>{
    event.preventDefault();
    axios.post('http://localhost:8081/signup' , values)
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
    .then(res => {
      console.log(res);
      navigate('/dashboard/home'); 
     })
    .catch(err => console.log(err));
  }


    return (
        <div className="flex justify-center item center my-[137px]">
        
        <div className="w-[414px] h-[609px] bg-[#F4FAFC] border-t-[4px] border-[#2397C8] shadow-md">
           <div className="w-[328px] h-[356px] m-[43px]">
           <p className="font-a text-[20px] text-[#2397C8] font-semibold mt-[14px]">Welcome To PureLedger</p>
           <p className="font-a text-[16px] text-[#9E9E9E] mt-[14px]">Please Login to continue</p>
              <form onSubmit={handleSubmit}>
              <div className="mt-[30px]">
                
              <input type="text" placeholder="Full Name" name="name" className="w-[328px] h-[45px] border border-[#EBEBEB] rounded-[4px] my-[8px] px-[15px] text-[12px]" onChange={handleChange} required/>
                
                <div className="flex gap-[20px]">
                <select type="text" name="gender" className="w-[158px] h-[45px] border border-[#EBEBEB] rounded-[4px] my-[8px] px-[15px] text-[#979797] text-[12px]" onChange={handleChange}>
                       <option disabled selected >Gender</option>
                       <option>Male</option>
                       <option>Female</option>  
                </select>
                <input type="date" name="date" placeholder="Date Of Birth" className="w-[158px] h-[45px] border border-[#EBEBEB] rounded-[4px] my-[8px] px-[15px] text-[12px] text-[#979797]" onChange={handleChange} required/>
                </div>
              
                
              <input type="email" name="email" placeholder="Email" className="w-[328px] h-[45px] border border-[#EBEBEB] rounded-[4px] my-[8px] px-[15px] text-[12px]" onChange={handleChange} required/>
              <input type="text" name="id" placeholder="Employee ID" className="w-[328px] h-[45px] border border-[#EBEBEB] rounded-[4px] my-[8px] px-[15px] text-[12px]" onChange={handleChange} required/>
              <input type="text" name="po" placeholder="Position in Organization" className="w-[328px] h-[45px] border border-[#EBEBEB] rounded-[4px] my-[8px] px-[15px] text-[12px]" onChange={handleChange} required/>
              <input type="password" name="password" placeholder="Password" className="w-[328px] h-[45px] border border-[#EBEBEB] rounded-[4px] my-[8px] px-[15px] text-[12px]" onChange={handleChange} required/>
              </div> 
              {/* <NavLink to="/dashboard/home"><input type="submit" value="Register" className="text-white w-[328px] rounded-[4px] h-[36px] bg-[#2397C8] mt-[15px] text-[14px]"/></NavLink> */}
              <input type="submit" value="Register" className="text-white w-[328px] rounded-[4px] h-[36px] bg-[#2397C8] mt-[15px] text-[14px]"/>
              </form>
             
           </div>
        </div>
        </div>
    );
};

export default Register;