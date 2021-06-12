import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import CCLogo from "../../Assets/CC_Logo_final 2.svg";
import "../Style/SignupStepper.css";
import Signup from "../../Pages/Form/Signup";
import SignupTwo from "../../Pages/Form/SignupTwo";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["", ""];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Signup />;
    case 1:
      return <SignupTwo />;
    default:
      return "Unknown stepIndex";
  }
}

export default function SignupStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const history = useHistory();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep == 1) {
      history.push("/login");
    }
  };

  return (
    <div className="signup_section">
      <div className="s_stepper">
        <Link to="/">
          <img src={CCLogo} />
        </Link>
        <div>
          <div className="s_stepper_content">
            <div>{getStepContent(activeStep)}</div>

            <div>
              <Button
                variant="contained"
                onClick={handleNext}
                className="stepper_btn"
              >
                {activeStep === steps.length - 1 ? "Finish" : "START"}
              </Button>
            </div>
          </div>
          <Stepper
            className="stepper_step"
            activeStep={activeStep}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel> </StepLabel>
              </Step>
            ))}
          </Stepper>
          <div className="s_stepper_bottom">
            <span>
              © 2020 Collective Contract, Inc. All rights reserved. |{" "}
              <strong>Privacy</strong>
            </span>
          </div>
        </div>
      </div>
      <div
        className={`s_stepperimg ${activeStep === 0 ? "s_img1" : "s_img2"}`}
      ></div>
    </div>
  );
}
