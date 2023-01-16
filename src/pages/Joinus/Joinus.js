import React, { useEffect, useState } from "react";
import { Data } from "../../Atom/atom";
import { useRecoilState } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Joinus.css";
import { Link, useNavigate } from "react-router-dom";

function Joinus() {
  const [login, setLogin] = useRecoilState(Data);
  const nav = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userDetails")) {
      let data = JSON.parse(localStorage.getItem("userDetails"));
      setData(data);
    }
  }, []);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [EM, setEM] = useState("");
  const [PW, setPW] = useState("");
  const [US, setUS] = useState("");
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  function captureEmail(e) {
    setEmail(e.target.value);
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (regEmail.test(email)) {
      setEM("");
    } else if (!regEmail.test(email) && email !== "") {
      setEM("Email is Not Valid");
    }
  }

  function captUserName(e) {
    setUserName(e.target.value); //first check e byub makin condition
    const userRegEx = /\s/g;
    if (userRegEx.test(!userName)) {
      setUS("");
    } else if (userRegEx.test(userName) && userName !== "") {
      setUS("UserName is not Valid");
    } else {
      setUS("");
    }
  }
  function capturePassword(e) {
    setPassword(e.target.value);
    const pwRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
    if (pwRegEx.test(password)) {
      setPW("");
    } else if (!pwRegEx.test(password) && password !== " ") {
      setPW("pw is Not Valid");
    } else {
      setPW("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    //===================email
    function emailExists(email) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].Email === email) {
          return true;
        }
      }
      return false;
    }

    if (emailExists(email)) {
      alert("Email is already exist");
      // navigate("../Login");
    } else if (email === "" || userName === "" || password === "") {
      alert("please enter something");
    } else if (
      EM === "EMAIL IS NOT VALID" ||
      PW === "pw is Not Valid" ||
      US === "UserName is not Valid"
    ) {
      alert("you have enter wrong details");
    } else {
      const userData = {
        Email: email,
        UserName: userName,
        Password: password,
        isSubScribe20: false,
        isSubScribe50: false,
      };
      data.push(userData);
      setData([...data]);
      if (show === true) {
        setShow(false);
      } else {
        setShow(true);
        window.alert(
          `${userName.toUpperCase()} You Have Successfully Register`
        );
        setLogin(true);
        setShow(true);
      }
    }
    localStorage.setItem("userDetails", JSON.stringify(data));
    setEmail("");
    setUserName("");
    setPassword("");
    setEM("");
    setPW("");
    setUS("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="outer">
          <div className="img">
            {/* <div className='containerImg'> */}
            {/* <img style={{borderRadius:'60%',height:'auto',width:'30%'}} className='profile' src={profile} alt="profile" />
            </div> */}
          </div>
          <input
            className="user"
            type="text"
            name="name"
            placeholder="Username"
            value={userName}
            onChange={captUserName}
            required
          />
          <p style={{ color: "red" }}>{US}</p>
          <input
            className="email"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={captureEmail}
            required
          />
          <p>{EM}</p>
          <input
            className="pass"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={capturePassword}
            required
          />
          <p style={{ color: "red" }}>{PW}</p>
          <div className="btn">
            <button className="SignUpButton">Register</button>
          </div>
        </div>
        <br />
        <span>
          Already, have a account ? &nbsp;<Link to="/login">Login</Link>
        </span>
      </form>{" "}
      {show ? (
        <p className="redirection">
          Now You Can Go To <Link to="/about">Home</Link> To Get Subscription
        </p>
      ) : (
        ""
      )}
      <ToastContainer />
    </>
  );
}

export default Joinus;
