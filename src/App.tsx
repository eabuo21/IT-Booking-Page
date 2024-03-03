import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Alumini from "../src/Pages/Alumini";
import Accomodation from "../src/Pages/Accomodation";
import PaymentGateway from "../src/Pages/Payment";
import Footer from "../src/Components/Feat";
import NavigationMenu from "../src/Components/NavigationMenu";
import "./App.css";
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Optional: Import Swiper Navigation styles
import 'swiper/css/pagination'; // Optional: Import Swiper Pagination styles



function App(): JSX.Element {
  return (
    <>
      <div className="App">
        <section className="header-section sticky ">
          <NavigationMenu />
        </section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/alumini" element={<Alumini />} />
          <Route path="/accomodations" element={<Accomodation />} />
          <Route path="/PaymentGateway" element={<PaymentGateway />} />
        </Routes>
        <section className="footer-section ">
        {/*  <Footer />*/}
        </section>
      </div>
    </>
  );
}
export default App;
