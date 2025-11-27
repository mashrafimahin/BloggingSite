// hooks
import { useEffect } from "react";
// styles
import classes from "../Styles/Module/About.module.css";
// components
import Button from "../Components/Button";
// Images
import Profile from "../Assets/photo.png";

// main
function About() {
  // window on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.Container}>
      <div className={classes.Bio}>
        <h1>About Us</h1>
        <p>
          StoryGrid is a space built for thinkers, dreamers, creators, and
          anyone with a story worth sharing. We believe every idea, whether
          simple or profound, deserves a place to live, grow, and inspire.
          <br />
          <br />
          In a world overflowing with noise, StoryGrid aims to bring back
          clarity, intent, and human connection through writing. Our platform
          celebrates curiosity, creativity, and the joy of exploring new
          perspectives. From personal reflections to productivity tips, mindful
          living insights, travel diaries, lifestyle inspirations, and more
          ,StoryGrid is a home for diverse voices and meaningful experiences.
          <br />
          <br />
          We’ve designed this space to feel comforting yet modern, simple yet
          full of life. Whether you’re here to read, learn, think, or express
          yourself, StoryGrid gives you the tools to explore your own narrative
          while discovering others'.
          <br />
          <br />
          At StoryGrid, we believe that stories shape people, and people shape
          the world. Let’s grow, write, and discover… one story at a time.
        </p>
        <Button>Learn More</Button>
      </div>
      <div className={classes.Visual}>
        <img
          src={Profile}
          alt="profile"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
}

export default About;
