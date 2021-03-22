import React from 'react';
import ChallengeDetailCard from './../ChallengeDetailCard/ChallengeDetailCard';
import TypingChallenge from './../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css'
const TypingChallengeContainer=({onInputchange,testInfo,words,characters,wpm,timeStarted,timeRemaining,selectedparagraph})=>{
    return(
        <div className="typing-challenge-container">
            {/*Details section*/}
            <div className="details-container">
                 {/*characters types */}
                 <ChallengeDetailCard cardname={"Words"} cardvalue={words} />
                {/*words typed*/}
                <ChallengeDetailCard cardname={"Characters"} cardvalue={characters} />
                {/*speed*/}
                <ChallengeDetailCard cardname={"Speed"} cardvalue={wpm} />
            </div>
            
            <div className="typewriter-container">
                {/*The real challenge*/}
                <TypingChallenge testInfo={testInfo} selectedparagraph={selectedparagraph} 
                timeRemaining={timeRemaining} timeStarted={timeStarted}
                onInputchange={onInputchange}/>
            </div>
            
        </div>
    )
}
export default TypingChallengeContainer;