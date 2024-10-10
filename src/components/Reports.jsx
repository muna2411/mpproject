


const Reports = () => {
    return (
      <div className="mx-[100px]">
        <div className="flex justify-between item-center  mt-[60px]">
           <div><p className="text-[25px] text-[#5E5E5E] font-semibold">Daily Report</p></div>
           <div><input type="date" className=" my-[8px] px-[15px] text-[25px] text-[#5E5E5E] font-semibold" /></div>
        </div>

<div className="divider"></div>



<div className="w-[1000px] mt-[50px]">
      <table className="bg-[#EBEBEB] w-[1000px]">
        <thead>
          <tr className="bg-white text-left">
        
        <th className="py-[4px] px-[4px]">Serial</th>
        <th className="py-[4px] px-[4px]">Accounts Head</th>
        <th className="py-[4px] px-[4px]">Date</th>
        <th className="py-[4px] px-[4px]">Debit</th>
        <th className="py-[4px] px-[4px]">Credit</th>
          </tr>
        </thead>
        <tbody >
          <tr>
          <td className="py-[4px] px-[4px]">1</td>
            <td className="py-[4px] px-[4px]">Stationary</td>
            <td className="py-[4px] px-[4px]">26th April, 2024</td>
            <td className="py-[4px] px-[4px]">1,88,400</td>
            <td className="py-[4px] px-[4px]">-</td>

          </tr>
          <tr className="bg-white">
            <td className="py-[4px] px-[4px]" colSpan="5"></td> 
          </tr>
          <tr>
          <td className="py-[4px] px-[4px]">2</td>
            <td className="py-[4px] px-[4px]">Stationary</td>
            <td className="py-[4px] px-[4px]">26th April, 2024</td>
            <td className="py-[4px] px-[4px]">1,88,400</td>
            <td className="py-[4px] px-[4px]">-</td>
          </tr>
          <tr className="bg-white">
            <td className="py-[4px] px-[4px]" colSpan="5"></td> 
          </tr>
          <tr>
            <td className="py-[4px] px-[4px]">3</td>
            <td className="py-[4px] px-[4px]">Stationary</td>
            <td className="py-[4px] px-[4px]">26th April, 2024</td>
            <td className="py-[4px] px-[4px]">1,88,400</td>
            <td className="py-[4px] px-[4px]">-</td>
            
          </tr>
        </tbody>
      </table>
      </div>
      </div>
);
};

export default Reports;