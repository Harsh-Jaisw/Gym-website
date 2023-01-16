import React from "react";
import "./Footer.css";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <section>
      <div className="main-wrap">
        <div className="footer-wrap">
          <div className="footer-wrap1">
            <div className="footer-section">
              <h5
                style={{
                  fonSize: "5rem",
                  fontWeight: "bold",
                  color: "#ff0000",
                }}
              >
                <Link to="/">GYM</Link>
              </h5>
              <p>Loreum ipsum doloar sitte fincj kkahudhdb</p>
              <ul style={{ display: "flex" }}>
                <a href="https://www.youtube.com">
                  <h1>
                    <FaYoutube />
                  </h1>
                </a>
                <a href="https://www.twitter.com">
                  <h1>
                    <FaTwitter />
                  </h1>
                </a>
                <a href="https://www.instagram.com">
                  <h1>
                    <FaInstagram />
                  </h1>
                </a>
                <a href="https://www.linkedin.com">
                  <h1>
                    <FaLinkedin />
                  </h1>
                </a>
                <a href="https://www.facebook.com">
                  <h1>
                    <FaFacebookSquare />
                  </h1>
                </a>
              </ul>
            </div>
            <div className="footer-section">
              <h5>Healthy leaving</h5>
              <ul>
                <li>Loreum</li>
                <li>Loreum ipsum</li>
                <li>Loreum</li>
                <li>Loreum ipsum</li>
              </ul>
            </div>
            <div className="footer-section">
              <h5>Services</h5>
              <ul>
                <li>Loreum</li>
                <li>Loreum ipsum</li>
                <li>Loreum</li>
                <li>Loreum ipsum</li>
              </ul>
            </div>
            <div className="footer-section">
              <h5>Programmes</h5>
              <ul>
                <li>Loreum</li>
                <li>Loreum ipsum</li>
                <li>Loreum</li>
                <li>Loreum ipsum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
