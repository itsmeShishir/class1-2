import React, {useState, useRef} from "react";
import "./slider.css";

const Slider = ({images}) => {
    const shsihri = useRef();
    const [data, setdata] = useState(0);
    console.log("data info")
    
    const nextSlide = () => {
        setdata((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    };

    const prevSlide = () => {
        shsihri.current.style.backgroundColor="yellow";

        setdata((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );

    };
//scrollintoview({behavoir:smmoth})
  return (
    <div>
       <button onClick={nextSlide}>+</button>
       <div>
        <img src={images[data]} alt="" style={{objectFit:"fill", width:"3000px", height:'450px'}}/>
       </div>
       <button ref={shsihri} onClick={prevSlide} style={{backgroundColor:"red"}}>-</button>
    </div>
  )
}

export default Slider;
