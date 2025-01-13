import React from 'react'
import './Contact.css'
import message from '../../assets/message.png'
import email from '../../assets/email.png'
import telephone from '../../assets/telephone.png'
import locations from '../../assets/locations.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9de6b45f-33bc-4af6-af72-fb395b01217f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3> Send us a message <img src={message} alt=""></img></h3>
            <p> At IOF Private Limited, we value collaboration and innovation. Whether you’re 
                seeking to optimize your operations, explore advanced algorithmic solutions, or 
                discuss potential partnerships, our team is here to help. Reach out to us with your 
                inquiries, project ideas, or feedback, and let us work together to revolutionize industry 
                practices and drive innovation.</p>
            <ul>
                <li><img src={email} alt="" />ZUXI.23@ichat.sp.edu.sg</li>
                <li><img src={telephone} alt="" />+65 XXXX-XXXX</li>
                <li><img src={locations} alt="" />ADDRESS</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>First Name</label>
                <input type="text" name='first_name' placeholder='Enter your First Name' required/>
                <label>Last Name</label>
                <input type="text" name='last_name' placeholder='Enter your Last Name' required/>
                <label>Company/Organization</label>
                <input type="text" name='company' placeholder='Enter your Company or Organization' required/>
                <label>Business Email</label>
                <input type="email" name="email" placeholder='Enter your Business Email' required/>
                <label>Solution of Interest</label>
                <textarea name="message" rows="6" placeholder='Enter your Solution of Interest' required></textarea>
                <button type='submit' className='btn darkl-btn'>Submit</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact