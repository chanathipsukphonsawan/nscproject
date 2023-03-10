import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import { ToastContainer } from "react-toastify";

import Login from "./component/Login/login";
import Home from "./component/Home/home";
import Publicpage from "./page/publicpage";
import Announcement1page from "./page/Announcement1page";
import Announcement2page from "./page/Announcement2page";
import Certificatepage from "./page/certificatepage";
import Details from "./page/details";
import Pdfpage from "./page/pdfpage";


const containerStyle: React.CSSProperties = {
  position: "fixed",
  top: "20px",
  right: "20px",
  width: "100px",
  height: "50px",
  fontSize: "18px",
};

function App(): JSX.Element {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Publicpage />} />
          <Route path="/Announcement1" element={<Announcement1page />} />
          <Route path="/Announcement2" element={<Announcement2page />} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/certificate" element={<Certificatepage />} />
          <Route path="/pdffile" element={<Pdfpage />} />
        </Routes>
        <ToastContainer style={containerStyle} />
      </BrowserRouter>
    </Container>
  );
}

export default App;

