// // import Footer from "./components/Footer";
// // import Hero from "./components/Hero";
// // import HomeCards from "./components/HomeCards";
// import NavBar from "./components/NavBar";


// const App = () => {
//   return (
//    <>
//     <NavBar></NavBar> 
//     {/* <Hero title="React Jobs" subtitle="Become a cool React Developer" >

//     </Hero>
 

//     <HomeCards></HomeCards>
//     <Footer></Footer> */}
// //    </>
//   )
// }

// export default App






// // import Footer from "./components/Footer"
// // import NavBar1 from "./components/NavBar1"
// // import Prortfolio from "./pages/Prortfolio"


// const App = () => {
//   return (
//    <>
//    {/* <NavBar1></NavBar1>
//    <Prortfolio></Prortfolio>
//     <Footer></Footer> */}
    
  

//    </>
//   )
// }

// export default App


import React from 'react'
import { Outlet } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HotelCard from './components/HotelCard'










const App = () => {
  return (
    <>
 
     <NavBar></NavBar>
   
    <Outlet></Outlet> 

  
    <Footer></Footer> 
   
    {/* <Home></Home>
    <About></About>
    <Projects></Projects> */}
    {/* <DynamicBackground></DynamicBackground> */}
    {/* <NameReader></NameReader> */}

    </>
  )
}

export default App
