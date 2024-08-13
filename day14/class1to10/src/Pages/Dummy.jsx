import {useReducer} from 'react'

export default function Dummy() {
    let initvalue = {count: 0};
    function reducer( state, action){
        switch(action.type){
            case "inc":
                return {count: state.count + 1}
            case "dec":
                return {count: state.count -1 }
            default:
                throw new Error
        }
    }
    const [state, dispatch] = useReducer(reducer, initvalue)
    console.log(state)
    console.log(dispatch)
    console.log(initvalue)
  return (
    <div>
    <h1>{state.count}</h1>
    <button onClick={()=> dispatch({type: "inc"})}>+</button>
    <button onClick={()=> dispatch({type: "dec"})}>-</button>
    </div>
  )
}
