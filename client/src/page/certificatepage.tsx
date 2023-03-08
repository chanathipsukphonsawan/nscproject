import Loginbar from "../component/Custom/custom";
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserModel from "../model/usermodel";

const Certificatepage = () => {
  const [imageURL, setImageURL] = useState<string>('');

  const token = localStorage.getItem('jwt')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<UserModel>('http://localhost:1337/api/users/me?populate[announcement][populate]=*', {
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
  }, []);


  
  const handleDownload = async () => {
    try {
      const response = await fetch("http://localhost:1337" + imageURL);
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
    <div className="bg_an">
      <Loginbar />
      <div className="certificatepic">
        <img src={"http://localhost:1337" + imageURL} alt="Certificate" />
      </div>
      <button onClick={handleDownload} className="download-button">ดาวน์โหลดใบประกาศนียบัตร</button>
    </div>
  );
}

export default Certificatepage;
