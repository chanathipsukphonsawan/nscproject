import Loginbar from "../component/Custom/custom";
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Paper  } from "@mui/material";

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
    <div style={{backgroundColor:'#88F3E4 '}}>
      <Loginbar />
      <div className="container1">
      <Paper elevation={24} sx={{ padding: '20px', marginLeft:'100px', marginTop: '50px', width: '1300px', minHeight: '800px' }} className='bg'>
      <div className="certificatepic">
      <h1 style={{textAlign:'center',marginBottom:'40px',color:'#368BD1'}}>ตัวอย่างเอกสารรับทุน</h1>
        <img src={require("../image/doc.png")} style={{maxWidth:'600px',marginLeft:'-120px'}}/>
      </div>
      <button onClick={handleDownload} className="download-button" style={{marginTop:'20px'}}>ดาวน์โหลดเอกสารรับทุน</button>
      </Paper>
      </div>
    </div>
  );
}

export default Pdfpage;
