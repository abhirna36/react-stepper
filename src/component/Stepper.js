import React, { useEffect, useState } from 'react'

function Stepper(props) {
    const {numberOfSteps,completedStepColor,inactiveStepColor,completedProgressColor,remainingProgressColor,activeStep,labelText} = props;

    const [progressSteps, setProgressSteps] = useState([]);

    useEffect(() => {
        let arr = [];
        for(let i = 0; i<numberOfSteps; i++ ) {
            arr.push(i);
        }
        setProgressSteps(arr);
    },[]);

    console.log("progress step length",progressSteps);

    return (
        <div style={{flex: 1}}>
        <div style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, flex:1}}>
            {/* {progressSteps.map((step, index) => {
                return (
                    <div style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12}}>
                        <div style={{height: 30, width:30, borderRadius: 15,backgroundColor: completedStepColor, alignSelf: 'center'}} />
                        {index !== progressSteps.length-1 && (
                            <div style={{display: 'flex', flex: 1, width: 100,flexDirection: 'row', backgroundColor: activeStep > 1 ? completedProgressColor: '#cccccc'}}>
                            <div style={{height: 5, width: 10, backgroundColor: completedProgressColor}}/>
                        </div>
                        )}
                    </div>
                )
            })} */}
            {/* <div style={{display: 'flex', flex: 1, width: 100,flexDirection: 'row', backgroundColor: activeStep > 1 ? completedProgressColor: '#cccccc'}}>
                            <div style={{height: 5, width: 10, backgroundColor: completedProgressColor}}/>
                        </div> */}
            <div style={{height: 30, width:30, borderRadius: 15,backgroundColor: completedStepColor, alignSelf: 'center'}}></div>
                <div style={{display: 'flex', flex: 1, flexDirection: 'row', backgroundColor: activeStep > 1 ? completedProgressColor: remainingProgressColor}}>
                    <div style={{height: 5, width: 10, backgroundColor: completedProgressColor}}/>
                </div>
            <div style={{height: 30,width:30, borderRadius: 15,backgroundColor: activeStep > 1 ? completedStepColor: inactiveStepColor}} />
            <div style={{display: 'flex', flex: 1, flexDirection: 'row', backgroundColor: activeStep > 2? completedProgressColor: remainingProgressColor}}>
                <div style={{height: 5, width: 35, backgroundColor: activeStep > 1 ? completedProgressColor: remainingProgressColor}} />
            </div>
            <div style={{height: 30, width: 30, borderRadius: 15,backgroundColor: activeStep > 2 ? completedStepColor: inactiveStepColor}} />
        </div>
        
        <div style={{display: 'flex',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8}}>
            {progressSteps.map((step, index) => {
                return <p style={{color: activeStep === index ? 'black' : 'inactiveStepColor'}}>{labelText} {step+1}</p>
            })}
        </div>
    </div> 
    )
}

export default Stepper
