import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import HotelList from "./pages/HotelList";
import HotelCard from "./components/HotelCard";

import BookingForm from "./pages/BookingForm";






const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
     
      {
        path: "/",
        element: <Home />,

      },
      {
        path: "/Home",
        element: <Home />,

      },
      {
        path: "/About",
        element: <About />,
      },
     
     {
       path: "/HotelList",
       element: <HotelList />,
     },
     
      
      {
        path: "/BookingForm",
        element: <BookingForm />,

      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;
export default Router;
