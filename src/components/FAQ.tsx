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
                            className="text-tertiary"
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
                        <p className="text-tertiary">{answer}</p>
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
                        className="text-tertiary"
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
                    <p className="text-tertiary">{answers}</p>
                </div>
            )}
        </div>
    )
}

export { FAQ, Faq1 }

export const faqs = [
    {
        question: "What is FAQ?",
        answer: "FAQ stands for Frequently Asked Questions. It's a list of common questions and answers."
    },
    {
        question: "How can I get started?",
        answer: "To get started, follow the installation instructions in the documentation."
    },
    {
        question: "What is Lorem Ipsum?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        question: "Why do we use it?",
        answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    }
];

export const faqs1 = [
    {
        questions: "What ?",
        answers: "FAQ stands for Frequently Asked Questions. It's a list of common questions and answers."
    },
    {
        questions: "How can ?",
        answers: "To get started, follow the installation instructions in the documentation."
    },
    {
        questions: "What is Lorem Ipsum?",
        answers: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        questions: "Why do we use it?",
        answers: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    }
]



const FaqSec = () => {
    return (
        <>
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
        </>
    )
}

export default FaqSec



