import { Button, Form, FormGroup, Label, Input, Toast } from 'reactstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";




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
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Input
            type="id"
            name="identifier"
            value={user.identifier}
            onChange={handleChange}
            placeholder="Enter your ID"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </FormGroup>
        <Button onClick={buttonlogin}>LOGIN</Button>
      </Form>
    </div>
  );
};

export default Login;


