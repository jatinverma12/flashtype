import React from 'react';
import './ChallengeDetailCard.css';

const ChallengeDetailCard=({cardname,cardvalue})=>{
    return(
        <div className="details-card-container">
            <div className="cardname">{cardname}</div>
            <div className="cardvalue">{cardvalue}</div>
        </div>
    )
}
export default ChallengeDetailCard;