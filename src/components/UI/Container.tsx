import React from "react";
import { Container, styled } from "@mui/material";

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerBox: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default ContainerBox;

const ContainerStyle = styled(Container)({
  margin: "0",
  padding: "10px !important",
  backgroundColor: "white",
  borderRadius: "10px 10px 0 0",
  height: "100%",
});
