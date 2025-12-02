// hooks
import { useContext } from "react";
// context
import PostContext from "../Contexts/PostContext";
// styles
import classes from "../Styles/Module/Post.module.css";

// main
function Post() {
  // data
  const { supplyObject } = useContext(PostContext);

  return (
    <div className={classes.Container}>
      <div className={classes.box}>
        <h1>{supplyObject.title}</h1>
        <p>{supplyObject.description}</p>
        <div>
          <hr />
          <br />
          <p>Author</p>
          <h2>{supplyObject.author}</h2>
          <p>{supplyObject.date}</p>
        </div>
      </div>
      <div className={classes.box}>
        <img src={supplyObject.image} />
      </div>
    </div>
  );
}

export default Post;
