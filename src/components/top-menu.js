import './top-menu.css'

import { useState, useEffect } from "react";

function Menu() {
  const [visibility, setvisibility] = useState("hidden")
  window.addEventListener("scroll",(event)=>{
    if(window.pageYOffset> 300){
      setvisibility("visible")
    }else{
      setvisibility("hidden")
    }
  })

  return (
    <>
      <div id="menu"className="menu">
        <div className='tooltip'><a href='/'><i className="fas fa-globe-americas"></i></a>
          <span className="tooltiptext">Home</span></div>
        <a href='#contatos'>Contatos</a>
      </div>

      <a className="go-top" href='#menu' style={{ visibility: visibility }}>^</a>
    </>
  );
}

export default Menu;
