import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  padding: 40px;
  background-color: #121212;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1.8em;
  color: #fff;
`;

const WebGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const WebCard = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  color: #fff;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const WebsiteScreenshot = styled.div`
  background-color: #444;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: #ffffff;
`;

const WebsiteName = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2em;
  color: #fff;
`;

const WebsiteLink = styled.a`
  color: #007bff;
  font-size: 1em;
  display: block;
  margin-bottom: 10px;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

const TechStack = styled.p`
  font-size: 0.9em;
  color: #aaa;
`;

const WebList = () => {
  // Sample static data for websites
  const websites = [
    {
      id: 1,
      name: "Website 1",
      url: "https://url1.com",
      techStack: "HTML, CSS, JS",
    },
    {
      id: 2,
      name: "Website 2",
      url: "https://url2.com",
      techStack: "HTML, CSS, JS",
    },
    {
      id: 3,
      name: "Website 3",
      url: "https://url3.com",
      techStack: "HTML, CSS, JS",
    },
  ];

  return (
    <ListContainer>
      <Title>Web Apps</Title>
      <WebGrid>
        {websites.map((website) => (
          <WebCard key={website.id}>
            <WebsiteScreenshot>Website SS</WebsiteScreenshot>
            <WebsiteName>{website.name}</WebsiteName>
            <WebsiteLink
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {website.url}
            </WebsiteLink>
            <TechStack>{website.techStack}</TechStack>
          </WebCard>
        ))}
      </WebGrid>
    </ListContainer>
  );
};

export default WebList;
