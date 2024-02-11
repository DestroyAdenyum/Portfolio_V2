import React, { useState } from "react";

import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init('REACT_APP_EMAILJS_USER_ID');

function ContactForm() {

    const [ formData, setFormData ] = useState({
        email: '', 
        firstName: '', 
        lastName: '', 
        subject: '', 
        message: ''
      });

    const handleChange = (e) => setFormData({...formData, [e.target.id]: e.target.value});

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          formData,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then((result) => {
          setFormData({
            email: '', 
            firstName: '', 
            lastName: '', 
            subject: '', 
            message: ''
          });
          console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      };

    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log(process.env.REACT_APP_EMAILJS_USER_ID);

    return (
        <form className="w-full max-w-lg" onSubmit={sendEmail}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label 
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2" 
                        htmlFor="lastName"
                    >
                        Nom
                    </label>
                    <input 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        type="text"
                        id="lastName" 
                        name="lastName"
                        placeholder="Doe"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label 
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2" 
                        htmlFor="firstName"
                    >
                        Prénom
                    </label>
                    <input 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        type="text"
                        id="firstName" 
                        name="firstName"
                        placeholder="John"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label 
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2" 
                        htmlFor="email"
                    >
                        E-mail
                    </label>
                    <input 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="email" 
                        type="email"
                        name="email"
                        placeholder="doe@exemple.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label 
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2" 
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea 
                        className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" 
                        id="message"
                        placeholder="Votre message ici!"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                    <button 
                        className="shadow bg-slate-800 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                        type="submit"
                        onClick={e => sendEmail(e)}
                    >
                        Envoyer
                    </button>
                </div>
                <div className="md:w-2/3"></div>
            </div>
        </form>
    )
}

export default ContactForm;
