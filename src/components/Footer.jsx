import React from "react";
import styled from "styled-components";
import { FaGlobe, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const FooterContainer = styled.footer`
  padding: 20px 40px;
  background-color: #1e1e1e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  flex-wrap: wrap;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  color: #fff;
  margin-right: 10px;
`;

const ProfileName = styled.div`
  font-size: 1.2em;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1em;
  color: #bbb;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }

  svg {
    margin-right: 8px;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Profile>
      <ProfileCircle>
        <img
          width="100%"
          height={"100%"}
          style={{ overflow: "hidden", borderRadius: "50%" }}
          src="sahil_dark_logo.png"
          alt="Sahil Kumar"
        />
      </ProfileCircle>
      <ProfileName>
        Sahil Kumar
        <br />
        Developer
      </ProfileName>
    </Profile>
    <Contact>
      <ContactLink href="https://krsahil.tech/">
        <FaGlobe /> https://krsahil.tech/
      </ContactLink>
      <ContactLink href="tel:+911234567890">
        <FaPhone /> +91 98765 43210
      </ContactLink>
      <ContactLink href="mailto:sahil1206910@gmail.com">
        <FaEnvelope /> sahil1206910@gmail.com
      </ContactLink>
      <ContactLink href="#">
        <FaMapMarkerAlt /> [IN] India , Asia
      </ContactLink>
    </Contact>
  </FooterContainer>
);

export default Footer;
