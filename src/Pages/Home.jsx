// styles
import classes from "../Styles/Module/Home.module.css";
// components
import SearchBox from "../Components/SearchBox";
import Menu from "../Components/Menu";
import PostCard from "../Components/PostCard";
import Button from "../Components/Button";

// object of Menu
const linkObj = [
  "Understanding JavaScript Closures",
  "A Guide to CSS Flexbox",
  "Designing for Accessibility",
  "Introduce to TypeScript",
];
const CatObj = ["JavaScript", "CSS", "Node.js", "Accessibility"];

// main
function Home() {
  return (
    <div className={classes.Container}>
      <div className={classes.Content}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <div className={classes.ButtonSection}>
          <Button>Load More</Button>
        </div>
      </div>
      <div className={classes.Menu}>
        <SearchBox />
        <div className={classes.SubMenu}>
          <Menu title="Recent Posts" listObj={linkObj} />
          <Menu title="Categories" listObj={CatObj} />
        </div>
      </div>
    </div>
  );
}

export default Home;
