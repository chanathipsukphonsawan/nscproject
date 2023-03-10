import { TextField, Button, Box, Typography, CssBaseline, Avatar, FormControlLabel, Checkbox, Grid, Link } from "@mui/material"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert';
import './login.css'
import { Container } from '@mui/system';
import conf from "../../conf";




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
    const url = `${conf.apiPrefix}/auth/local`;
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          localStorage.setItem("jwt", data.jwt);
          localStorage.setItem("userId", data.user.id);
          swal("Login successful", {
            hideProgressBar: true,
          })
          setUser(initialUser);
          navigate("/home");
        }
      }
    } catch (error) {
      swal(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 2, width: 60, height: 60}}>
          <img maxWidth alt="NSC logo" src={require("../images/circleNsc.png")} />
          </Avatar>
          <Typography component="h1" variant="h5" fontFamily={"Sukhumvit Set"}>
            <div>
              เข้าสู่ระบบ
            </div>
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              label="ID (ชื่อรหัสโครงการ)"
              type="id"
              name="identifier"
              margin='normal'
              required 
              fullWidth
              value={user.identifier}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              label="รหัสผ่าน"
              variant="outlined"
              
              type="password"
              name="password"
              margin='normal'
              required 
              fullWidth
              value={user.password}
              onChange={handleChange}
              autoFocus
            />
          <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="จดจำฉันเอาไว้"
          /> 
          <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={buttonlogin}
          >
            เข้าสู่ระบบ
          </Button>
          <Grid container>
              <Grid item xs>
                <Link href="#forget" variant="body2">
                  ลืมรหัสผ่าน?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2" >
                  {"จำ ID ไม่ได้? กลับไปยังหน้าหลัก"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
    </Container>
  );
};
// onClick={navigate("/")
export default Login;