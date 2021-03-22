import React from 'react';
import './TestLetter.css';

const TestLetter=({characterinfo})=>{
    const letterstatus={
        notattempted:"test-letter-notattempted",
        correct:"test-letter-correct",
        incorrect:"test-letter-incorrect"
    }[characterinfo.status];
    
    //this dictionary will return rhs of the matched lhs from characterinfo.status
    return(
        <span className={`individual-char ${letterstatus}`}>{characterinfo.testletter}</span>
    )
}
export default TestLetter;