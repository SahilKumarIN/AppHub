import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { apps } from "../../data.json";

const ListContainer = styled.div`
  padding: 40px;
  background-color: #121212;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1.8em;
  color: #fff;
`;

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const AppCard = styled(Link)`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  color: #fff;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const AppIcon = styled.div`
  background-color: #444;
  width: 80px;
  height: 80px;
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  margin: 0 auto 20px;
  color: #ffffff;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover,
    object-position: center;
  }
`;

const AppName = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2em;
  color: #fff;
`;

const InstallButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const AppList = () => {
  // Sample static data for apps

  return (
    <ListContainer>
      <Title>Android Apps</Title>
      <AppGrid>
        {apps.map((app) => (
          <AppCard to={`/app/${app.appSlug}`} key={app.id}>
            <AppIcon>
              <img src={app.appIcon} alt="App Icon" />
            </AppIcon>
            <AppName>{app.appName}</AppName>
            <InstallButton>INSTALL</InstallButton>
          </AppCard>
        ))}
      </AppGrid>
    </ListContainer>
  );
};

export default AppList;
