import classes from "./Hero.module.css"
import woman from "./woman.jpg"

import { useEffect, useState } from "react"

const texts = [
    { text: 'Want to start working out?', align: 'left' },
    { text: 'Want to have professionals guiding you?', align: 'right' },
    { text: 'Want to change your lifestyle?', align: 'left' },
    { text: 'Want to change your lifestyle?', align: 'right' },
  ];

const Hero = () => {
    const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

    useEffect(() => {
        const timeouts = texts.map((_, i) =>
          setTimeout(() => {
            setVisibleSteps((prev) => [...prev, i]);
          }, i * 400)
        );
        // fade in button last
        const buttonTimeout = setTimeout(() => {
          setVisibleSteps((prev) => [...prev, texts.length]);
        }, texts.length * 400);
    
        return () => {
          timeouts.forEach(clearTimeout);
          clearTimeout(buttonTimeout);
        };
      }, []);

    return <div className={classes.container}>
        <div className={classes.text}>
        {texts.map((item, i) => (
        <h2
          key={i}
          className={`
            ${classes.island} 
            ${classes.fadeIn} 
            ${classes[item.align]} 
            ${visibleSteps.includes(i) ? classes.visible : ''}
          `}
        >
          {item.text}
        </h2>
      ))}

      <button
        className={`
          ${classes.button} 
          ${classes.fadeIn} 
          ${visibleSteps.includes(texts.length) ? classes.visible : ''}
        `}
      >
        Join our program
      </button>
        </div>
        <img src={woman}/>
    </div>
}

export default Hero