import React from 'react'
import {BrowserRouter, Routes, Route, Router} from "react-router-dom"
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Home from '../Components/Home';



const AllRoute = () => {
  return (
    <>
        <Nav />
        {/* <BrowserRouter> */}
        <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/news" element={<News />} /> */}
        </Routes>
        {/* </BrowserRouter> */}
        <Footer />
    </>
  )
}

export default AllRoute