import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

 

const Counter = ({end, duration, suffex}) => {

   const [count, setCount] = useState(0);

    const { ref, inView } = useInView({
        /* Optional options */
        triggerOnce:false,
        threshold: 0.5,
      });

      useEffect(()=>{
        if(inView)
        {
            let start = 0;
        let increment = end/(duration/100);
        const updateCount = ()=>
        {
            start += increment;
            if(start < end){
                setCount(Math.ceil(start));
                setTimeout(updateCount,100)
            }
            else{
                setCount(end);
            }
        }
        updateCount();
        }

        


      },[end,duration,inView])




    return (
       
             <div ref={ref} className="text-[56px] font-semibold text-[#f8f9fa]">
                {count}
                {suffex}

             </div>

     
    );
};

export default Counter;