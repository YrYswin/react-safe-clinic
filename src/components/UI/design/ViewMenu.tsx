import React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ViewMenuProps {
  small: boolean;
  opneInfo: () => void;
  deleteItem: () => void;
}

const ViewMenu: React.FC<ViewMenuProps> = ({ small, opneInfo, deleteItem }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        sx={{
          height: small ? "20px" : "30px",
          width: small ? "20px" : "30px",
          margin: small ? "0 5px " : "0",
        }}
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        size="small"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={opneInfo}>Смотреть</MenuItem>
        <MenuItem onClick={deleteItem}>Отменить</MenuItem>
      </Menu>
    </div>
  );
};
export default ViewMenu;
