 import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import logo from '../assets/image/logo/only_logo.jpg';
import { FaInbox, FaInternetExplorer } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer bg-[#001F2C] text-base-content p-10">
  <aside>
   <div className="flex items-center gap-2">
    <img className='w-[50px]' src={logo} alt="" />
     <h2 className='text-3xl text-white'>Job Hunter</h2>
   </div>
    <p className='text-[#557685] text-[13px] font-medium'>
     Dakshin Gouripur, Amtala <br/> Kolkata, WB - 743503
    </p>

    <div className="social flex gap-2 mt-5">
        <NavLink to='' className='p-2 hover:bg-[#7BBD15] hover:text-white cursor-pointer shadow-md rounded-sm bg-[#557685]'><FaFacebook className='hover:text-white '></FaFacebook></NavLink>
        <NavLink to='' className='p-2 hover:bg-[#7BBD15] hover:text-white cursor-pointer shadow-md rounded-sm bg-[#557685]'><FaInbox className='hover:text-white '></FaInbox></NavLink>
        <NavLink to='' className='p-2 hover:bg-[#7BBD15] hover:text-white cursor-pointer shadow-md rounded-sm bg-[#557685]'><FaTwitter className='hover:text-white '></FaTwitter></NavLink>
        <NavLink to='' className='p-2 hover:bg-[#7BBD15] hover:text-white cursor-pointer shadow-md rounded-sm bg-[#557685]'><FaLinkedinIn className='hover:text-white '></FaLinkedinIn></NavLink>
        <NavLink to='' className='p-2 hover:bg-[#7BBD15] hover:text-white cursor-pointer shadow-md rounded-sm bg-[#557685]'><FaInternetExplorer className='hover:text-white '></FaInternetExplorer></NavLink>
    </div>
  </aside>


  <nav>
    <h6 className="footer-title text-white text-[15px] font-semibold">For Clients</h6>

   <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">Talent Marketplace</a>
    <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">Payroll Services    </a>
    <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">Direct Contracts</a>
    <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">Hire Worldwide</a>
    <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">Hire in the USA</a>
    <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">How to Hire</a>
  </nav>



  <nav>
    <h6 className="footer-title text-white text-[15px] font-semibold">Our Resources</h6>

   <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">Talent Marketplace</a>
    <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">Payroll Services    </a>
    <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">Direct Contracts</a>
    <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">Hire Worldwide</a>
    <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">Hire in the USA</a>
    <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">How to Hire</a>
  </nav>


   <nav>
    <h6 className="footer-title text-white text-[15px] font-semibold">The Company</h6>

   <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">Talent Marketplace</a>
    <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">Payroll Services    </a>
    <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">Direct Contracts</a>
    <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">Hire Worldwide</a>
    <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">Hire in the USA</a>
    <a className=" text-[13px] font-medium cursor-pointer hover:text-white text-[#557685]">How to Hire</a>
  </nav>
  <br/>

  


</footer>
    );
};

export default Footer;