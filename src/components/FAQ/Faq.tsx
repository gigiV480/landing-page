import React, { useState } from 'react';
import classes from './Faqs.module.css';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'Is this program suitable for beginners?',
    answer: 'Absolutely! We have structured plans for all levels — including those who have never stepped into a gym.',
  },
  {
    question: 'What equipment do I need?',
    answer: 'Many of our workouts use just body weight, but dumbbells or resistance bands can enhance your training.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time with no additional fees.',
  },
  {
    question: 'Is there personal support available?',
    answer: 'Yes — our Pro and Elite plans include direct access to certified coaches for guidance.',
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={classes.faqSection}>
      <h2 className={classes.sectionTitle}>Frequently Asked Questions</h2>
      <div className={classes.faqContainer}>
        {faqs.map((faq, i) => (
          <div key={i} className={classes.faqItem}>
            <button className={classes.faqQuestion} onClick={() => toggle(i)}>
              {faq.question}
              <span>{openIndex === i ? '−' : '+'}</span>
            </button>
            {openIndex === i && <p className={classes.faqAnswer}>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
