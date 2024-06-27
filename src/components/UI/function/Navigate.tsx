import React from "react";
import { NavigateState } from "../../../utils/types";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material";

interface NavigateProps {
  navArray: NavigateState[];
}

const Navigate: React.FC<NavigateProps> = ({ navArray }) => {
  return (
    <ContainerStyle>
      {navArray.map((obj, i) => (
        <NavLinkStyle to={obj.pathname} key={i}>
          <img src={obj.icon} alt="iconNav" />
          <h3>{obj.name}</h3>
        </NavLinkStyle>
      ))}
    </ContainerStyle>
  );
};

export default Navigate;

const ContainerStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const NavLinkStyle = styled(NavLink)({
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: "10px",
  padding: "7px 17px",
  borderRadius: "5px",
  transition: "all 0.2s ease-in",

  "&:hover": {
    backgroundColor: "rgb(221, 220, 255)",
    marginLeft: "10px",
  },
  "&.active": {
    backgroundColor: "rgb(221, 220, 255)",
    marginLeft: "10px",
    h3: {
      fontWeight: "600",
    },
  },

  img: {
    width: "20px",
    height: "20px",
  },
  h3: {
    fontSize: "14px",
    color: "black",
    width: "130px",
  },
});
