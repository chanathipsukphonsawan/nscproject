import Loginbar from "../Custom/custom";
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();

  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('jwt');

    if (token) {
      axios.get('http://localhost:1337/announcements', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          user: localStorage.getItem('userId'),
        },
      })
      .then(response => {
        setAnnouncements(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }
  }, []);

  const dowloadpicture = () => {
    navigate('/certificate');}

  const dowloadpdf = () => {
    navigate('/pdffile');
  }

  return (
    <div className="bg">
      <Loginbar />
      <div>
        {announcements.map(announcement => (
          <div key={announcement.id}>
            <h2>{announcement.title}</h2>
          </div>
        ))}
      </div>
      <Button onClick={dowloadpicture}>ดาวน์โหลดใบประกาศนียบัตร</Button>
      <Button onClick={dowloadpdf} style={{marginLeft:'1%',marginTop:'37%'}}>ดาวน์โหลดเอกสารรับทุน</Button>
    </div>
  );
}

export default Home;