import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  padding: 40px;
  background-color: #121212;
  color: #ffffff;
  min-height: 100vh;
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

const AppInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
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
`;

const DeveloperName = styled.h2`
  font-size: 1.2em;
  font-weight: normal;
  color: #aaa;
`;

const Screenshots = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
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
`;

const Description = styled.div`
  margin-top: 30px;
  font-size: 1.1em;
  line-height: 1.6;
`;

const InstallButton = styled.button`
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

const AppDetail = () => {
  const { id } = useParams();

  // Sample static data
  const appDetail = {
    coverImage: "", // URL for cover image
    appName: "Sample App",
    developerName: "Developer Name",
    screenshots: ["", "", "", ""], // URLs for screenshots
    description: [
      "This app is built using this this this ....",
      "This app solves this problem ....",
      "This ...",
    ],
  };

  return (
    <DetailContainer>
      <CoverImage>
        {appDetail.coverImage ? (
          <img
            src={appDetail.coverImage}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          "Cover Image [WIDTH x 250]"
        )}
      </CoverImage>
      <AppInfo>
        <AppIcon>App Icon</AppIcon>
        <AppDetails>
          <AppName>{appDetail.appName}</AppName>
          <DeveloperName>{appDetail.developerName}</DeveloperName>
        </AppDetails>
      </AppInfo>
      <Screenshots>
        {appDetail.screenshots.map((screenshot, index) => (
          <Screenshot key={index}>SS - {index + 1}</Screenshot>
        ))}
      </Screenshots>
      <Description>
        <ul>
          {appDetail.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </Description>
      <InstallButton>INSTALL</InstallButton>
    </DetailContainer>
  );
};

export default AppDetail;
