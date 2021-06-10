import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CCLogo from "../../Assets/CC_Logo_final 2.svg";
import "../Style/SignupStepper.css";
import Signup from "../../Pages/Form/Signup";

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
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown stepIndex";
  }
}

export default function SignupStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="signup_section">
      <div className="s_stepper">
        {/* <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
             <StepLabel> </StepLabel> 

          </Step>
        ))}
      </Stepper> */}
        <img src={CCLogo} />

        <div >
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div className="s_stepper_content">
              <div>
                {getStepContent(activeStep)}
              </div>

              <div>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  className="start_btn"
                >
                  {activeStep === steps.length - 1 ? "Finish" : "START"}
                </Button>
              </div>
            </div>
          )}
          <Stepper className="stepper_step" activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel> </StepLabel>
              </Step>
            ))}
          </Stepper>
          <div className="s_stepper_bottom">
          <span>© 2020 Collective Contract, Inc. All rights reserved. | <strong>Privacy</strong></span>
          </div>
        </div>
      </div>
      <div className="s_stepperimg">

      </div>
    </div>
  );
}
