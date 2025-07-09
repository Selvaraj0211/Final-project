import React, { useState } from 'react';
import Nav from './Nav';
import About from './About';
import axios from 'axios'


const Contact = () => {
const [name, setname] = useState("");
const [cus, setcus] = useState("");
const [msg, setmsg] = useState("");
const [sts, setsts] = useState(false);



const handleclick = async (e)=>{
 e.preventDefault();
    setsts(true)

    const response = await axios.post("http://localhost:8080/sendmail", { msg: msg, cus: cus, name: name })
      .then((data) => {
        if (data.status === 200) {
          alert("Email send successfully")
          console.log('email send')
          setsts(false)
        } else {
          alert("Failed")
          console.log('email send failed')
        }

      })

}

  return (
    <>
    <div className='mb-16'><Nav/></div>
    
    
    <div className=" bg-gradient-to-br from-blue-50 to-indigo-50 py-10 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions about our furniture collections or services? Reach out to us — we'd love to hear from you!
          </p>
          <ul className="space-y-4 text-gray-700">
            <li><strong>📍 Address:</strong> 123 Furniture Street, Chennai, India</li>
            <li><strong>📞 Phone:</strong> +91 98765 43210</li>
            <li><strong>✉️ Email:</strong> support@luxehome.com</li>
            <li><strong>🕒 Working Hours:</strong> Mon - Sat, 10:00 AM - 7:00 PM</li>
          </ul>
        </div>

        
        <form className="bg-white shadow rounded p-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Send a Message</h3>
          <input
          onChange={(e)=>{setname(e.target.value)}}
            type="text"
            placeholder="Your Name"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
          onChange={(e)=>{setcus(e.target.value)}}
            placeholder="Your Email"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <textarea
            placeholder="Your Message"
          onChange={(e)=>{setmsg(e.target.value)}}
            rows="5"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          ></textarea>
          <button
          onClick={handleclick}
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
<div className='-mt-16'>
    <About/>

</div>
    </>

  );
};

export default Contact;
