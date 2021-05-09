import React from "react";
import Stepper from "../component/Stepper";

function Example() {
  return (
    <div style={{margin: 12}}>
      <Stepper
        numberOfSteps={4}
        completedStepColor={"#007bff80"}
        inactiveStepColor={"#cccccc"}
        completedProgressColor={"#007bff80"}
        remainingProgressColor={"#cccccc"}
        activeStep={1}
        labelText={'Step'}
        totalStepperWidth={'75%'}
      />
    </div>
  );
}

export default Example;
