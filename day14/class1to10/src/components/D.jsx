import { useContext } from "react"
import { Firstnames } from "./A"
const D = () => {
    const firstname = useContext(Firstnames);
    return (
        <div>
        D: {firstname}
        </div>
    )
}

export default D
