import { AppBar, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
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
        navigate('/')
    }
    
    return <bar>
        {isLoggedIn ?(
            <Button onClick={handdletLogout}>Logout</Button>
        ):(
            <Box>
                <AppBar position="static" style={{padding: 20}}>
                    <Card
                        raised
                        sx={{
                            maxWidth: 280,
                        margin: "0 auto",
                        padding: "0.1em",
                        }}>
                        <div>
                            <div className="image-container">
                                <img className="potrait" src={require=(Logo)} align-item= "left" alt="Logo"/>
                            <Typography variant="h6" component="div" fontFamily={"-apple-system"} sx={{ flexGrow: 1 }}>
                                NSC Project
                            </Typography>
                                    <div className="button-container">
                                        <Button className="login-button" color="inherit" onClick={() => navigate("/login/")}>
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