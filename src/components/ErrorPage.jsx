import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
          <div className="min-h-screen flex  justify-around items-center bg-[#e8cbb7] px-[200px]">
           
           <img src="https://i.ibb.co/GctZLRw/b.gif" alt="wire-removebg-preview" width={350} height={350}></img>
           <div>
           <div className="flex justify-center items-center gap-[-50px] h-[250px] bg-white" style={{ border: '2px solid black' }}>
           <img src="https://i.ibb.co/PzpMFC4/Untitled-design-1.png" alt="wire-removebg-preview" width={200} height={200}></img>
           <img src="https://i.ibb.co/mNghfKk/download.gif" alt="wire-removebg-preview" width={200} height={200}></img>
           <img src="https://i.ibb.co/PzpMFC4/Untitled-design-1.png" alt="wire-removebg-preview" width={200} height={200}></img>
           </div>
           {/* <p className='text-center text-[30px] text-[#9E7051] font-bold mt-[40px]'>Sorry Something Went Wrong</p> */}
           <p className='text-center text-[30px] text-black font-bold my-[40px]'>PAGE NOT FOUND</p>
           <div className='flex justify-center items-center'>
           <Link href="/">
           <button className="bg-white hover:bg-[#9E7051] text-black font-bold py-2 px-4  focus:outline-none focus:shadow-outline " style={{ border: '1px solid black' }}>Go back to home page</button>
           </Link>
           </div>
          
           </div>
         <div>
         
         </div>
       </div>
        </div>
    );
};

export default ErrorPage;