import Loginbar from "../Custom/custom";
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import UserModel from "../../model/usermodel";
import Announcement from "../../model/model";

const Home = (): JSX.Element => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<UserModel>();

  useEffect(() => {
    const token: string | null = localStorage.getItem('jwt');

    if (token) {
      axios.get<UserModel>('http://localhost:1337/api/users/me?populate=*', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then((response: AxiosResponse<UserModel>) => {
          setUserData(response.data);
        })
        .catch((error: Error) => {
          console.log(error);
        });
    }
  }, []);

  const dowloadpicture = (): void => {
    navigate('/certificate');
  }

  const dowloadpdf = (): void => {
    navigate('/pdffile');
  }

  return (
    <div>
      <div>
        <Loginbar />
      </div>
      <div style={{marginTop:'250px'}}>
        <h2 style={{textAlign:'center'}}>{userData?.announcement.title}</h2>
        <p style={{textAlign:'center'}}>{userData?.announcement.project_code} </p>
      
      {userData?.announcement.funded && <Button variant="contained" onClick={dowloadpdf} >ดาวน์โหลดเอกสารรับทุน</Button> } 
      <Button variant="contained" onClick={dowloadpicture}>ดาวน์โหลดใบประกาศนียบัตร</Button>
      </div>
    </div>
  );
}

export default Home;
