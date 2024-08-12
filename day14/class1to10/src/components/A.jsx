import { createContext, useContext } from 'react'
import B from './B'
const Firstnames = createContext();

const A = () => {
  return (
    <div>
        <Firstnames.Provider value="shsihir">
            <B />
        </Firstnames.Provider>
      
    </div>
  )
}

export default A
export {Firstnames}
