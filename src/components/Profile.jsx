const Profile = () => {

    return (
      <div>
        <p className="text-[25px] text-[#494949] font-bold m-[20px] font-a">Profile Information</p>
        <div className="mx-[500px] my-[50px]">
        <img className="rounded-full w-[120px] h-[120px]" src="https://i.ibb.co.com/L90dHBC/9a6d99d80d092eb8a05175abb8017e7d.jpg"></img>
        <div >
        <div className="mt-[10px] ">
        <p className="text-[#868686] font-semibold text-[16px]">Full Name</p>
        <p className=" font-semibold text-[16px]" >Aminul Islam</p>
        </div>
        <div className="mt-[10px]">
        <p className="text-[#868686] font-semibold text-[16px]">Position</p>
        <p className=" font-semibold text-[16px]">Accounts Manager</p>
       </div>
        <div className="mt-[10px]">
        <p className="text-[#868686] font-semibold text-[16px]">Gender</p>
        <p className=" font-semibold text-[16px]">Male</p>
        </div>
        <div className="mt-[10px]">
        <p className="text-[#868686] font-semibold text-[16px]">Date Of Birth</p>
        <p className=" font-semibold text-[16px]">24-11-2000</p>
        </div>
        <div className="mt-[10px]">
        <p className="text-[#868686] font-semibold text-[16px]">Email</p>
        <p className=" font-semibold text-[16px]">aminulislam@gmail.com</p>
        </div>
        <div className="mt-[10px]">
        <p className="text-[#868686] font-semibold text-[16px]">Employee ID</p>
        <p className=" font-semibold text-[16px]">19982000</p>
        </div>
        </div>
        </div>
      </div>
);
};

export default Profile;