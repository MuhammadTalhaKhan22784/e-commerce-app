import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { Box } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
// assets
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import add from "../../Assets/Vector.svg";
import item1 from "../../Assets/item1.png";
import item1s from "../../Assets/item1s.png";
import iicon from "../../Assets/iicon.png";
import dollarIcon from "../../Assets/dollar-circle.png";
import fileIcon from "../../Assets/file-icon.png";
import modelIcon from "../../Assets/3dmodel-icon.png";
import SwitchToggle from "../Switch";

const styles = (theme) => ({
  root: {
    margin: 0,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className="asd" {...other}>
      {/* <Typography variant="h6">{children}</Typography> */}
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <button onClick={handleClickOpen}>
        <img src={add} alt="..." />
      </button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>

        <DialogContent className="additem_model_content">
          <Box>
            <Box className="amc_1">
              <Box className="amc1_content">
                <img src={item1} alt="..." />
                <Box>
                  <img src={item1s} alt="..." />
                  <img src={item1s} alt="..." />
                  <img src={item1s} alt="..." />
                </Box>
              </Box>
            </Box>
            <Box className="amc_2">
              <Box className="amc2_content">
                <h2>Grove</h2>
                <Box className="amc2_text1" mt="0.5rem" display="flex" alignItems="center">
                  <img src={iicon} alt="..." />
                  <span>Product Information</span>
                </Box>
                <Box mt="0.5rem">
                  <span>Product Type</span>
                  <strong>Tables</strong>
                </Box>
                <Box mt="0.5rem" mb="0.5rem">
                  <hr />
                </Box>
                <Box mt="0.5rem">
                  <span>Application</span>
                  <strong>Occassional Tables</strong>
                </Box>
                <Box mt="0.5rem" mb="0.5rem">
                  <hr />
                </Box>
                <Box mt="0.5rem">
                  <span>Size</span>
                  <strong>12 W x NA Lx17 H X NA D</strong>
                </Box>
                <Box mt="0.5rem" mb="0.5rem">
                  <hr />
                </Box>
                <Box mt="0.5rem">
                  <span>Model</span>
                  <strong>GRO1217AS3744</strong>
                </Box>
              </Box>
            </Box>
            <Box className="amc_3">
              <Box className="amc3_content">
                <Box>
                  <img src={dollarIcon} alt="..." />
                </Box>
                <Box
                  mt="0.5rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <span>Discount</span>
                  <strong>60%</strong>
                </Box>
                <Box mt="0.5rem" mb="0.5rem">
                  <hr />
                </Box>
                <Box
                  mt="0.5rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <span>List Price</span>
                  <strong>$474</strong>
                </Box>
                <Box mt="0.5rem" mb="0.5rem">
                  <hr />
                </Box>
                <Box
                  mt="0.5rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <span>Net Price</span>
                  <strong>$189.60</strong>
                </Box>
                <Box mt="0.5rem" mb="0.5rem">
                  <hr />
                </Box>
                <Box
                  mt="0.5rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <span>Files</span>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <span>Download</span>
                    <img src={fileIcon} alt="..." />
                  </Box>
                </Box>
                <Box mt="0.5rem" mb="0.5rem">
                  <hr />
                </Box>
                <Box
                  mt="0.5rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <span>Renders</span>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <span>Download</span>
                    <img src={modelIcon} alt="..." />
                  </Box>
                </Box>
                <Box mt="0.5rem" mb="0.5rem">
                  <hr />
                </Box>
                <Box
                  mt="0.5rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <span>Net Price</span>
                  <SwitchToggle />
                </Box>
              </Box>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
