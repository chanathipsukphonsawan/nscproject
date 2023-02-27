import Loginbar from "../component/Custom/custom";
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

const Certificatepage = () => {
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
    <div className="bg">
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
