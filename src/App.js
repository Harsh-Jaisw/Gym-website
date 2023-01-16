import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/home/Hero";
import About from "./pages/Aboutus/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Program from "./pages/Aboutus/program/Program";
import Joinus from "./pages/Joinus/Joinus";
import Login from "./pages/Login/Login";
import Trainers from "./pages/Aboutus/Trainer/Trainers";
// import Footer from "./components/Footer/Footer";
import Activity1 from "./pages/Activity1";
import Activity from "./pages/Activity";
// import Alert from "./pages/Joinus/Alert";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/joinus" element={<Joinus />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/program" element={<Program />}></Route> */}
        <Route path="/trainers" element={<Trainers />}></Route>
        <Route path="/activity" element={<Activity />} />
        <Route path="/activity1" element={<Activity1 />} />
        {/* <Route path="/details" element={<Alert />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
