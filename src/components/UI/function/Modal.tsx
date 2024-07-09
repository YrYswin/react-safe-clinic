import React from "react";
import { styled } from "@mui/material";

interface ModalMenuProps {
  children: React.ReactNode;
  width?: number;
}
const ModalMenu: React.FC<ModalMenuProps> = ({ children, width }) => {
  return (
    <Modal>
      <ModalWindow width={width}>{children}</ModalWindow>
    </Modal>
  );
};

export default ModalMenu;

const Modal = styled("div")({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "rgb(25, 25, 25, 0.25)",
  zIndex: "55",
});
const ModalWindow = styled("div")<{ width?: number }>(({ width }) => ({
  boxShadow: "0 0 50px rgb(30, 30, 30, 0.2)",
  border: "2px outlet red",
  backgroundColor: "white",
  borderRadius: "10px",
  width: width ? width : "750px",
}));
