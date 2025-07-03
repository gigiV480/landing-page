import React from 'react';
import classes from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <p>© {new Date().getFullYear()} FitStart Program. All rights reserved.</p>
        <a href="mailto:support@fitstart.com">support@fitstart.com</a>
        <div className={classes.footerLinks}>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
