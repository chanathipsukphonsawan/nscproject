import { Button, Form, Input } from 'reactstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import './logoutpage.css';

const Logoutpage = () => {
    const buttonback = async () => {
        const url = "http://localhost:1337/api/auth";
    }
    return (
      <div className="box">
        <div className="head">
          <div className="top">
            <div className="image">
              <img src={require("../image/nsclogo.png")}/>
            </div>
            <div className="text">
              <h1>THANK YOU </h1>
            </div>
          </div>
          <div className="text1">
            <h1>ออกจากระบบแล้ว </h1>
          </div>
        </div>
      <Form>
        <div className="line"></div>
        <div>
          <Button className="submit" onClick={buttonback}>กลับไปหน้าหลัก</Button>
        </div>
      </Form>
      </div>
    );
};

export default Logoutpage;