import React, { useState } from "react";

function Form() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    message:""
  });

  function handleChange(event) {
    // destructuring code
    const { value, name } = event.target;

    // update the contact
    setContact((prevValue) => {
      // check the condition of fName, lName and email
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="form-container">
      <h1 className="form-heading">
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <textarea 
            onChange={handleChange}
            name="message"
            placeholder="Feel free to message me"
            value={contact.message}

        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
