import Loginbar from "../component/Custom/custom"

const certificatepage = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "certificate.jpg";
    link.href = require("../image/certificate.jpg");// link ภาพ 
    link.click();
  };

  return (
    <div>
      <Loginbar />
      <div className="certificatepic">
        <img src={require("../image/certificate.jpg")}/>
      </div>
      <button onClick={handleDownload} className="buttomdownload">ดาวน์โหลดใบประกาศนียบัตร</button>
    </div>
  );
};

export default certificatepage;
