import React from 'react';
import './TestContainer.css';
import TryAgain from './../TryAgain/TryAgain';
import TypingChallengeContainer from './../TypingChallengeContainer/TypingChallengeContainer';
const TestContainer=({startAgain,onInputchange,testInfo,selectedparagraph,words,characters,wpm,timeRemaining,timeStarted})=>{
    return(
        <div className="test-container">
            {
                timeRemaining>0 ? (
                    <div data-aos="fade-up" className="typingchallenge-container">
                        <TypingChallengeContainer testInfo={testInfo} words={words} characters={characters} wpm={wpm} timeRemaining={timeRemaining} 
                        timeStarted={timeStarted} selectedparagraph={selectedparagraph} 
                        onInputchange={onInputchange}  />

                    </div>
                ):(
                    <div className="tryagain-container">
                         <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain}/>
                    </div>
                )
            }
            
           
            

        </div>
    )
}
export default TestContainer;