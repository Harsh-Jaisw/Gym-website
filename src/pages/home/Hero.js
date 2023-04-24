import React from "react";
import "./Hero.css";
import { Carousel } from "antd";
import { useRecoilState } from "recoil";
import { Data2, Data, Data3 } from "../../Atom/atom";
import { Link } from "react-router-dom";
import { useState } from "react";
const Hero = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useRecoilState(Data);
  const [sub, setSub] = useRecoilState(Data2);
  const [sub1, setSub2] = useRecoilState(Data3);

  function Logout() {
    setData(false);
    setSub(false);
    setSub2(false);
  }

  const imgSlide = [
    {
      key: "1",
      title: "Take care of your body. It is the only place you have to live",
      img: "https://plus.unsplash.com/premium_photo-1663134042289-00c40d7e0d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      key: "2",
      title: "Take care of your body. It is the only place you have to live",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      key: "3",
      title: "Take care of your body. It is the only place you have to live",
      img: "https://images.unsplash.com/photo-1508048760491-01d8f9d592e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <>
      <div className="hero-section">
        <Carousel autoplay infinite easing="linear">
          {imgSlide.map((image) => {
            return (
              <div key={image.key}>
                <div className="img-container">
                  <img className="containerImage" src={image.img} alt="" />
                  <h3 id="title">{image.title}</h3>
                  <div className="btnHolder">
                    {sub1 ? (
                      <>
                        {" "}
                        <Link className="linkbtn" to="/activity1">
                          <span>GO TO ACTIVITY</span>{" "}
                        </Link>{" "}
                        <button className="joilogin " onClick={() => Logout()}>
                          LOG OUT
                        </button>{" "}
                      </>
                    ) : (
                      <>
                        {sub ? (
                          <>
                            <Link className="linkbtn" to="/activity">
                              <span>GO TO ACTIVITY</span>
                            </Link>{" "}
                            <button
                              className="joilogin "
                              onClick={() => Logout()}
                            >
                              LOG OUT
                            </button>{" "}
                          </>
                        ) : (
                          <>
                            {data ? (
                              <>
                                <Link to="/about">
                                  <button className="joibus">
                                    GET STARTED
                                  </button>
                                </Link>{" "}
                                <button
                                  className="joibus "
                                  onClick={() => Logout()}
                                >
                                  LOG OUT
                                </button>{" "}
                              </>
                            ) : (
                              <>
                                {show ? (
                                  <>
                                    <Link to="/joinus">
                                      {" "}
                                      <button className="joibus">
                                        REGISTRATION
                                      </button>
                                    </Link>
                                    <Link to="/login">
                                      {" "}
                                      <button className="joibus">LOGIN</button>
                                    </Link>
                                  </>
                                ) : (
                                  <div className="btn-container">
                                    <button
                                      onClick={() => setShow(true)}
                                      className="joibus"
                                    >
                                      JOIN WITH US
                                    </button>
                                  </div>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
