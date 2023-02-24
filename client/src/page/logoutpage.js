import { Button, Form, Input } from 'reactstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";



const Logoutpage = () => {
  const navigate = useNavigate();

  const handdletLogout = () => {
    navigate('/')}
  
    
    return (
    <div className='textout'>
      <div className="image1">
            <img src={require("../image/circleNsc.png")}/>
      </div>
      
      <div className='textout2'>
        <h1 >ออกจากระบบแล้ว</h1>
      <div >
        <Button className='submit2' onClick={handdletLogout}>กลับสู่หน้าหลัก</Button>
      </div>
      </div>

    </div>
     
    );
};

export default Logoutpage;