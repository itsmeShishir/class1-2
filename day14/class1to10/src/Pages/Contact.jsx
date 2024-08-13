// import React from 'react'

const Contact = () => {
  return (
    <div>
      <form>
        <label htmlFor='name'> Name </label>
        <input name='name' type='text' placeholder='name'/>
        <input name='number' type='number' placeholder='Phone Number'/>
        <button type='submit'>Submit </button>
      </form>
    </div>
  )
}

export default Contact
