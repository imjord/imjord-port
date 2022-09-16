import React, {useState} from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

   

  return (
    <div className='form-container'>
     <form action="https://formsubmit.co/aff5927f7608eeb2eae8e14b2a3322ae" method="POST">
      {/* formsubmit */}
    <label>
      <p className='form-title'> Your Name. </p>
      <input id="input" type="text" name="name" placeholder='Name.' onChange={((e) => setName(e.target.value))} />
    </label>
    <label>
      <p className='form-title'> Your Email. </p>
      <input id="input" type="email" name="email" placeholder='Email.' onChange={((e) => setEmail(e.target.value))} />
    </label>
    <label>
      <p className='form-title'>Your Message. </p>
      <textarea id="textarea" name='message' placeholder='Write Me.' onChange={((e) => setMessage(e.target.value))}></textarea>
      <button type="submit" value="Submit" onSubmit={handleSubmit} >Submit .</button>
      <input type="hidden" name="_next" value="http://localhost:3000/" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_autoresponse" value="Thank you for messaging me! I will get back to you shortly!"></input>
    </label>
  </form>
    </div>
    
  )
}

export default Form