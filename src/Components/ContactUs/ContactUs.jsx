//Contact Us Page

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";


const contactMethods = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    contact: "educatorananth@gmail.com",
    href: "mailto:educatorananth@gmail.com",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    contact: "+91 89515 11111",
    href: "tel:+91 89515 11111",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    contact: "Surepass, #9, Second Floor, Next to Stock Holding, Manasa Towers, MG Road, Mangalore - 575003, Karnataka, India",
    href: "https://maps.app.goo.gl/nm6oJrVmMhzKm2xm9",
  },
];

const ContactUs = () => {
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const handleCaptchaChange = () => {
    setCaptchaChecked(true);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const navigate = useNavigate()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaChecked) {
      // If ReCAPTCHA is not checked, prevent form submission
      alert("Please complete the ReCAPTCHA verification.");
      return;
    }
    try {
      const response = await fetch("https://contact-us.branchselector.workers.dev/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Handle successful submission
        console.log("Form submitted successfully!");
        toast.success("Your message has been submitted!")

        navigate('/')
      } else {
        // Handle error
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="pb-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 ">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg py-10">
            <h3 className="text-indigo-600 font-semibold">Contact</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl mt-2 mb-3  ">
              Let us know how we can help
            </p>
            <p>
              We’re here to help and answer any question you might have, We look
              forward to hearing from you! Please fill out the form, or us the
              contact information bellow .
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-x-3 cursor-pointer"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex"
                    >
                      <div className="flex-none text-gray-400 mr-2">
                        {item.icon}
                      </div>
                      <p>{item.contact}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.549460552318!2d74.83667637827618!3d12.876674755019192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b2bfc57f253%3A0xa31ea1109925b56a!2sSURE%20PASS!5e0!3m2!1sen!2sin"
  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="mt-10 h-80 w-full">
</iframe>


          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Phone number</label>
                <input
                  title="Enter a valid 10 digit phone number"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  pattern="[1-9]{1}[0-9]{9}"
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <div className="flex items-start justify-center sm:justify-start mx-4 md:mx-0">
                <ReCAPTCHA
                  sitekey="6Le3tq0pAAAAAIVfl381LNT7XKGE3uWsjll_g2gY"
                  onChange={handleCaptchaChange}
                  className="scale-75 fel  md:scale-110  lg:scale-90 "
                />
              </div>
              <button type="submit" className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
