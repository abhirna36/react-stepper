import React from "react";
import Stepper from "../component/Stepper";

function Example() {
  return (
    <div style={{display: 'flex', margin: 12,}}>
      <Stepper
        numberOfSteps={4}
        completedStepColor={"#007bff"}
        inactiveStepColor={"#cccccc"}
        completedProgressColor={"#007bff"}
        remainingProgressColor={"#cccccc"}
        activeStep={2}
        labelText={'Step'}
      />
    </div>
  );
}

export default Example;
