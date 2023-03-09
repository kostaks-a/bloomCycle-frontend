import React from 'react'
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <p style={{ paddingTop: '20px', fontSize: "13px", lineHeight: "2" , color: 'gray'}}>
            © 2023. All Rights Reserved. Made by Kostas, Miguel and Raquel
          </p>
          </div>
        <div style={{
          paddingTop: '20px', fontSize: "13px", display: 'flex', flexDirection: 'column' }}>
          <div className="footer-about">
              <NavLink
            style={{ paddingTop: '40px', fontSize: "13px", textDecoration: 'none'}}
                to="/about"
              >
                About
              </NavLink>
        </div>

        <div className="footer-contacts">
          <NavLink
            style={{ paddingTop: '20px', fontSize: "13px", textDecoration: 'none' }}
            
          >
            Contacts
          </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
