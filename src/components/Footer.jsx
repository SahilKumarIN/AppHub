import React from "react";
import styled from "styled-components";
import { FaGlobe, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const FooterContainer = styled.footer`
  padding: 20px 40px;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const ProfileCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-right: 10px;

  img {
    width: 100%;
    height: auto;
  }
`;

const ProfileName = styled.div`
  font-size: 1.2em;
  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: #007bff;
    }
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
        <img src="sahil_dark_logo.png" alt="Profile" />
      </ProfileCircle>
      <ProfileName>
        <a href="https://krsahil.tech/">Sahil Kumar</a>
        <br />
        Developer
      </ProfileName>
    </Profile>
    <Contact>
      <ContactLink href="https://krsahil.tech/">
        <FaGlobe /> https://krsahil.tech/
      </ContactLink>
      <ContactLink href="tel:+911234567890">
        <FaPhone /> +91 12345 67890
      </ContactLink>
      <ContactLink href="mailto:email@email.com">
        <FaEnvelope /> email@email.com
      </ContactLink>
      <ContactLink href="#">
        <FaMapMarkerAlt /> BCET, DGR, W.B.
      </ContactLink>
    </Contact>
  </FooterContainer>
);

export default Footer;
