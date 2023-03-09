import React from 'react'
import { NavLink } from "react-router-dom";




function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <p style={{ lineHeight: "2" }}>
            © 2023. All Rights Reserved. Made by Kostas, Miguel and Raquel
          </p>

          <div className="footer-about">
            <div>
              <NavLink
                style={{ fontSize: "14px" }}
                className="footer-about"
                to="/about"
              >
                About
              </NavLink>
            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
