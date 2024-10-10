import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
const Navbar = () => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    axios.get('http://localhost:8081')
      .then(res => {
        if(res.data.Status === "Success"){
          setAuth(true);
          setName(res.data.name);
        }
        else{
          setAuth(false);
          setMessage(res.data.Message);
        }
      })
    
  }, [])


  const handleLogout =() =>{
    axios.get('http://localhost:8081/logout')
    .then(res => {
      if(res.data.Status === "Success"){
        // location.reload(true);
        navigate('/'); 
      }
      else{
        alert("error");
      }
    
    })
    .catch(err => console.log(err))
  }
    return (
        <div>
        
        <div className="bg-[#2397C8] px-[50px] flex justify-between items-center h-[80px] ">
        
        <div className="flex justify-center items-center">
          
          <img className="w-[120px]" src="https://i.ibb.co.com/KL1MPdP/Pure-Ledger-1.png" alt="Pure-Ledger-1"></img>
        </div>
        {
          auth ?
          
          <div>
            <span className="text-white text-[20px] mx-[10px]">Welcome {name}</span>
            <button onClick={handleLogout} className="border border-white text-white w-[110px] h-[40px] text-center py-[5px]">LogOut</button>
          </div>
          :
          <div>
            <Link to="/" className="border border-white text-white w-[110px] h-[40px] text-center py-[10px] px-[30px]">Login</Link>
          </div>
        }
         

       </div>
        </div>
    );
};

export default Navbar;



