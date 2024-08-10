import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About"
import ErrorPage from "./components/pages/ErrorPage"
// import pagespecific to data here
import Header from "./components/organisms/Header"
import Footer from "./components/organisms/Footer"

function App() {
  return (
<Router>
  <Header />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="*" element={<ErrorPage/>} />
    {/* Page specific to data goes here, find way to inject?? */}
  </Routes>
  <Footer />
</Router>
  );
}

export default App;
