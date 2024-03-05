/** @format */

import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Alumini from "../src/Pages/Alumini";
import Accomodation from "../src/Pages/Accomodation";
import PaymentGateway from "../src/Pages/Payment";
import Footer from "../src/Components/Feat";
import NavigationMenu from "../src/Components/NavigationMenu";
import "./App.css";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Optional: Import Swiper Navigation styles
import "swiper/css/pagination"; // Optional: Import Swiper Pagination styles

function App(): JSX.Element {
  return (
    <>
      <div className="App">
        <section className="header-section sticky  flex flex-col ">
          <NavigationMenu />
          <div className="bg-white w-full h-[70px] flex flex-row justify-center items-center   ">
            <div className="items-container px-3 mr-auto flex flex-row  justify-start items-center  gap-2 text-2xl font-bold text-blue-700 font-passion  ">
              <p> 09063688891</p>
              <p> 09063688891</p>
              <p> inquiries@nccfabuja.com.ng</p>
            </div>
          </div>
        </section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/alumini" element={<Alumini />} />
          <Route path="/accomodations" element={<Accomodation />} />
          <Route path="/PaymentGateway" element={<PaymentGateway />} />
        </Routes>
        <section className="footer-section ">{/*  <Footer />*/}</section>
      </div>
    </>
  );
}
export default App;
