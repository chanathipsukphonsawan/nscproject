import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "reactstrap";

const Loginbar =() =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const jwt =localStorage.getItem ("jwt")
        setIsLoggedIn(jwt? true : false)
    },[]);

    const handdletLogout =() =>{
        localStorage.removeItem("jwt")
        setIsLoggedIn(false)
        navigate('/logout')
    }
    return <bar>
        {isLoggedIn ?(
            <Button onClick={handdletLogout}>Logout</Button>
        ):(
            <a href="Login">Login</a>

        )}

        
    </bar>

};

export default Loginbar;