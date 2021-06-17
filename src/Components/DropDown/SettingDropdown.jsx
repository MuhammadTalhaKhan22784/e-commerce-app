import React from "react";
import "../Style/DropDown.css";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import settingIcon from "../../Assets/settings icon1.png";
import { ListItem } from "@material-ui/core";
import { Box } from "@material-ui/core";
// assets

import upDownIcon from "../../Assets/up down.png";
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function SettingDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [show, setShow] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        className="setting_icon_b"
        onClick={handleClick}
      >
        <img src={settingIcon} alt="..." />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        className="setting_menu"
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Image</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={show === false ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(false);
              }}
            >
              Show
            </Button>
            <Button
              className={show === true ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(true);
              }}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Quantity</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={show === false ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(false);
              }}
            >
              Show
            </Button>
            <Button
              className={show === true ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(true);
              }}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Name</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={show === false ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(false);
              }}
            >
              Show
            </Button>
            <Button
              className={show === true ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(true);
              }}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Number</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={show === false ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(false);
              }}
            >
              Show
            </Button>
            <Button
              className={show === true ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(true);
              }}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Description</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={show === false ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(false);
              }}
            >
              Show
            </Button>
            <Button
              className={show === true ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(true);
              }}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Manufacture</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={show === false ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(false);
              }}
            >
              Show
            </Button>
            <Button
              className={show === true ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(true);
              }}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Size</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={show === false ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(false);
              }}
            >
              Show
            </Button>
            <Button
              className={show === true ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(true);
              }}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Category</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={show === false ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(false);
              }}
            >
              Show
            </Button>
            <Button
              className={show === true ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(true);
              }}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Application</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={show === false ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(false);
              }}
            >
              Show
            </Button>
            <Button
              className={show === true ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(true);
              }}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>List Price</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={show === false ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(false);
              }}
            >
              Show
            </Button>
            <Button
              className={show === true ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(true);
              }}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Discount</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={show === false ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(false);
              }}
            >
              Show
            </Button>
            <Button
              className={show === true ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(true);
              }}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Dealer Net</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={show === false ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(false);
              }}
            >
              Show
            </Button>
            <Button
              className={show === true ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(true);
              }}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Margin %</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={show === false ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(false);
              }}
            >
              Show
            </Button>
            <Button
              className={show === true ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(true);
              }}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>

        <StyledMenuItem className="setting_drpdwn_item">
          <Box className="sh_box1">
            <img src={upDownIcon} alt="..." />
            <span>Dealer Sell</span>
          </Box>
          <Box
            className="sh_box2"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              className={show === false ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(false);
              }}
            >
              Show
            </Button>
            <Button
              className={show === true ? "drp_active_btn1" : "drp_active_btn2"}
              onClick={() => {
                setShow(true);
              }}
            >
              Hide
            </Button>
          </Box>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
