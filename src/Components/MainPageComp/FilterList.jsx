import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
// assets
import more from "../../Assets/sort-down.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 30,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  list: {
    marginTop: 10,
    border: "1px solid #dedede",
    boxShadow: "none",
    borderRadius: 6,
  },
}));

const listItem = {
  productName: [
    "Desks and Workspace",
    "Healthcare",
    "Accessories",
    "JSI",
    "Tables",
    "Seating",
  ],
  user: [
    "Traninig Tables",
    "Lounge Seating",
    "Benches & Ottomans",
    "Occasional Tables",
    "Side Chairs",
    "Task Chairs",
  ],
  advanced: [
    "AIS",
    "Darran",
    "JSI",
    "Element Contract",
    "Stance Healthcare",
    "Hush Office",
  ],
};

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState({
    panel1: false,
    panel2: false,
    panel3: false,
  });

  const handleChange = (panel) => {
    setExpanded({ ...expanded, [panel]: !expanded[panel] });
  };

  return (
    <div className={classes.root}>
      <Accordion
        onChange={() => handleChange("panel1")}
        className={classes.list}
      >
        <AccordionSummary
          expandIcon={<img src={more} alt="..." />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Product Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="filter_check">
            {listItem.productName.map((val) => (
              <label key={val} htmlFor={val}>
                <input type="checkbox" name={val} id={val} />
                <p>{val}</p>
              </label>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        // expanded={expanded === "panel2"}
        onChange={() => handleChange("panel2")}
        className={classes.list}
      >
        <AccordionSummary
          expandIcon={<img src={more} alt="..." />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Users</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="filter_check">
            {listItem.user.map((val) => (
              <label key={val} htmlFor={val}>
                <input type="checkbox" name={val} id={val} />
                <p>{val}</p>
              </label>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        onChange={() => handleChange("panel3")}
        className={classes.list}
      >
        <AccordionSummary
          expandIcon={<img src={more} alt="..." />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Advanced settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="filter_check">
            {listItem.advanced.map((val) => (
              <label key={val} htmlFor={val}>
                <input type="checkbox" name={val} id={val} />
                <p>{val}</p>
              </label>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
