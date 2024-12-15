import Counter from "../Animation/Counter";


 
const DynamicPlate = () => {
    return (
        <div className="max-w-[1400px] bg-[#016551]  px-10 py-2 flex-col md:flex-row flex justify-evenly ">

        <div className="flex items-center justify-start">
           
             <Counter end="9" suffex="%" duration="2000"></Counter>
            <div className="text-[#f8f9fa] font-normal text-sm p-5 leading-5"> Success in finding jobs on job Stock Platform</div>
        </div>

        <div className="flex items-center justify-start">
            {/* <div className="text-[56px] font-semibold text-[#f8f9fa]">68X</div> */}
            <Counter end="68" suffex="X" duration="2000"></Counter>
           
            <div className="text-[#f8f9fa] font-normal text-sm p-5 leading-5">Potential increase traffice rather than Job stock website.</div>
        </div>

        <div className="flex items-center justify-start">
            {/* <div className="text-[56px] font-semibold text-[#f8f9fa]">25K</div> */}
            <Counter end="25" suffex="K" duration="2000"></Counter>
            
            <div className="text-[#f8f9fa] font-normal text-sm p-5 leading-5">Thousands of companies work with us with partnership</div>
        </div>

        <div className="flex items-center justify-start">
            {/* <div className="text-[56px] font-semibold text-[#f8f9fa]">25K</div> */}
            <Counter end="25" suffex="K" duration="2000"></Counter>
           
            <div className="text-[#f8f9fa] font-normal text-sm p-5 leading-5">Happy customers in all over world with our services</div>
        </div>

        </div>
    );
};

export default DynamicPlate;