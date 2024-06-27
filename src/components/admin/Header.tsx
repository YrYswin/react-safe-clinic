import React from "react";
import { styled } from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import dayjs from "dayjs";

import { searchParamsState } from "../../utils/types";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import InputUI from "../UI/function/InputUI";
import DateCalendar from "../UI/DateCalendar";

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

  const isDoctor = location.pathname.includes("doctor");
  const isDirector = location.pathname.includes("director");
  const isClient = location.pathname.includes("client");

  const [dateValue, setDateValue] = React.useState<dayjs.Dayjs | null>(null);
  console.log(dateValue);

  return (
    <Container>
      <div style={{ width: "25cqw" }}>
        {!isNotSearch ? (
          <InputUI
            placeholder={pl}
            items={filters}
            onChange={onChange}
            value={value}
            onTag={onTag}
            onGender={onGender}
            onAge={onAge}
          />
        ) : (
          pageTitle && <h1>{pageTitle}</h1>
        )}
      </div>

      <DateCalendar onDateChange={setDateValue} />

      <UserAvatar>
        <div>
          <NavLinkBLock to="/admin">Admin</NavLinkBLock>
          <NavLinkBLock to="/doctor">Doctor</NavLinkBLock>
          <NavLinkBLock to="/director">Director</NavLinkBLock>
          <NavLinkBLock to="/client">Client</NavLinkBLock>
        </div>

        <Notification>
          <NotificationsActiveIcon />
        </Notification>

        {isDoctor || isDirector || isClient ? (
          <AvatarLink
            to={
              isDoctor
                ? "/doctor/profile"
                : isDirector
                ? "/director/profile"
                : isClient
                ? "/client/profile"
                : ""
            }
          >
            <img src="/image/Avatar.jpg" alt="RobertDeNiro" />
          </AvatarLink>
        ) : (
          <Avatar>
            <img src="/image/Avatar.jpg" alt="RobertDeNiro" />
          </Avatar>
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
