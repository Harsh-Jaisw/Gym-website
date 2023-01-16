import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { useRecoilState } from "recoil";
import { Data2, Data, Data3 } from "../../Atom/atom";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useRecoilState(Data);
  const [sub, setSub] = useRecoilState(Data2);
  const [sub1, setSub2] = useRecoilState(Data3);
  const [navbar, setNavbar] = useState(false);
  function Logout() {
    setData(false);
    setSub(false);
    setSub2(false);
  }
  const changeNavbarBg = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const [toggle, setToggle] = useState(false);
  const toggleNavbar = () => {
    setToggle(!toggle);
  };
  window.addEventListener("scroll", changeNavbarBg);
  return (
    <header className={navbar ? "sticky" : ""}>
      <div className="container d-flex  jc-between">
        <div className="logo">
          <Link to="/">GYM</Link>
        </div>
        <nav className={toggle ? "nav-links toggleNavbar" : "nav-links d-flex"}>
          <ul className="d-flex">
            <li>
              <NavLink
                to="/"
                style={{ color: navbar ? "#fff" : "#000" }}
                className="active-link"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={{ color: navbar ? "#fff" : "#000" }}
                className="active-link"
              >
                About
              </NavLink>
            </li>
            <li>
              <a href="#program" style={{ color: navbar ? "#fff" : "#000" }}>
                Program
              </a>
            </li>
            <li>
              <a
                href="#meetourteam"
                style={{ color: navbar ? "#fff" : "#000" }}
              >
                Training
              </a>
            </li>
            <li>
              <a href="#pricing" style={{ color: navbar ? "#fff" : "#000" }}>
                Pricing
              </a>
            </li>
          </ul>
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
                  <button className="joilogin " onClick={() => Logout()}>
                    LOG OUT
                  </button>{" "}
                </>
              ) : (
                <>
                  {data ? (
                    <>
                      <Link to="/about">
                        <button className="joibus">GET STARTED</button>
                      </Link>{" "}
                      <button className="joibus " onClick={() => Logout()}>
                        LOG OUT
                      </button>{" "}
                    </>
                  ) : (
                    <>
                      {show ? (
                        <>
                          <Link to="/joinus">
                            {" "}
                            <button className="joibus">REGISTRATION</button>
                          </Link>
                          <Link to="/login">
                            {" "}
                            <button className="joibus">LOGIN</button>
                          </Link>
                        </>
                      ) : (
                        <button
                          onClick={() => setShow(true)}
                          className="joibus"
                        >
                          JOIN WITH US
                        </button>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}

          <button className="btn-close" onClick={toggleNavbar}>
            X
          </button>
        </nav>
        <div>
          <button className="btn-menu" onClick={toggleNavbar}>
            <span classNam="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
