import { AppBar, Box, Typography } from "@mui/material";
import { useEffect, useState, Text } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Card } from "reactstrap";
import "./custom.css"
import Logo from "./../images/circleNsc.png"

const Loginbar =() =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const jwt =localStorage.getItem ("jwt")
        setIsLoggedIn(jwt? true : false)
    },[]);

    const handdletLogout = () => {
        localStorage.removeItem("jwt")
        setIsLoggedIn(false)
        navigate('/logout')
    }
    
    return <bar>
        {isLoggedIn ?(
            <Button onClick={handdletLogout}>Logout</Button>
        ):(
            <Box>
                <AppBar position="static" style={{padding:"20", background:'#2E3B55', maxHeight:"200vh"}}>
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
                                    <Typography textAlign={"left"} marginLeft={"100px"} marginBottom={"-90px"} marginTop={"-95px"} variant="h6" component="div" fontFamily={"Sukhumvit Set"} sx={{ flexGrow: 1 }}>
                                        <p>NSC Southern Thailand 2022 <br/>ศูนย์ประสานงานโครงการ NSC ภาคใต้</p>
                                    </Typography>
                                    <div className="button-container">
                                        <Button className="login-button" color="inherit" justify-items onClick={() => navigate("/login/")}>
                                            Login
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