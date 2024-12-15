
import { useState } from 'react';
import dev1 from '../assets/image/Developer/pepole.webp';
const ClientSays = () => {

    const developers = [
        {
          name: 'Chad B. Werner',
          title: 'Web Designer',
          description: 'The wise man therefore always circumstances and owing to the claims of duty or the obligations holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
          image: 'path_to_image1',
        },
        {
          name: 'Sandipan Kumar bag',
          title: 'Web Developer',
          description: 'The wise man therefore always circumstances and owing to the claims of duty or the obligations holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
          image: 'path_to_image2',
        },
        // Add more developer objects as needed
      ];


    const [selectDeveloper, setSelectDeveloper] = useState(developers[0]);


      

    //    developer info function
    const handelDevInfo = (developer) => 
    {
        setSelectDeveloper(developer);
    }




    return (
        <div className="w-full bg-white py-10">

            <div className="flex flex-col justify-center items-center pt-10 space-y-5">
                <h2 className="text-[#05264e] text-[35px] font-extrabold">What Our Clients Says</h2>
                <p className="text-[#4f5e64] text-sm font-normal max-w-[500px] text-center leading-7">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>


                <div className="text-center  text-[#4f5e64] font-light text-xl max-w-[700px] pt-10 leading-10">
                    {/* The wise man therefore always circumstances and owing to the claims of duty or the obligations holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. */}
                    {selectDeveloper.description}
                </div>

                <div className="space-y-1">
                    <h1 className="text-center font-semibold text-xl text-[#4f5e64]">
                        {/* Chad B. Werner */}
                        {selectDeveloper.name}
                        </h1>
                    <p className="text-center font-medium text-sm text-[#1ca774]">
                    {selectDeveloper.title}
                        </p>
                </div>



                <div className="developer_image py-12 flex space-x-5">
                    
                    {
                        developers.map((developer,index)=> 
                        (
                        <img key={index} onClick={()=>handelDevInfo(developer)} className={`w-28 h-28 rounded-full border-[12px] cursor-pointer  ${selectDeveloper === developer ? 'border-b-green-500 border[1px]': ''}`} src={dev1} alt="" />)
                        )
                    }

                    {/* <img className="w-28 h-28 rounded-full border-[12px] cursor-pointer hover:border[1px] hover:border-b-green-500" src={dev1} alt="" />
                    <img className="w-28 h-28 rounded-full border-[12px] cursor-pointer hover:border[1px] hover:border-b-green-500" src={dev1} alt="" />
                    <img className="w-28 h-28 rounded-full border-[12px] cursor-pointer hover:border[1px] hover:border-b-green-500" src={dev1} alt="" />
                    <img className="w-28 h-28 rounded-full border-[12px] cursor-pointer hover:border[1px] hover:border-b-green-500" src={dev1} alt="" /> */}
                </div>


            </div>




        </div>
    );
};

export default ClientSays;