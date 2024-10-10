import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Home = () => {

    const data = [
        {
          name: 'January',
          Debit: 127,
          Credit: 192,
          amt: 400,
        },
        {
          name: 'February',
          Debit: 161,
          Credit: 200,
          amt: 210,
        },
        {
          name: 'March',
          Debit: 229,
          Credit: 200,
          amt: 290,
        },
        {
          name: 'April',
          Debit: 119,
          Credit: 219,
          amt: 200,
        },
        {
          name: 'May',
          Debit: 150,
          Credit: 187,
          amt: 181,
        },
        {
          name: 'June',
          Debit: 120,
          Credit: 190,
          amt: 500,
        },
        {
          name: 'July',
          Debit: 200,
          Credit: 220,
          amt: 100,
        },
        {
          name: 'August',
          Debit: 250,
          Credit: 200,
          amt: 200,
        },
        {
          name: 'September',
          Debit: 203,
          Credit: 180,
          amt: 300,
        },
        {
          name: 'October',
          Debit: 175,
          Credit: 200,
          amt: 400,
        },
        {
          name: 'November',
          Debit: 100,
          Credit: 200,
          amt: 200,
        },
        {
          name: 'December',
          Debit: 100,
          Credit: 200,
          amt: 100,
        },
      ];

      
return(
    <div >
        <div className='mx-[50px]'>
            <div className="flex justify-around item-center gap-[10px] my-[20px]">
              <div className="w-[350px] h-[161px] bg-[#F6DBDB] p-[20px] rounded-[8px]">
                <p className="font-a text-[#FF5F5F] text-right text-[24px] font-bold">20,700 TK</p>
                <p className="font-a text-[#868686] text-[20px] font-semibold mt-[20px]">Total Debit</p>
                <p className="font-a text-[#5E5E5E] text-[14px]">This Month</p>
              </div>
              <div className="w-[350px] h-[161px] bg-[#E0F6DB] p-[20px] rounded-[8px]">
                <p className="font-a text-[#21DF10] text-right text-[24px] font-bold">31,700 TK</p>
                <p className="font-a text-[#868686] text-[20px] font-semibold mt-[20px]">Total Credit</p>
                <p className="font-a text-[#5E5E5E] text-[14px]">This Month</p>
              </div>
              <div className="w-[350px] h-[161px] bg-[#F6EBDB] p-[20px] rounded-[8px]">
                <p className="font-a text-[#E49700] text-right text-[24px] font-bold">34,200 TK</p>
                <p className="font-a text-[#868686] text-[20px] font-semibold mt-[20px]">Total Amount</p>
                <p className="font-a text-[#5E5E5E] text-[14px]">This Month</p>
              </div>
            </div>



            {/* //rechart */}
            <div className='w-full h-[640px] bg-[#F6F6F6] rounded-[8px]'>
              <div className='flex justify-between item-center'>
              <p className='text-[#4E4E4E] text-[20px] font-semibold py-[30px] px-[30px]'>Yearly Account Analysis</p>
              <select type="text" name="category" className="w-[100px] h-[45px] rounded-[4px] my-[30px] mx-[30px] text-[#6D6D6D] text-[16px] px-[2px] bg-[#E5E5E5]">
                       <option disabled selected >Year</option>
                       <option>Year 2024</option>
                       <option>Year 2023</option>  
                </select>
              </div>
            <BarChart
          width={1100}
          height={500}
          data={data}
          margin={{
            top: 50,
            right: 0,
            left: 5,
            bottom: 5,
            gap:30
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Debit" fill="#FF8E5E" barSize={10}/>
          <Bar dataKey="Credit" fill="#52E30E" barSize={10}/>
        </BarChart>
            </div>
</div>
    </div>

);

};
export default Home;