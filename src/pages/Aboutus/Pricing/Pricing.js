import React from "react";
import "./Pricing.css";
import { useRecoilState } from "recoil";
import { Data, Data2, Data3 } from "../../../Atom/atom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Pricing = () => {
  const navigate = useNavigate();
  const [sub, setSub] = useRecoilState(Data2); // 20
  const [sub1, setSub1] = useRecoilState(Data3); // 50
  const [login, setLogin] = useRecoilState(Data); //login

  function confirmation() {
    if (login === true) {
      window.confirm("Press Ok to confirm the plan");
      if (window.confirm("Press Ok to confirm the plan") == true) {
        // setShow(true);
        setSub(true);
        setLogin(true);
        navigate("/activity");
        alert(
          "You have successfully subcribe now you can click to 'subscribed' button to go to activity page"
        );
      } else {
        setSub(false);
      }
    } else {
      alert("LOGIN FIRST");
    }
  }

  // function redirection() {}
  function confirmationtwo() {
    if (login === true) {
      window.confirm("Press Ok to confirm the plan");
      if (window.confirm("Press Ok to confirm the plan")) {
        // setShow(true)
        setSub1(true);

        setLogin(true);
        alert(
          "You have successfully sub now you can click to subscribed button to go to activity page"
        );
        navigate("/activity1");
      } else {
        setSub1(false);
      }
    } else {
      alert("LOGIN FIRST");
    }
  }

  return (
    <section id="pricing" className="PricingContainer">
      <div
        style={{ backgroundColor: "#ffe5b4", borderRadius: "10px" }}
        className="DayPassContent"
      >
        <br />
        <br />
        <h3 style={{ display: "flex", justifyContent: "center" }}>Day Pass</h3>
        <br />
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "80px",
            color: "#4CAF50",
          }}
        >
          $20
        </h1>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            fontStyle: "italic",
          }}
        >
          /month
        </p>
        <br />
        <br />
        <ul style={{ marginLeft: "30px", fontSize: "20px" }}>
          <li>1 Day Pass</li>
          <br />
          <li>Free Gym Access</li>
          <br />
          <li>Free Consultations</li>
          <br />
          <li>24 Hour Access</li>
          <br />
        </ul>
        <div style={{ textAlign: "center" }}>
          {sub ? (
            <Link to="/activity">
              <button>SUBSCRIBED</button>
            </Link>
          ) : (
            <button onClick={confirmation} className="DayPassButton">
              Subscribe
            </button>
          )}
        </div>
      </div>
      <div
        style={{ backgroundColor: "#ffe5b4", borderRadius: "10px" }}
        className="MonthToMonthContent"
      >
        <br />
        <br />
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          Month To Month
        </h3>
        <br />
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "80px",
            color: "#4CAF50",
          }}
        >
          $90
        </h1>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            fontStyle: "italic",
          }}
        >
          /month
        </p>
        <br />
        <br />
        <ul style={{ marginLeft: "25px", fontSize: "20px" }}>
          <li>$99 Joining Fee</li>
          <br />
          <li>Free Gym Access</li>
          <br />
          <li>1 Group Class Included</li>
          <br />
          <li>24 Hour Access</li>
          <br />
        </ul>
        <div style={{ textAlign: "center" }}>
          {sub1 ? (
            <Link to="/activity1">
              {" "}
              <button>SUBSCRIBED</button>
            </Link>
          ) : (
            <button onClick={confirmationtwo} className="MonthToMonthButton">
              Subscribe
            </button>
          )}
        </div>
      </div>
      <div className="PricingContent">
        <h2
          className="PricingHeading"
          style={{ color: "red", fontWeight: "bold" }}
        >
          Membership
        </h2>
        <br />
        <br />
        <h2 style={{ color: "Black" }}>From Punch Pass to Monthly or Annual</h2>
        <br />
        <p style={{ color: "Black" }}>
          At Gym,base,we offer a wide range of Membership with options to suit
          every budget Everything one dy Pass,Pungh Pass to monthly or annual
          prepaid membership Whats more ,we wont tie you in to a long term
          contract ,giving you greater flexbility.
        </p>
        <br />
        <h3 style={{ color: "Black" }}>Each Plan Included</h3>
        <br />
        <ul>
          <li style={{ color: "Black" }}>The best equipment global brands</li>
          <br />
          <li style={{ color: "Black" }}>
            The gym is open 24 hours a day, 7 days a week
          </li>
          <br />
          <li style={{ color: "Black" }}>Two safe payment methods</li>
          <br />
          <li style={{ color: "Black" }}>
            Group fittness classes in the price of the subscription
          </li>
          <br />
          <li style={{ color: "Black" }}>No long-term contract, period</li>
        </ul>
      </div>
      <br />
    </section>
  );
};

export default Pricing;
