import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Formik, Form } from "formik";

import LoanDetails1 from "../components/Forms/loanDetails1";
import LoanDetails2 from "../components/Forms/loanDetails2";
import PersonalDetails from "../components/Forms/personalDetails";
import Review from "../components/Forms/review";
import HomePage from "./homepage";

import ValidationSchema from "../utils/Forms/validationSchema";
import ApplicationFormModel from "../utils/Forms/applicationFormModel";
import FormInitialValues from "../utils/Forms/formInitialValues";

import useStyles from "../css/styles";

const { formId, formField } = ApplicationFormModel;

function renderStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalDetails formField={formField} />;
    case 1:
      return <LoanDetails1 formField={formField} />;
    case 2:
      return <LoanDetails2 formField={formField} />;
    case 3:
      return <Review formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}
const steps = [1, 2, 3, 4];
const BorrowerApplication = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(1);
  const currentValidationSchema = ValidationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function submitForm(values, actions) {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  function handleSubmit(values, actions) {
    console.log({ values, actions });
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
      console.log(activeStep + 1);
    }
  }

  function handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        Application
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <HomePage />
        ) : (
          <Formik
            initialValues={FormInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {renderStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? "Submit" : "Next"}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
};
export default BorrowerApplication;
