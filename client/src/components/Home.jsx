import { useState } from "react";
import React from "react";

const Home = () => {
    const [iconClass, seticonClass] = useState('far fa-heart')

    const Like = ()=>{
        seticonClass('fas fa-heart')
    }
  return (
    <React.Fragment>
      <button style={{background:'transparent',border:'none',cursor:'pointer'}} onClick={Like()}>
        <i class={iconClass}></i>
      </button>
    </React.Fragment>
  );
};

export default Home;
