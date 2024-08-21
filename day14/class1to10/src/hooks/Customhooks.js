import React from 'react'
import axios from 'axios';

const CustomHooks = (url) => {
    let [state, SetState] = React.useState([]);
    React.useEffect(()=>{
    let fetchData = async()=>{
        try{
        let response= await axios.get(url)
        console.log(response.data)
        return SetState(response.data)
        }catch(e){
        console.log(e.message)
        }
    }
    fetchData()
    },[url]);

  return state;
}

export default CustomHooks
