import React,{useRef, useReducer} from "react";
import ImageSlider from "./ImageSlider";
import A from "./Components/A.jsx"
const images = [
  "https://images.unsplash.com/photo-1722648404131-a69c35a706fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1722622102706-11fa64793029?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1722686519091-886edbd87f7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723104261414-faabba18c090?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
];
const initialState ={count: 0};

function reducer(state,action){
  switch(action.type){
    case "inc":
      return {count: state.count+1}
    case "dec":
      return {count: state.count-1}
    default:
      throw new Error()
  }
}
function App() {
  const [state, dispath] = useReducer(reducer,initialState)
  return (
    <div className="App">
      <h1>Image Slider</h1>
      <ImageSlider images={images} />
      <A/>
      <h1>Count: {state.count}</h1>
      <button onClick={()=>dispath({type: 'inc'})}>+</button>
    </div>
  );
}

export default App;
