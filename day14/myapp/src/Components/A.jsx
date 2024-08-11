import { createContext } from 'react'
import B from "./B.jsx"
const Firstname = createContext();
const A = (props) => {
  return (
    <div>
      <Firstname.Provider value="Ram">
        <B/>
      </Firstname.Provider>
    </div>
  )
}

export default A;
export {Firstname}
