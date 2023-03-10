import Loginbar from "../component/Custom/custom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserModel from "../model/usermodel";
import { Paper  } from "@mui/material";
import conf from "../conf";

const Certificatepage = () => {
  const [imageURL, setImageURL] = useState<string>('');

  const token = localStorage.getItem('jwt')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<UserModel>(`${conf.apiPrefix}/api/users/me?populate[announcement][populate]=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setImageURL(response.data.announcement.img.formats.small.url);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [token]);


  
  const handleDownload = async () => {
    try {
      const response = await fetch(`${conf.apiPrefix}` + imageURL);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "certificate.jpg";
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div style={{backgroundColor:'#88F3E4',height:'1000px'}}>
      <Loginbar />
      <div className="container1">
      <Paper elevation={24} className='paper'>
      <div className="bg">

      <div className="certificatepic">
        <h1 style={{textAlign:'center',marginBottom:'40px',color:'#368BD1'}}>ตัวอย่างใบประกาศนียบัตร</h1>
        <img src={`${conf.apiPrefix}` + imageURL} alt="Certificate" style={{maxHeight:'600px'}} />
      </div>
      <button onClick={handleDownload} className="download-button" style={{marginRight:'0',marginTop:'25px'}}>ดาวน์โหลดใบประกาศนียบัตร</button>
      </div>
      </Paper>
      </div>
    </div>
  );
}

export default Certificatepage;
