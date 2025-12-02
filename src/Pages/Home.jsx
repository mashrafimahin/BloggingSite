// hook
import React, { useContext, useEffect, useMemo, useState } from "react";
// styles
import classes from "../Styles/Module/Home.module.css";
// components
import SearchBox from "../Components/SearchBox";
import Menu from "../Components/Menu";
import PostCard from "../Components/PostCard";
import Button from "../Components/Button";
// contexts
import { DataContext } from "../Contexts/DataContext";

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
  // contexts
  const { data } = useContext(DataContext);

  // state
  const [visiblePostsCount, setVisiblePostsCount] = useState(6);
  const [searchValue, setSearchValue] = useState("");
  const [displayedPosts, setDisplayedPosts] = useState(data);

  // memoize rendered posts
  const renderedPosts = useMemo(() => {
    return displayedPosts
      .slice(0, visiblePostsCount)
      .map((elm, i) => <PostCard key={i + 1} Obj={elm} />);
  }, [displayedPosts, visiblePostsCount]);

  // handle load more
  const handleLoadMore = () => {
    setVisiblePostsCount((prev) => prev + 6);
  };

  // handle search key press
  const searchHandler = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      const filtered = data.filter((elm) => elm.title.includes(searchValue));
      setDisplayedPosts(filtered);
      setVisiblePostsCount(6);
    }
  };

  // window on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.Container}>
      <div className={classes.Content}>
        {data.length === 0 ? <p>No data available</p> : renderedPosts}
        <div className={classes.ButtonSection}>
          {visiblePostsCount < displayedPosts.length && (
            <Button onClick={handleLoadMore}>Load More</Button>
          )}
        </div>
      </div>
      <div className={classes.Menu}>
        <SearchBox
          currentValue={searchValue}
          changeHandler={setSearchValue}
          onKeyDown={searchHandler}
        />
        <div className={classes.SubMenu}>
          <Menu title="Recent Posts" listObj={linkObj} />
          <Menu title="Categories" listObj={CatObj} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Home);
