import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../data.json";

const { apps } = data;

const DetailContainer = styled.div`
  padding: 20px;
  background-color: #121212;
  color: #ffffff;
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const CoverImage = styled.div`
  background-color: #333;
  height: 250px;
  border-radius: 8px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  overflow: hidden;
  color: #ffffff;
`;

const CoverImageImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const AppInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const AppIcon = styled.div`
  background-color: #444;
  width: 120px;
  height: 120px;
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  color: #ffffff;
`;

const AppDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppName = styled.h1`
  font-size: 2.5em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const DeveloperName = styled.h2`
  font-size: 1.2em;
  font-weight: normal;
  color: #aaa;
`;

const Screenshots = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    overflow-x: visible;
    white-space: normal;
  }
`;

const Screenshot = styled.div`
  background-color: #444;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  overflow: hidden;
  flex: 0 0 auto;
`;

const Description = styled.div`
  margin-top: 30px;
  font-size: 1.1em;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const InstallButton = styled.a`
  padding: 12px 25px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  margin-top: 30px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const AppDetail = ({ data }) => {
  const { slug } = useParams();

  const appDetail = apps.find((app) => app.appSlug === slug);
  // Sample static data
  // const appDetail = {
  //   coverImage:
  //     "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // URL for cover image
  //   appName: "Sample App",
  //   appSlug: "sample-app-1",
  //   developerName: "Developer Name",
  //   screenshots: ["", "", "", ""], // URLs for screenshots
  //   description: [
  //     "This app is built using this this this ....",
  //     "This app solves this problem ....",
  //     "This ...",
  //   ],
  // };

  return (
    <DetailContainer>
      <CoverImage>
        {appDetail.coverImage ? (
          <CoverImageImg src={appDetail.coverImage} alt="Cover" />
        ) : (
          `Cover Image`
        )}
      </CoverImage>
      <AppInfo>
        <AppIcon>App Icon</AppIcon>
        <AppDetails>
          <AppName>{appDetail.appName}</AppName>
          <DeveloperName>{appDetail.developerName}</DeveloperName>
        </AppDetails>
      </AppInfo>
      <InstallButton
        href="https://drive.usercontent.google.com/download?id=1Vf4a-nCAFYFVxqtgOJh87YLU7lD9OLdf&export=download"
        download={`${appDetail.appName}.apk`}
      >
        INSTALL
      </InstallButton>
      <Screenshots>
        {appDetail.screenshots.map((screenshot, index) => (
          <Screenshot key={index}>SS - {index + 1}</Screenshot>
        ))}
      </Screenshots>
      <Description>
        <ul>
          {appDetail.description.map((desc, index) => (
            <li style={{ listStyleType: "disc" }} key={index}>{`${desc}`}</li>
          ))}
        </ul>
      </Description>
    </DetailContainer>
  );
};

export default AppDetail;
