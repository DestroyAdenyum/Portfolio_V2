import React from "react";

import ContactForm from "../Components/ContactForm";

function Contact() {
    return (
        <section id="contact" className="flex flex-col items-center justify-center h-screen">
            <h3 className="text-2xl font-protest text-white text-center m-5">Contactez-moi</h3>
            <ContactForm />
        </section>
    )
}

export default Contact;
