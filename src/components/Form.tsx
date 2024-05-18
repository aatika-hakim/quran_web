import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
    const [name, setName] = useState("");
    const [contact, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameErrorMessage, setNameErrorMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const nameValue = event.target.value;
        setName(nameValue);

        if (nameValue.length < 3) {
            setNameErrorMessage("Name must be at least 3 characters.");
        } else {
            setNameErrorMessage("");
        }
    };

    const handleContactChange = (event: ChangeEvent<HTMLInputElement>) => {
        const countryValue = event.target.value;
        setCountry(countryValue);
    }

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const emailValue = event.target.value;
        setEmail(emailValue);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(emailValue)) {
            setEmailErrorMessage("");
        } else {
            setEmailErrorMessage("Invalid email. Please enter correct email.");
        }
    };

    const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const messageValue = event.target.value;
        setMessage(messageValue);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!name || !contact || !email || !message) {
            setErrorMessage("Please fill out all fields.");
            return;
        }

        // Validation logic for email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!(emailRegex.test(email))) {
            setEmailErrorMessage("Invalid email.");
            return;
        }

        // Send email using emailjs
        try {
            await emailjs.sendForm(
                'YOUR_EMAILJS_SERVICE_ID',
                'YOUR_EMAILJS_TEMPLATE_ID',
                event.currentTarget,
                'YOUR_EMAILJS_USER_ID'
            );

            // Clear form fields
            setName("");
            setCountry("");
            setEmail("");
            setMessage("");
            // Display alert or redirect to a success page
            alert("Your request has been sent!");
            setErrorMessage("");
            setEmailErrorMessage(""); // Clear any previous error message
        } catch (error) {
            console.error("Error sending email:", error);
            setErrorMessage("Error sending email. Please try again later.");
        }
    };

    return (
        <div id="register" className="max-w-3xl p-6 bg-white rounded-sm items-end shadow-2xl sm:p-6 md:p-8 dark: dark:border-gray-700 overflow-hidden">
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className='grid grid-col-1 lg:grid-cols-2 gap-4 mb-4'>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="border border-gray-300 text-gray-900 text-sm rounded-sm items-end focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                        {nameErrorMessage && <div className="text-red-500 text-sm">{nameErrorMessage}</div>}
                    </div>
                    <div>
                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Whatsapp Number
                        </label>
                        <input
                            type="text"
                            id="contact"
                            placeholder="+92 00000000"
                            className="border border-gray-300 text-gray-900 text-sm rounded-sm items-end focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            value={contact}
                            onChange={handleContactChange}
                            required
                        />
                    </div>
                </div>
                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="example@gmail.com"
                        className="border border-gray-300 text-gray-900 text-sm rounded-sm items-end focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    {emailErrorMessage && <div className="text-red-500 text-sm">{emailErrorMessage}</div>}
                </div>
                {/* Message Input */}
                <div>
                    <label htmlFor="message" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Your message goes here"
                        className="border border-gray-300 text-gray-900 text-sm rounded-sm items-end focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark: dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        rows={5}
                        value={message}
                        onChange={handleMessageChange}
                        required
                    />
                </div>
                <div className="text-red-500 text-sm">
                    {errorMessage && <div>{errorMessage}</div>}
                    <button onClick={()=> handleSubmit} className="text-white rounded-sm shadow-inner bg-gradient-to-br from-teal-500 to-teal-600 hover:bg-gradient-to-bl font-medium text-lg px-10 py-2.5 justify-center">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
