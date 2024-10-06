// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
  
//   </StrictMode>,
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import Router from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
