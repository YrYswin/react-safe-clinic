import React from "react";
import { styled } from "@mui/material";

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerBox: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default ContainerBox;

const ContainerStyle = styled("div")({
  padding: "10px !important",
  backgroundColor: "white",
  borderRadius: "10px",
  height: "100%",
  marginBottom: "20px",

  h1: {
    fontSize: "20px",
    fontWeight: "500",
    margin: "10px 20px",
  },
});
