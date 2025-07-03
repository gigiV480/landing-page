import React from 'react';
import classes from './Packages.module.css';

interface Package {
  title: string;
  summary: string;
  features: string[];
}

const packages: Package[] = [
  {
    title: 'Basic Plan',
    summary: 'Perfect for beginners looking to start their fitness journey.',
    features: [
      'Access to beginner-level workouts',
      'Weekly health and fitness newsletters',
      'Basic progress tracking dashboard',
      'Community forum support',
    ],
  },
  {
    title: 'Pro Plan',
    summary: 'Ideal for regular gym-goers who want a structured path.',
    features: [
      'Everything in Basic Plan',
      'Advanced workout plans and challenges',
      'Direct messaging with certified trainers',
      'Nutrition tips and meal prep guides',
    ],
  },
  {
    title: 'Elite Plan',
    summary: 'For serious athletes or lifestyle changers who want it all.',
    features: [
      'All features from Pro Plan',
      '1-on-1 personal coaching and feedback',
      'Customized meal and supplement plans',
      'Live group sessions every week',
    ],
  },
];

const Packages: React.FC = () => {
  return (
    <div className={classes.packagesSection}>
    <h1 className={classes.title}>A personalized fitness programs designed by certified coaches.</h1>
      <div className={classes.packagesContainer}>
        {packages.map((pkg, i) => (
          <div key={i} className={classes.packageCard}>
            <div>
              <h3 className={classes.packageTitle}>{pkg.title}</h3>
              <p className={classes.packageDescription}><strong>{pkg.summary}</strong></p>
              <ul className={classes.featureList}>
                {pkg.features.map((feature, j) => (
                  <li key={j}>{feature}</li>
                ))}
              </ul>
            </div>
            <button className={classes.purchaseButton}>Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
