import React from 'react'

const Contact = () => {
    const [data, SetData] = React.useState(
    { 
      name : "",
      email:"",
      number : "",
      description: "",
    }
    )
    function submits(e){
      e.preventDefault();
      alert(`${data.name} and ${data.number}`)
    }
    function handleChange(event){
        const {name, value} = event.target;
        SetData((fetchData)=>({
          ...fetchData,
          [name]: value
        }))
    }
  return (
    <div>
      <form onSubmit={submits}>
        <label htmlFor='name'> Name </label>
        <input name='name' value={data.name} onChange={handleChange} type='text' placeholder='name'/>
        <input name='number' value={data.number} onChange={handleChange} type='number' placeholder='Phone Number'/>
        <input name='email' value={data.email} onChange={handleChange} type='email' placeholder='email'/>
        <textarea name='description' value={data.description} onChange={handleChange} placeholder='Desciption'/>
        <button type='submit'>Submit </button>
      </form>
    </div>
  )
}

export default Contact
