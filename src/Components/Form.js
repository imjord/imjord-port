import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="form-container">
      <form
        action="https://formsubmit.co/aff5927f7608eeb2eae8e14b2a3322ae"
        method="POST"
      >
        {/* formsubmit */}
        <label>
          <p className="form-title"> Your Name. </p>
          <input
            id="input"
            type="text"
            name="name"
            placeholder="Name."
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <p className="form-title"> Your Email. </p>
          <input
            id="input"
            type="email"
            name="email"
            placeholder="Email."
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p className="form-title">Your Message. </p>
          <textarea
            id="textarea"
            name="message"
            placeholder="Write Me."
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" value="Submit">
            Submit .
          </button>
          <input
            type="hidden"
            name="_next"
            value="https://imjord.github.io/imjord-port/"
          />
          <input
            type="hidden"
            name="_blacklist"
            value="spammy pattern, banned term, phrase"
          ></input>
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for reaching out to me! I'll get to your message shortly! auto response from imjord_portfolio"
          />
        </label>
      </form>
    </div>
  );
};

export default Form;
