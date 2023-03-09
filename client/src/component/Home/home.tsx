import Loginbar from "../Custom/custom";
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import UserModel from "../../model/usermodel";
import { Paper  } from "@mui/material";


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
    <Loginbar/>
  <div className="container1">
  <Paper elevation={24} sx={{ padding: '20px', marginLeft:'100px', marginTop: '50px', width: '2500px', minHeight: '500px' }} className='bg'>
          <h2 style={{textAlign:'center'}}>รายละเอียดผู้ผ่านเข้ารอบที่2</h2>
           <table style={{margin:'auto'}} className='tablestyle'>
            <tr>
              <th> รหัสโครงการ </th>
              <td> {userData?.announcement.project_code}</td>
            </tr>
            <tr>
              <th> โครงการ </th>
              <td> {userData?.announcement.title}</td>
            </tr>
            <tr>
              <th> หมวดโครงการ </th>
              <td> {userData?.announcement.category_project}</td>
            </tr>
            <tr>
              <th> ระดับ </th>
              <td> {userData?.announcement.educationlevel}</td>
            </tr>
            <tr>
              <th> สถาบัน  </th>
              <td> {userData?.announcement.institution}</td>
            </tr>
            <tr>
              <th> อาจารย์ที่ปรึกษา  </th>
              <td> {userData?.announcement.advisor}</td>
            </tr>
            <tr>
              <th> หัวหน้าโครงการ(ผู้พัฒนาคนที่1) </th>
              <td> {userData?.announcement.project_leader}</td>
            </tr>
            <tr>
              <th> ผู้พัฒนาคนที่2 </th>
              <td> {userData?.announcement.projectDeveloper2}</td>
            </tr>
            <tr>
              <th> ผู้พัฒนาคนที่3 </th>
              <td> {userData?.announcement.projectDeveloper3}</td>
            </tr>
            <tr>
              <th> รับทุน </th>
              <td> {userData?.announcement.funded && <p style={{color:'green'}}>คุณได้รับทุน</p> }</td>
            </tr>
            <tr>
              <th> รับทุนและเข้าชิง </th>
              <td> {userData?.announcement.FundedAndNominated && <p style={{color:'green'}}>คุณได้รับทุนและเข้าชิง</p>}</td>
            </tr>
            <div style={{marginTop:'70px'}}>
     {userData?.announcement.funded && <Button variant="contained" onClick={dowloadpdf}>ดาวน์โหลดเอกสารรับทุน</Button> }
    {userData?.announcement.FundedAndNominated && <Button variant="contained" onClick={dowloadpicture} style={{marginLeft:'20px'}}  >ดาวน์โหลดใบประกาศนียบัตร</Button> }

    </div>
           </table>

        </Paper>
  </div>
  </div>
  );
}

export default Home;
