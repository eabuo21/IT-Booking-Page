import { Route, Routes } from "react-router-dom";
import Homepage from "../src/Pages/Home";
import PaymentGateway from "../src/Pages/Payment";
import Footer from "../src/Components/Feat";
import NavigationMenu from "../src/Components/NavigationMenu";
import "./App.css";

function App(): JSX.Element {
  return (
    <>
      <div className="App">
        <section className="header-section sticky ">
     
        </section>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/PaymentGateway" element={<PaymentGateway />} />
        </Routes>
        <section className="footer-section ">
        
        </section>
      </div>
    </>
  );
};
export default App;
