import { styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/admin/SideBar";

interface LayoutProps {
  navList: any;
}

const Layout: React.FC<LayoutProps> = ({ navList }) => {
  return (
    <LayoutStyle>
      <SideBar nav={navList} />

      <Container>
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

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  marginRight: "30px",
  width: "100%",
});
