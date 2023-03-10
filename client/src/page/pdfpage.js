import Loginbar from "../component/Custom/custom";
import { Button } from "reactstrap";

import { Paper  } from "@mui/material";

const Pdfpage = () => {


  const handleDownload = () =>{ {
    const link = document.createElement("a");
    link.download = "เอกสารรับทุน.pdf";
    link.href = require("../pdf_file/pdf_file.pdf");
    link.click();
  };

 
  };
  return (
    <div style={{backgroundColor:'#88F3E4',height:'1000px'}}>
      <Loginbar />
      <div className="container1">
      <Paper elevation={24}  className='paper1'>
        <div className="bg">
      <div className="certificatepic">
      <h1 style={{textAlign:'center',marginBottom:'40px',color:'#368BD1'}}>ตัวอย่างเอกสารรับทุน</h1>
      <img src={require("../image/doc.png")} alt="A document icon" style={{maxWidth:'600px',marginLeft:'-120px'}}/>
      </div>
      <Button onClick={handleDownload} className="download-button" style={{marginTop:'20px'}}>ดาวน์โหลดเอกสารรับทุน</Button>
      </div>
      </Paper>
      </div>
    </div>
  );
}

export default Pdfpage;
