import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import Buttons from "./Button";

const Registration: React.FC = () => {
    const [name, setName] = useState("");
    const [emailOrContact, setEmailOrContact] = useState("");
    const [message, setMessage] = useState("");
    const [nameErrorMessage, setNameErrorMessage] = useState("");
    const [emailOrContactErrorMessage, setEmailOrContactErrorMessage] = useState("");
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

    const handleEmailOrContactChange = (event: ChangeEvent<HTMLInputElement>) => {
        const emailOrContactValue = event.target.value;
        setEmailOrContact(emailOrContactValue);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{0,15}$/;

        if (emailRegex.test(emailOrContactValue) || phoneRegex.test(emailOrContactValue)) {
            setEmailOrContactErrorMessage("");
        } else {
            setEmailOrContactErrorMessage("Invalid email or contact number.");
        }
    };

    const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const messageValue = event.target.value;
        setMessage(messageValue);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!name || !emailOrContact || !message) {
            setErrorMessage("Please fill out all fields.");
            return;
        }

        // Validation logic for emailOrContact
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{0,15}$/;

        if (!(emailRegex.test(emailOrContact) || phoneRegex.test(emailOrContact))) {
            setEmailOrContactErrorMessage("Invalid email or contact number.");
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
            setEmailOrContact("");
            setMessage("");
            // Display alert or redirect to a success page
            alert("Your request has been sent!");
            setErrorMessage("");
            setEmailOrContactErrorMessage(""); // Clear any previous error message
        } catch (error) {
            console.error("Error sending email:", error);
            setErrorMessage("Error sending email. Please try again later.");
        }
    };

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-sm items-end shadow sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-4" onSubmit={handleSubmit}>
                <h5 className="text-xl text-center">Send Request</h5>
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="border border-gray-300 text-gray-900 text-sm rounded-sm items-end focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                    {nameErrorMessage && <div className="text-red-500 text-sm">{nameErrorMessage}</div>}
                </div>
                <div>
                    <label htmlFor="emailOrContact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email or Contact Number
                    </label>
                    <input
                        type="text"
                        id="emailOrContact"
                        placeholder="Enter email or contact number"
                        className="border border-gray-300 text-gray-900 text-sm rounded-sm items-end focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        value={emailOrContact}
                        onChange={handleEmailOrContactChange}
                        required
                    />
                    {emailOrContactErrorMessage && <div className="text-red-500 text-sm">{emailOrContactErrorMessage}</div>}
                </div>
                <div>
                    <label htmlFor="message" className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Say something..."
                        className="border border-gray-300 text-gray-900 text-sm rounded-sm items-end focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        rows={3}
                        value={message}
                        onChange={handleMessageChange}
                        required
                    />
                </div>
                {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}
                    <Buttons type="submit" links="" text="Send" properties="text-white" />
            </form>
        </div>
    );
};

export default Registration;
