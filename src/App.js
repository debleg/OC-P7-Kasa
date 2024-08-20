import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About"
import Logement from "./components/pages/logement/Logement";
import ErrorPage from "./components/pages/error/ErrorPage"
import Layout from "./Layout";


function App() {
  return (
<Router>
  <Layout>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/logement/:id" element={<Logement/>}/>
    <Route path="*" element={<ErrorPage/>} />
  </Routes>
  </Layout>
</Router>
  );
}

export default App;
