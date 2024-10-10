
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { GrHomeRounded } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { BsCameraVideo } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import './Nav.css';

const Dashboard = () => {
  

    return (
        
        <div >
            <Navbar></Navbar>

            <div className="flex">
          <>
         
          <div className="w-[275px] h-[859px] text-[#411900] bg-[#E4F2F8] py-[20px] px-[15px]">
          <p className="text-[#2397C8] text-[26px] font-bold">Accounting</p>
          <ul className="mt-[50px]">
            <li  className="text-[20px] my-[30px] font-a">
                        <nav><NavLink to="/dashboard/home" exact activeClassName="active-link " className="flex  item-center">
                        <GrHomeRounded className="mr-[10px]"></GrHomeRounded >
                            Dashboard
                           <IoIosArrowForward className="ml-[90px]"> </IoIosArrowForward>
                            </NavLink>
                            </nav>
                    </li>
                    <li  className="text-[20px] my-[30px] font-a">
                        <nav>
                        <NavLink to="/dashboard/accounting" activeClassName="active-link" className="flex  item-center">
                        <BsCameraVideo className="mr-[10px]"></BsCameraVideo>
                            Accounting
                            <IoIosArrowForward className="ml-[90px]"> </IoIosArrowForward>
                            </NavLink>
                        </nav>
                    </li>
                    <li  className="text-[20px] my-[30px] font-a">
                        <nav>
                        <NavLink to="/dashboard/reports" activeClassName="active-link" className="flex  item-center">
                        <FaRegPenToSquare className="mr-[10px]"></FaRegPenToSquare>
                            Reports
                            <IoIosArrowForward className="ml-[120px]"> </IoIosArrowForward>
                            </NavLink>
                        </nav>
                    </li>
            </ul>
            </div>
            
          </>
            


            <div className="flex">
            <Outlet></Outlet>
            </div>    
            </div>


         </div>
    );
};

export default Dashboard;