import React from 'react'
import axios from 'axios';

const CustomHooks = (url) => {
    let [state, SetState] = React.useState([]);
    React.useEffect(()=>{
    let fetchData = async()=>{
        try{
        let cachePost = localStorage.getItem("state");
        if(cachePost){
            SetState(JSON.parse(cachePost));
        }else{
          let response= await axios.get(url);
          SetState(response.data);
          localStorage.setItem("state", JSON.stringify(response.data))
        }
        }catch(e){
        console.log(e.message)
        }
    }
    fetchData()
    },[url]);

  return state;
}

export default CustomHooks
