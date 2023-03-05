import Loginbar from "../component/Custom/custom";
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Certificatepage = () => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://your-strapi-domain.com/api/content-type-with-image');
        const image = response.data.image;
        setImageURL(image.url); // or image.formats.small.url, depending on the sizes available
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);


  const navigate = useNavigate();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "certificate.jpg";
    link.href = require("../image/certificate.jpg"); // link ภาพ 
    link.click();
  };

  const back = () => {
    navigate('/home');
  };
  return (
    <div className="bg_an">
      <Loginbar />
      <Button onClick={back}>back</Button>
      <div className="certificatepic">
        <img src={require("../image/certificate.jpg")} />
      </div>
      <button onClick={handleDownload} className="buttomdownload">ดาวน์โหลดใบประกาศนียบัตร</button>
    </div>
  );
}

export default Certificatepage;
