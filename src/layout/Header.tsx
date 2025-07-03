import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <span className={classes.logo}>FitStart</span>
        <nav className={classes.links}>
        <a href="#hero">Start</a>
        <a href="#packages">Plans</a>
        <a href="#testimonials">Reviews</a>
        </nav>
        <button className={classes.button}>Get Started</button>
      </div>
    </header>
  );
};

export default Header;
