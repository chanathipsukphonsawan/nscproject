import { Button, Form, FormGroup, Label, Input, Toast } from 'reactstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import './login.css'



const initialUser = { identifier: "", password: "" };

const Login = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value
    }));
  };

  const buttonlogin = async () => {
    const url = "http://localhost:1337/api/auth/local";
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          localStorage.setItem("jwt", data.jwt);
          toast.success("Login successful", {
            hideProgressBar: true,
          })
          
          setUser(initialUser);
          navigate("/home");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return (

 
    <div className="box">
      <div className="head">
        <div className="top">
          <div className="image">
            <img src={require("../images/circleNsc.png")}/>
          </div>
          <div className="text">
            <h1>NSC Login</h1>
          </div>
        </div>
      <Form>
        <FormGroup className="input-field">
          <Input
            type="id"
            className="input"
            name="identifier"
            value={user.identifier}
            onChange={handleChange}
            placeholder="Enter your ID"
          />
        </FormGroup>
        <div class="line"></div>
        <FormGroup className="input-field">
          <Input
            type="password"
            className="input"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </FormGroup>
        <div className="line"></div>
        <div>
          <Button className="submit" onClick={buttonlogin}>LOGIN</Button>
        </div>
      </Form>
      <div className="two-col">
        <div className="one">
          <Input type="checkbox" name=""/>
          <label for="check">Remember Me</label>
        </div>
        <div>
          <label><a href="#">Forgot password?</a></label>
        </div>
      </div>
    </div>
    </div>


  );
};

export default Login;


