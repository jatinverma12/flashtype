import React from 'react';
import TestContainer from './../TestContainer/TestContainer';
import './ChallengeSection.css';
const ChallengeSection=({startAgain,onInputchange,selectedparagraph,words,characters,wpm,timeStarted,timeRemaining,testInfo})=>{
    return(
        <div className="challenge-section-container">
            <div data-aos="fade-down" className="challenge-section-header">
                <h1>Take a speed test now</h1>
                <TestContainer selectedparagraph={selectedparagraph} words={words} 
                characters={characters} wpm={wpm} timeStarted={timeStarted} 
                timeRemaining={timeRemaining} testInfo={testInfo}
                onInputchange={onInputchange} startAgain={startAgain}/>
            </div>
        </div>
    )
}

export default ChallengeSection;