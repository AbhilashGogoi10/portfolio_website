import React from "react";
import "./header.css";
import CTA from "./CTA";


// import HeaderSocials from "./HeaderSocials";
import { BsFillFileArrowDownFill } from "react-icons/bs";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {
  const [text] = useTypewriter({
    words: [" Abhilash Gogoi", 'A Full Stack Developer.'],
    loop: {},
  });
  return (
    <header>
    
      <div className=" container header__container">
        {/* <h2>Hello I'm</h2>
      <h1>Abhilash Gogoi</h1>
      <h3 className="text-light">A Full Stack Developer</h3> */}
      
       <h2>
          Hello I'm
         </h2> 
         
        {/* <h3 className="text-light">{text}<Cursor/></h3>  */}
        <h1>{text}<Cursor/></h1> 
        <hr />
        <CTA />
        {/* <HeaderSocials /> */}
       

       {/* <div className="me">
         <img src={ww} alt="me" />
       </div> */}
        

       <a href="#contact" className="scroll__down">
         <BsFillFileArrowDownFill />
       </a>
       <div className="cta">
  
       </div>
      
      </div>
       
       
    </header>
  );
};

export default Header;
