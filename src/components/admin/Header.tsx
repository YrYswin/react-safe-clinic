import React from "react";
import { styled } from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";

import { searchParamsState } from "../../utils/types";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import InputUI from "../UI/function/InputUI";

interface HeaderProps {
  pl?: string;
  filters?: searchParamsState[];
  onChange?: (e: string) => void;
  value?: string;
  isNotSearch?: boolean;
  onTag?: (e: number) => void;
  onGender?: (e: string) => void;
  onAge?: (e: string) => void;
  pageTitle?: string;
}

const Header: React.FC<HeaderProps> = ({
  pl,
  filters,
  onChange,
  value,
  isNotSearch,
  onTag,
  onGender,
  onAge,
  pageTitle,
}) => {
  const location = useLocation();

  return (
    <Container>
      {pageTitle && <h1>{pageTitle}</h1>}

      {isNotSearch ? (
        <div></div>
      ) : (
        <InputUI
          placeholder={pl}
          items={filters}
          onChange={onChange}
          value={value}
          onTag={onTag}
          onGender={onGender}
          onAge={onAge}
        />
      )}

      <UserAvatar>
        <div>
          <NavLinkBLock to="/admin">Admin</NavLinkBLock>
          <NavLinkBLock to="/doctor">Doctor</NavLinkBLock>
          <NavLinkBLock to="/director">Director</NavLinkBLock>
        </div>

        <Notification>
          <NotificationsActiveIcon />
        </Notification>

        {location.pathname === "/admin" ? (
          <Avatar>
            <img src="/image/Avatar.jpg" alt="RobertDeNiro" />
          </Avatar>
        ) : (
          <AvatarLink to={"/doctor/profile"}>
            <img src="/image/Avatar.jpg" alt="RobertDeNiro" />
          </AvatarLink>
        )}
      </UserAvatar>
    </Container>
  );
};

export default Header;

const Container = styled("div")({
  backgroundColor: "white",
  borderRadius: "0 0 10px 10px",
  padding: "10px 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "90px",
});

const UserAvatar = styled("div")({
  display: "flex",
  alignItems: "flex-end",
  gap: "20px",
});

const Notification = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px",
  borderRadius: "50%",
  backgroundColor: "#f5f5f5",
});
const AvatarLink = styled(Link)({
  width: "clamp(30px , 40px, 60px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  overflow: "hidden",

  img: {
    width: "100%",
    objectFit: "cover",
  },
});
const Avatar = styled("div")({
  width: "clamp(30px , 40px, 60px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  overflow: "hidden",

  img: {
    width: "100%",
    objectFit: "cover",
  },
});

const NavLinkBLock = styled(NavLink)`
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  padding: 3px 5px;
  &:hover,
  &.active {
    background-color: #dcdbff;
  }
`;
