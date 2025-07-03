import React from 'react';
import classes from './Testimonials.module.css';

interface Testimonial {
  name: string;
  quote: string;
  rating: number;
  avatar?: string; // optional
}

const testimonials: Testimonial[] = [
  {
    name: 'Emma Thompson',
    quote: 'This program changed my life. I feel stronger, healthier, and more confident every day!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=47', 
  },
  {
    name: 'Josh Rivera',
    quote: 'The trainers are amazing. Everything is clear and easy to follow. Totally worth it!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Lena Martinez',
    quote: 'I lost 12kg and gained a whole new mindset. Highly recommend this to anyone serious about change.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?img=56',
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className={classes.testimonialSection}>
      <h2 className={classes.sectionTitle}>What our clients say</h2>
      <div className={classes.testimonialContainer}>
        {testimonials.map((t, i) => (
          <div key={i} className={classes.testimonialCard}>
            {t.avatar && <img src={t.avatar} alt={t.name} className={classes.avatar} />}
            <div className={classes.testimonialContent}>
              <p className={classes.quote}>“{t.quote}”</p>
              <div className={classes.stars}>
                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
              </div>
              <p className={classes.name}>— {t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
