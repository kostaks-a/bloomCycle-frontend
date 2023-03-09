import React from 'react'
import { Box, Text, Flex, Divider, Blockquote, Grid } from '@mantine/core'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { ImageIcon } from '@modulz/radix-icons';




function Footer() {
  return (
    <>
      <div class="footer">
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
            <div>
              <NavLink
                // style={{ fontSize: "14px" }}
                // className="footer-about-follow"
                // to="https://www.instagram.com/empoweredemp/"
              >
                Follow us
              </NavLink>
      
              {/* <IconBrandInstagram
                style={{ marginLeft: "10px", height: "20px" }}
              /> */}
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer