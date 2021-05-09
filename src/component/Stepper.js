import React, { useEffect, useState } from "react";

function Stepper(props) {
  const {
    numberOfSteps,
    completedStepColor,
    inactiveStepColor,
    completedProgressColor,
    remainingProgressColor,
    activeStep,
    labelText,
  } = props;

  const [progressSteps, setProgressSteps] = useState([]);
  const [labelArray, setLabelArray] = useState([]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < numberOfSteps * 2 - 1; i++) {
      arr.push(i);
    }
    setProgressSteps(arr);
    arr = [];
    for (let i = 0; i < numberOfSteps; i++) {
      arr.push(i);
    }
    setLabelArray(arr);
  }, [numberOfSteps]);

  console.log("progress step length", progressSteps);

  return (
    <div style={{ flex: 1 }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          marginTop: 12,
        }}
      >
        {progressSteps.map((step, index) => {
          return index % 2 !== 0 ? (
            <div
              style={{
                height: 2,
                display: "flex",
                flex: 1,
                flexDirection: "row",
                backgroundColor:
                  activeStep > 1
                    ? completedProgressColor
                    : remainingProgressColor,
              }}
            >
              {/* <div style={{height:2, width: 10, backgroundColor: completedProgressColor}}/> */}
            </div>
          ) : (
            <div
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                backgroundColor:
                  (activeStep*2) > index
                    ? completedStepColor
                    : inactiveStepColor,
                alignSelf: "center",
              }}
            />
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        {labelArray.map((step, index) => {
          return (
            <p
              key={index}
              style={{
                color: activeStep === index ? "black" : "inactiveStepColor",
              }}
            >
              {labelText} {step + 1}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Stepper;
