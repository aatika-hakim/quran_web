import React, { useState } from "react";

interface FaqsProps {
    question: string;
    answer: string;
}
interface Faqs1Props {
    questions: string;
    answers: string;
}


const FAQ: React.FC<FaqsProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    return (
            <div className={`m-4 ${isOpen ? "" : "border-b border-gray-300"}`}>
                <button
                    onClick={toggleFAQ}
                    className="flex justify-between w-full p-2 text-left cursor-pointer"
                >
                    <span className="font-medium">{question}</span>
                    <span
                        className={`w-5 h-5 transform ${isOpen ? "rotate-180" : "rotate-0"} transition-transform`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="text-sm"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </span>
                </button>
                {isOpen && (
                    <div className="p-2 border-b border-gray-200">
                        <p className="text-sm">{answer}</p>
                    </div>
                )}
            </div>

    );
};

const Faq1: React.FC<Faqs1Props> = ({ questions, answers }) => {

    const [isOn, setIsOn] = useState(false);

    const toggleFAQOn = () => {
        setIsOn(!isOn);
    };
    return (
        <div className={`m-4 ${isOn ? "" : "border-b border-gray-300"}`}>
            <button
                onClick={toggleFAQOn}
                className="flex justify-between w-full p-2 text-left cursor-pointer"
            >
                <span className="font-medium">{questions}</span>
                <span
                    className={`w-5 h-5 transform ${isOn ? "rotate-180" : "rotate-0"} transition-transform`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-sm"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </span>
            </button>
            {isOn && (
                <div className="p-2 border-b border-gray-200">
                    <p className="text-sm">{answers}</p>
                </div>
            )}
        </div>
    )
}

export { FAQ, Faq1 }

const faqs = [
    {
        question: "What age groups do you teach?",
        answer: "We teach all ages, from children to adults."
    },
    {
        question: "Are the classes online or in-person?",
        answer: "All our classes are currently online."
    },
    {
        question: "Do I need to know Arabic to start?",
        answer: "No, beginners are welcome and no prior knowledge of Arabic is needed."
    },
    {
        question: "How can I track my progress?",
        answer: "We provide regular assessments and feedback to help you track your progress."
    },
    {
        question: "What courses do you offer?",
        answer: "We offer Noorani Qaida, Quran Reading, Quran Translation, Quran Hifz, Tajweed, and Islamic Studies courses."
    }

];


export const faqs1 = [
    {
        questions: "How often are classes held?",
        answers: "Classes are scheduled flexibly to fit your availability."
    },
    {
        questions: "Can I join at any time?",
        answers: "Yes, you can enroll in our courses at any time."
    },
    {
        questions: "Do you provide one-on-one tutoring?",
        answers: "Yes, we offer personalized one-on-one tutoring sessions."
    },
    {
        questions: "Is there a fee for the courses?",
        answers: "Yes, there is a fee for our courses. Please check our website for details."
    },
    {
        questions: "How do I register for a course?",
        answers: "You can register by filling out the form on our contact page."
    }
]



const FaqSec = () => {
    return (
        <>
        <div className="container mx-auto border-b-2 border-secondary border-gray-200 pb-20 pt-4">
        <h2 className="text-2xl text-semibold text-center py-10">Frequently Asked Question</h2>
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 lg:w-2/3 xl:w-1/2 ">
            {faqs.map((faq, index) => (
                <FAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
            </div>
            <div className="w-px ml-2 mr-2 md:flex-row self-stretch bg-gradient-to-tr from-transparent via-neutral-700 to-transparent opacity-20 dark:opacity-100" />
            <div className="w-full md:w-1/2 lg:w-2/3 xl:w-1/2 ">
            {faqs1.map((faq1, index1) => (
                <Faq1 key={index1} questions={faq1.questions} answers={faq1.answers} />
            ))}
            </div>
        </div>
        </div>
        </>
    )
}

export default FaqSec



