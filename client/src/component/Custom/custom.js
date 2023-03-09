import { AppBar, Box, Typography } from "@mui/material";
import { useEffect, useState, Text } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Card } from "reactstrap";
import "./custom.css"
import Logo from "./../images/circleNsc.png"
import App from "../../App";

const Loginbar =() =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const jwt =localStorage.getItem ("jwt")
        setIsLoggedIn(jwt? true : false)
    },[isLoggedIn]);

    const handdletLogout = () => {
        localStorage.removeItem("jwt")
        setIsLoggedIn(false)
        navigate('/')
    }
    
    return <bar>
        {isLoggedIn ?(
            <Box>
                <AppBar position="absolute" style={{padding:"20", background:"#2E3B55", maxHeight:"200vh"}}>
                    <Card
                        raised
                        sx={{
                            maxWidth: 280,
                            margin: "0 auto",
                            padding: "0.1 em",
                        }}>
                        <div>
                            <div className="image-container">
                                <img className="potrait" src={require=(Logo)} align-item="left" alt="Logo"/>
                                    <Typography textAlign={"left"} marginLeft={"100px"} marginBottom={"-90px"} 
                                    marginTop={"-100px"} variant="h6" component="div" fontFamily={"Sukhumvit Set"} 
                                    fontSize={"24px"} sx={{ flexGrow: 1 }}>
                                        <p>NSC Southern Thailand 2022 <br/>ศูนย์ประสานงานโครงการ NSC ภาคใต้</p>
                                    </Typography>
                                    <div className="button-container">
                                        <Button className="logout-button" color="inherit"  onClick={handdletLogout}>
                                            ออกจากระบบ
                                        </Button>
                                    </div>
                            </div>
                        </div>
                    </Card>
                </AppBar>
            </Box>
        ):(
            <Box>
                <AppBar position="absolute" style={{padding:"20", background:'#2E3B55', maxHeight:"200vh"}}>
                    <Card
                        raised
                        sx={{
                            maxWidth: 280,
                            margin: "0 auto",
                            padding: "0.1 em",
                        }}>
                        <div>
                            <div className="image-container">
                                <img className="potrait" src={require=(Logo)} align-item= "left" alt="Logo"/>
                                    <Typography textAlign={"left"} marginLeft={"100px"} marginBottom={"-90px"} 
                                    marginTop={"-100px"} variant="h6" component="div" fontFamily={"Sukhumvit Set"} 
                                    fontSize={"24px"} sx={{ flexGrow: 1 }}>
                                        <p>NSC Southern Thailand 2022 <br/>ศูนย์ประสานงานโครงการ NSC ภาคใต้</p>
                                    </Typography>
                                    <div className="button-container">
                                        <Button className="login-button" color="inherit" justify-items onClick={() => navigate("/login/")}>
                                            เข้าสู่ระบบ
                                        </Button>
                                    </div>
                            </div>
                        </div>
                    </Card>
                </AppBar>
            </Box>
        )}

        
    </bar>

};

export default Loginbar;