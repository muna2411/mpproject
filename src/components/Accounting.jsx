import { Link, NavLink } from "react-router-dom";

const Accounting = () => {
   
    return (
        <div className="flex gap-[150px]">
           <div className="bg-[#F4F4F4] w-[742px] h-[478px] my-[50px] ml-[100px] ">
              <div className="flex justify-around item-center py-[50px]">
                 <div>
                    <p className="text-[22px] font-semibold text-[#5E5E5E] my-[20px]">Add Accounting</p>
                    <div className="grid grid-col-1">
                    <input type="date" placeholder="Date Of Birth" className="w-[248px] h-[45px] border border-[#EBEBEB] rounded-[4px] my-[8px] px-[15px] text-[12px] text-[#979797]" />
                    <select type="text" name="category" className="w-[248px] h-[45px] border border-[#EBEBEB] rounded-[4px] my-[8px] px-[15px] text-[#979797] text-[12px]">
                       <option disabled selected >Account Type</option>
                       <option>Debit</option>
                       <option>Credit</option>  
                    </select>
                    <select type="text" name="category" className="w-[248px] h-[45px] border border-[#EBEBEB] rounded-[4px] my-[8px] px-[15px] text-[#979797] text-[12px]">
                       <option disabled selected >Choose Head</option>
                       <option>Transportation</option>
                       <option>Office maintenance</option>
                       <option>Courier cost</option>
                       <option>Stationary</option>
                       <option>Food</option>  
                    </select>
                    <input type="text" placeholder="Amount" className="w-[248px] h-[45px] border border-[#EBEBEB] rounded-[4px] my-[8px] px-[15px] text-[12px]" />
                    <NavLink to="/dashboard/home"><input type="submit" value="Submit" className="text-white w-[248px] rounded-[4px] h-[41px] bg-[#2397C8] mt-[15px] text-[14px]"/></NavLink>
                    </div>
                 </div>
                 <div className="divider divider-horizontal h-[300px] mt-[50px]"></div>
                 <div>
                    <p className="text-[22px] font-semibold text-[#5E5E5E] my-[20px]">Account Heads</p>
                    <div >
                    <div className="w-[169px] h-[27px] bg-[#ECEDFA] my-[10px]">
                        <p className="text-[#A0A0A0] px-[15px]">Transportation</p>
                    </div>
                    <div className="w-[169px] h-[27px] bg-[#ECEDFA] my-[10px]">
                        <p className="text-[#A0A0A0] px-[15px]">Office maintenance</p>
                    </div>
                    <div className="w-[169px] h-[27px] bg-[#ECEDFA] my-[10px]">
                       <p className="text-[#A0A0A0] px-[15px]">Courier cost</p>
                    </div>
                    <div className="w-[169px] h-[27px] bg-[#ECEDFA] my-[10px]">
                       <p className="text-[#A0A0A0] px-[15px]">Stationary</p>
                    </div>
                    <div className="w-[169px] h-[27px] bg-[#ECEDFA] my-[10px]">
                       <p className="text-[#A0A0A0] px-[15px]">Food</p> 
                    </div>
                    </div>
                    {/* <button className="text-[#2397C8] mx-[20px] my-[20px] text-semibold">Add Accounts Head</button> */}
                




                {/* modal */}
               
<button className="text-[#2397C8] mx-[20px] my-[20px] text-semibold" onClick={()=>document.getElementById('my_modal_1').showModal()}>Add Accounts Head</button>
<dialog id="my_modal_1" className="modal">
  <div className="bg-[#F4FAFC] w-[305px] h-[265px] border-t-[5px] border-[#2397C8]">
  <p className="text-[20px] text-[#9E9E9E] mx-[20px] mt-[5px] font-semibold mb-[-10px]">Add Account Head</p>
  <div className="divider w-[270px] mx-auto"></div>
 <div className="px-[20px] flex justify-around">
    <div>
    <p>Debit</p>
    <input type="radio" name="radio-7" className="radio radio-info " defaultChecked />
    </div>
    <div>
    <p>Credit</p>
    <input type="radio" name="radio-7" className="radio radio-info" />
    </div>
 </div>
  <input type="text" placeholder="Type Name Here" className="w-[248px] h-[45px] border border-[#EBEBEB] rounded-[4px] mt-[8px] px-[15px] text-[12px] mx-[25px]" />
    <div className="modal-action">
      <form method="dialog">
        <NavLink to="/dashboard/home"><input type="submit" value="Add Head" className="text-white w-[253px] rounded-[4px] h-[34px] bg-[#2397C8] text-[14px] mx-[25px]"/></NavLink>
      </form>
    </div>
  </div>
</dialog>


                
                 </div>
              </div>
           </div>


           <div>
           <Link to="/dashboard/profile"><button className="text-[#2397C8]  w-[100px] h-[39px] text-semibold bg-[#E4F2F8]">My Profile</button></Link>
           <button className="text-[#2397C8]  w-[100px] h-[39px] text-semibold bg-[#E4F2F8]">Log Out</button>
           </div>
        </div>
    );
};

export default Accounting;