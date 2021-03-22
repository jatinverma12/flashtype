
import React from 'react';
import './Footer.css';
import {AiFillInstagram,AiOutlineLinkedin,AiFillGithub} from 'react-icons/ai';

const Footer=()=>{
    return(
        <div className="footer-container">
            <a target="_blank"  href="https://www.instagram.com/jatin_v99/" rel="noreferrer"><AiFillInstagram size="50px" color="white" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/jatin-verma-352a87175/" rel="noreferrer"><AiOutlineLinkedin size="50px" color="white"/></a>
            <a target="_blank" href="https://github.com/jatinverma12" rel="noreferrer"><AiFillGithub size="50px" color="white"/></a>
        </div>
    )
}
export default Footer;