import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Container} from "reactstrap";
import { ToastContainer } from "react-toastify";

import Login from "./component/Login/login"
import Home from "./component/Home/home";
import Logoutpage from "./page/logoutpage";
import Publicpage from "./page/publicpage";
import Announcement1page from "./page/Announcement1page"

const containerStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    width: '100px',
    height: '50px',
    fontSize: '18px',
  
  };

function App() {
    return (
        <Container>
            <BrowserRouter>
            <Routes>
                <Route path="/publicpage" element={<Publicpage/>}/>
                <Route path="/Announcement1" element={<Announcement1page/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/logout" element={<Logoutpage/>} />
            </Routes>
            <ToastContainer style={containerStyle}/>
            </BrowserRouter>
        </Container>
        
    );
}

export default App;