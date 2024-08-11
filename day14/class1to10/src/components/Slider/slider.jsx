import React from "react";

const Slider = ({images}) => {
    const [data, SetData] = React.useState(0);

    const prevState = ()=>{
        SetData((prevImg)=>{
            prevImg === prevImg-1 ? 0: prevImg+1;
        })
    }

    const nextState = ()=>{
        SetData((prevImg)=>{
            prevImg ===  0 ? prevImg: prevImg-1;
        })
    }
  return (
    <div>
        <h2> tTis is A Slider</h2>
    </div>
  )
}

export default Slider;
