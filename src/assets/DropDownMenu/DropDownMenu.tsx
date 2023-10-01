import { FC, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./dropDownMenu.scss";

export const DropDownMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState(1);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {value}
        <ArrowDropDownIcon
          sx={{
            transform: `rotateX: ${!open ? "0deg" : "180deg"}`,
          }}
          fontSize="small"
        />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {[1, 2, 3].map((v) => (
          <MenuItem
            onClick={() => {
              handleClose();
              setValue(v);
            }}
            key={v}
          >
            {v}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
