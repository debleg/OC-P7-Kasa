import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About"
import ErrorPage from "./components/pages/error/ErrorPage"
// import pagespecific to data here
import Layout from "./Layout";

function App() {
  return (
<Router>
  <Layout>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="*" element={<ErrorPage/>} />
    {/* Page specific to data goes here, find way to inject?? */}
  </Routes>
  </Layout>
</Router>
  );
}

export default App;
