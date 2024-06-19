import React from "react";
import { styled } from "styled-components";

interface ModalMenuProps {
  children: React.ReactNode;
}
const ModalMenu: React.FC<ModalMenuProps> = ({ children }) => {
  return (
    <Modal>
      <ModalWindow>{children}</ModalWindow>
    </Modal>
  );
};

export default ModalMenu;

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(25, 25, 25, 0.25);
`;
const ModalWindow = styled.div`
  box-shadow: 0 0 50px rgb(30, 30, 30, 0.2);
  border: 2px outlet red;
  background-color: white;
  border-radius: 10px;
  width: 750px;
`;
