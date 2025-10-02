import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import { Toaster } from "react-hot-toast";
import RSVP from "./pages/RSVP";

function App() {
  const location = useLocation();

  const hideFooter = ["/rsvp"];
  const isRSVPLocation = hideFooter.includes(location.pathname);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<RSVP />} />
      </Routes>
      {!isRSVPLocation && <Footer />}
      {/* <Footer /> */}
      <Toaster />
    </>
  );
}

export default App;
