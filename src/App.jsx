// hooks
import { lazy, Suspense, useEffect, useState } from "react";
// styles
import GlobalStyle from "./Styles/Component/Global.Style";
// router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// contexts
import PostContext from "./Contexts/PostContext";
// components
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import Footer from "./Components/Footer";
// loading effect
// eslint-disable-next-line no-unused-vars
const LazyLoad = (Component) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};
// pages
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Post = lazy(() => import("./Pages/Post"));

// main
function App() {
  // states
  const [isLoading, setLoading] = useState(true);
  const [supplyObject, setSupplyObject] = useState(null);

  // window mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // check point for loader
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <PostContext.Provider value={{ supplyObject, setSupplyObject }}>
          <Routes>
            <Route path="/" element={LazyLoad(Home)} />
            <Route path="/article/:id" element={LazyLoad(Post)} />
            <Route path="/about" element={LazyLoad(About)} />
            <Route path="/contact" element={LazyLoad(Contact)} />
          </Routes>
        </PostContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
