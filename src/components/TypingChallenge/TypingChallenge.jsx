import React from 'react';
import TestLetter from './../TestLetter/TestLetter';
import './TypingChallenge.css';
const TypingChallenge=({testInfo,selectedparagraph,timeRemaining,timeStarted,onInputchange})=>{
    console.log(testInfo);
    return(
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:{timeRemaining>=10 ? timeRemaining : `0${timeRemaining}`}</p>
                
                <p className="timer-info">{!timeStarted && "Start typing to start the test"}</p>
            </div>
            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        { testInfo.map((individulaletter,index)=>{
                            return <TestLetter key={index} characterinfo={individulaletter} />
                        })}
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea className="textarea" placeholder="Start typing here..." onChange={(e)=>onInputchange(e.target.value)}>

                    </textarea>
                </div>
            </div>
        </div>
    )
}
export default TypingChallenge;