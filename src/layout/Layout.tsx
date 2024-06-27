import React from "react";
import { styled } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";

import { NavigateState } from "../utils/types";

import SideBar from "../components/admin/SideBar";
import "../index.css";

interface LayoutProps {
  navList: NavigateState[];
}

const Layout: React.FC<LayoutProps> = ({ navList }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = React.useState(location);
  const [transitionStage, setTransitionStage] = React.useState("fadeIn");

  React.useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location]);

  React.useEffect(() => {
    if (transitionStage === "fadeOut") {
      const timeout = setTimeout(() => {
        setTransitionStage("fadeIn");
        setDisplayLocation(location);
      }, 500); // Длительность анимации совпадает с CSS
      return () => clearTimeout(timeout);
    }
  }, [transitionStage, location]);

  return (
    <LayoutStyle>
      <SideBar nav={navList} />

      <Container
        transitionStage={transitionStage}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransitionStage("fadeIn");
          }
        }}
        key={displayLocation.key}
      >
        <Outlet />
      </Container>
    </LayoutStyle>
  );
};

export default Layout;

const LayoutStyle = styled("div")({
  display: "flex",
  gap: "30px",
});

const Container = styled("div")<{ transitionStage: string }>(
  ({ transitionStage }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    marginRight: "30px",
    width: "100%",
    animation: `${transitionStage} 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards`,
    "@keyframes fadeIn": {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    "@keyframes fadeOut": {
      from: { opacity: 1 },
      to: { opacity: 0 },
    },
  })
);
