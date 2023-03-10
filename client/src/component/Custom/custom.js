import React, { useEffect, useState } from "react";
import Logo from "./../images/circleNsc.png";

const Loginbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    setIsLoggedIn(jwt ? true : false);
  }, []);

  const handdletLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <bar>
      {isLoggedIn ? (
        <header
          style={{ padding: "20", background: "#2E3B55", maxHeight: "200vh" }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-1.25" marginTop={"12px"}>
              <img className="image-arrangement" src={Logo} alt="NSC logo" />

              </div>
              <div
                className="col-xs-7.5"
                style={{ marginTop: "20px", justifyContent: "left" }}
              >
                <p style={{ fontFamily: "Sukhumvit Set", fontSize: "1.12rem" }}>
                  NSC Southern Thailand 2022 ศูนย์ประสานงานโครงการ NSC ภาคใต้
                </p>
              </div>
              <div className="col-xs-1.5">
                <button className="login-button" onClick={handdletLogout}>
                  ออกจากระบบ
                </button>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header
          style={{ padding: "20", background: "#2E3B55", maxHeight: "200vh" }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-1.25" marginTop={"12px"}>
              <img className="image-arrangement" src={Logo} alt="NSC logo" />
              </div>
              <div
                className="col-xs-7.5"
                style={{ marginTop: "20px", justifyContent: "left" }}
              >
                <p style={{ fontFamily: "Sukhumvit Set", fontSize: "1.1rem" }}>
                  NSC Southern Thailand 2022 ศูนย์ประสานงานโครงการ NSC ภาคใต้
                </p>
              </div>
              <div className="col-xs-1" />
              <div className="col-xs-1.5">
                <button
                  className="login-button"
                  onClick={() => (window.location.href = "/login/")}
                >
                  เข้าสู่ระบบ
                </button>
              </div>
            </div>
          </div>
        </header>
      )}
    </bar>
  );
};

export default Loginbar;
