// hooks
import { useContext, useEffect, useState } from "react";
// styles
import classes from "../Styles/Module/Navbar.module.css";
const common = {
  textDecoration: "none",
  color: "inherit",
};
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// Component
import Button from "./Button";
// router
import { NavLink } from "react-router-dom";
// context
import { AuthContext } from "../Contexts/AuthContext";

// main
function Navbar() {
  // state
  const [size, setSize] = useState(false);
  const [humberger, setHumberger] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // context
  const { userId } = useContext(AuthContext);

  // handle humberger
  const handleHumb = () => {
    setHumberger((prevState) => !prevState);
  };

  // handle link click
  const handleLink = () => {
    setTimeout(() => {
      setHumberger(false);
    }, 500);
  };

  // effect
  useEffect(() => {
    // handle window size
    const handleSize = () => {
      if (window.innerWidth < 768) {
        setSize(true);
      } else {
        setSize(false);
      }
    };
    // add control to event listeners
    window.addEventListener("resize", handleSize);
    handleSize();
    // while unmount
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  // scroll effect
  useEffect(() => {
    const IsScrolled = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // event listeners
    window.addEventListener("scroll", IsScrolled);
    // cleanup
    return () => {
      window.removeEventListener("scroll", IsScrolled);
    };
  }, []);

  return (
    <div className={`${classes.Container} ${scrolled ? classes.activate : ""}`}>
      {/* logo */}
      <div className={classes.logo}>
        <NavLink to="/" style={common}>
          StoryGrid
        </NavLink>
      </div>
      {/* navigation */}
      <div className={classes.Navigation}>
        {/* nav links */}
        <nav className={humberger ? classes.active : ""}>
          <ul>
            <NavLink to="/" style={common}>
              <li onClick={handleLink}>Home</li>
            </NavLink>
            <NavLink to="about" style={common}>
              <li onClick={handleLink}>About</li>
            </NavLink>
            <NavLink to="contact" style={common}>
              <li onClick={handleLink}>Contact</li>
            </NavLink>
            {size &&
              (!userId ? (
                <NavLink to="login" style={common}>
                  <li onClick={handleLink}>Login/SignUp</li>
                </NavLink>
              ) : (
                <NavLink to="profile" style={common}>
                  <li onClick={handleLink}>Profile</li>
                </NavLink>
              ))}
          </ul>
        </nav>
        {/* action buttons  */}
        {!size &&
          (!userId ? (
            <NavLink to="login">
              <Button>Sign In</Button>
            </NavLink>
          ) : (
            <NavLink to="profile">
              <Button>Profile</Button>
            </NavLink>
          ))}
        {size && (
          <Button onClick={handleHumb}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
