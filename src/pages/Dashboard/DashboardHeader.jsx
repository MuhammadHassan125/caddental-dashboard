/* eslint-disable react/prop-types */
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { TextField } from "@mui/material";

const DashboardHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header className="">
        <div className="header-main">
          <div className="justify-div">
            {/* <div className="humberger-header">
              <img src="/Shape.png" onClick={handleSideBarToggle} />
            </div> */}

              {/* <input placeholder="Search" className="search-input" /> */}
              {/* <img src="/icon-search.png" /> */}
              <TextField
                    label="Search"
                    variant="outlined"
                    size="small"
                    sx={{ width: "25vw", }}
              />
          </div>

          <div className="justify-div">
            {/* <div className="icons-top">
              <div className="notification-div">
                <img src="/Vector.png" />
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>

              </div> */}
{/* 
              <div className="notification-div">
                <img src="/Vector (1).png" />
              <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
              </div> */}

            </div>

            <div className="right-pic-main">
              <h4>Hello,</h4>
              <h3>User</h3>

              <Avatar
                alt="Remy Sharp"
                src={ "/placeholder.png"}
                sx={{ width: 46, height: 46 }}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
              <div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        {/* </div> */}
      </header>
    </>
  );
};

export default DashboardHeader;
