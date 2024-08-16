import { useNavigate } from 'react-router-dom'
const CustomButton = () => {
    const navigate = useNavigate();

    const GoBack = () =>{
        navigate("/")
    }
  return (
    <button onClick={GoBack}>    
      GO BACK TO Home
    </button>
  )
}

export default CustomButton
