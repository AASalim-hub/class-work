import { useState } from "react";

function Form() {
  const [info, setInfo] = useState({
    firstName: "",
    secondName: "",
    username: "",
    gender: "",
    phoneNumber: "",
    message: "",
    interests: []
  });


  const handleChange = (event) => {
    const { name, value } = event.target;

    setInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    setInfo((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((item) => item !== value)
    }));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(info);
  };

  return (
    <form onSubmit={handleSubmit}>

      
      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={handleChange}
      />

      <br /><br />

      
      <label>Second Name</label>
      <input
        type="text"
        name="secondName"
        value={info.secondName}
        onChange={handleChange}
      />
      <br /><br />

      
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={info.username}
        onChange={handleChange}
      />
      <br /><br />

      
      <p>Gender</p>

      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={info.gender === "Male"}
          onChange={handleChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={info.gender === "Female"}
          onChange={handleChange}
        />
        Female
      </label>
      <br /><br />

      
      <label>Phone Number</label>
      <input
        type="tel"
        name="phoneNumber"
        value={info.phoneNumber}
        onChange={handleChange}
      />
      <br /><br />

      <label>Message</label>
      <textarea
        name="message"
        value={info.message}
        onChange={handleChange}
      />

      <br /><br />

      <p>Select the course you would like to enrol with us </p><br />

      <label>
        <input
          type="checkbox"
          value="Web Development"
          checked={info.interests.includes("Web Development")}
          onChange={handleCheckboxChange}
        />
        Web Development
      </label>

      <label>
        <input
          type="checkbox"
          value="Cyber Security"
          checked={info.interests.includes("Cyber Security")}
          onChange={handleCheckboxChange}
        />
        Cyber Security
      </label>

      <label>
        <input
          type="checkbox"
          value="Data Analytics"
          checked={info.interests.includes("Data Analytics")}
          onChange={handleCheckboxChange}
        />
        Data Analytics
      </label>

      <br /><br />

      <button type="submit">Submit</button>

    </form>
  );
}

export default Form;
