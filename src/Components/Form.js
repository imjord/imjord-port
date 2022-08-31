import React, {useState} from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Function fired")
    }

  return (
    <div className='form-container'>
        <form>
    <label>
      <p className='form-title'> Your Name . </p>
      <input id="input" type="text" name="name" placeholder='Name...' />
    </label>
    <label>
      <p className='form-title'> Message . </p>
      <textarea id="textarea" placeholder='Please Write Me A Message :)'></textarea>
      <button type="submit" value="Submit" onSubmit={handleSubmit} >Submit .</button>

    </label>
  </form>
    </div>
    
  )
}

export default Form