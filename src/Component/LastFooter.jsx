 
import CounterFooter from "../Animation/CounterFooter";





const LastFooter = () => {
    return (
        <div className="flex-col space-y-3 flex md:flex-row  justify-between items-center p-10  bg-[#001F2C] ">
            <p className="text-white text-[13px] font-medium">© 2015 - 2023 Job Stock® Themezhub.</p>
            <div className="flex gap-11">
                <div >
                  <CounterFooter end="12" duration="2000" suffex="K"></CounterFooter>
                    <p className="text-center ml-[-25px] text-[#557685]">Job Posted</p>
                </div>
                <div>
                 
{/*                
                <span className="text-white text-[20px] font-bold">2</span> 
                <span className="text-[#7bbd15] text-[17px] font-semibold">M</span> */}
                <CounterFooter end="10" duration="2000" suffex="M"></CounterFooter>
                <p className="text-[#557685] ml-[-25px]">Happy Customar</p>
                </div>
                <div>
                {/* <span className="text-white text-[20px] font-bold">16</span> 
                <span className="text-[#7bbd15] text-[17px] font-semibold">K</span> */}
                <CounterFooter end="76" duration="2000" suffex="K"></CounterFooter>
                
                <p className="text-[#557685] ml-[-25px]">Freelancer</p>
                </div>
                <div>
                {/* <span className="text-white text-[20px] font-bold">43</span> 
                <span className="text-[#7bbd15] text-[17px] font-semibold">+</span> */}
                <CounterFooter end="200" duration="2000" suffex="+"></CounterFooter>
                
                <p className="text-[#557685] ml-[-25px]">Companies</p>
                </div>

            </div>
        </div>
    );
};

export default LastFooter;
