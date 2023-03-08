import Loginbar from "../component/Custom/custom";
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

const Pdfpage = () => {
    const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "เอกสารรับทุน.pdf";
    link.href = require("../pdf_file/pdf_file.pdf");
    link.click();
  };

  const back = () => {
    navigate('/home');
  };
  return (
    <div className="bg_an">
      <Loginbar />
      <Button className="BackButton" onClick={back}>กลับไปยังหน้าหลัก</Button>
      <div className="certificatepic">
        <img src={require("../image/doc.png")} style={{width:'100%'}}/>
      </div>
      <button onClick={handleDownload} className="download-button">ดาวน์โหลดเอกสารรับทุน</button>
    </div>
  );
}

export default Pdfpage;
