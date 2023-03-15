import { AppBar, Typography, Grid, Container} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button  } from "reactstrap";
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
            <AppBar position="fixed" style={{padding:"20", background:'#2E3B55', maxHeight:"200vh"}}>
                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        <Grid item xs={1.25} marginTop={"12px"}>
                            <img className="image-arrangement" src={require=(Logo)}/>
                        </Grid>
                    <Grid item xs={7.5} marginTop={"20px"} justifyContent="left">
                        <Typography fontFamily={"Sukhumvit Set"} fontSize="1.12rem">NSC Southern Thailand 2022 ศูนย์ประสานงานโครงการ NSC ภาคใต้</Typography>
                    </Grid>
                    <Grid container item xs={1.5}>
                        <Button className="login-button" color="inherit" onClick={handdletLogout}>
                            ออกจากระบบ
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            </AppBar>
        ):(
            <AppBar position="fixed" style={{padding:"20", background:'#2E3B55', maxHeight:"200vh"}}>
                <Container maxWidth="xl">
                    <Grid container spacing={5}>
                        <Grid item xs={1.25} marginTop={"12px"}>
                            <img className="image-arrangement" src={require=(Logo)}/>
                        </Grid>
                        <Grid item xs={7.5} marginTop={"20px"} justifyContent="left">
                            <Typography fontFamily={"Sukhumvit Set"} fontSize="1.1rem">NSC Southern Thailand 2022 ศูนย์ประสานงานโครงการ NSC ภาคใต้</Typography>
                        </Grid>
                        <Grid item xs={1}/>
                        <Grid container item xs={1.5}>
                            <Button className="login-button" color="inherit" onClick={() => navigate("/login/")}>
                                เข้าสู่ระบบ
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
        )}
    </bar>

};

export default Loginbar;
