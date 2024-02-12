import React from "react";

import ContactForm from "../Components/ContactForm";

function Contact() {
    return (
        <section id="contact" className="w-screen flex flex-col items-center justify-center h-screen">
            <h3 className="text-2xl font-protest text-white text-center m-5">Contactez-moi</h3>
            <ContactForm />
            <div className="flex flex-row gap-5 mt-10 mb-10">
                <a className="text-3xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" href="https://github.com/DestroyAdenyum" target="_blank" rel="noreferrer" ><span><i className="fa-brands fa-github"></i></span></a>
                <a className="text-3xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" href="https://www.linkedin.com/in/marie-charlotte-levitre" target="_blank" rel="noreferrer"><span><i className="fa-brands fa-linkedin-in"></i></span></a>
            </div>
        </section>
    )
}

export default Contact;
