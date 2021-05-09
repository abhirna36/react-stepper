import React from "react";
import Stepper from "../component/Stepper";

function Example() {
  return (
    <div style={{display: 'flex', margin: 12,}}>
      <Stepper
        numberOfSteps={3}
        completedStepColor={"#007bff80"}
        inactiveStepColor={"#cccccc"}
        completedProgressColor={"#007bff80"}
        remainingProgressColor={"#cccccc"}
        activeStep={1}
        labelText={'Step'}
      />
    </div>
  );
}

export default Example;
