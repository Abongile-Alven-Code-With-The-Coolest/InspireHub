import React from 'react';
import '../style/style.css';

const FAQ = () => {
  // Sample FAQ data
  const faqData = [
    {
      question: "What is InspireHub?",
      answer: "InspireHub is a free blog posting platform where users can share their thoughts, ideas, and stories with a vibrant community."
    },
    {
      question: "How do I sign up?",
      answer: "To sign up, click on the 'Sign Up' button in the navigation bar and fill out the registration form."
    },
    {
      question: "Is InspireHub free to use?",
      answer: "Yes, InspireHub is completely free to use for all users."
    },
    {
      question: "How do I create a blog post?",
      answer: "After logging in, click on the 'Create Post' button in your dashboard to start writing your blog post."
    },
    {
      question: "How can I contact support?",
      answer: "You can contact our support team by clicking on the 'Contact' link in the navigation bar and filling out the contact form."
    }
  ];

  return (
    <div className='faq-container'>
      <h1>Frequently Asked Questions</h1>
      <div className='faq-list'>
        {faqData.map((faq, index) => (
          <div key={index} className='faq-item'>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
