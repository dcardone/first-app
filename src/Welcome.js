import React, { useState } from 'react';
import './Welcome.css';
import github from './images/githubLogo.png';
import linkedin from './images/linkedinLogo.png';

/* function link() {
    return (

    );
} */

function Welcome() {

    const[isShown, setIsShown] = useState(false);

    return (
        <div className='welcome-page'>
            <header className='header'>
                <div id='welcomeTitle'>
                 <h1>
                    Dominick Cardone: Fullstack Engineer
                 </h1>
                </div>
               
                <div className='subWelcomeTitle'>
                <h3>
                    Please, take a look
                </h3>
                </div>
                
            </header>

            <div className='personalLinks'>
                <div id='github'>
                    <a 
                        href='https://github.com/dcardone' 
                        target="_blank"
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                    >
                        <img src={github}></img>
                    </a>
                    {isShown && (
                        <p>YAY YOURE ABOUT TO CLICK IT</p>
                    )}

                </div>
                <div id='linkedin'>
                    <a
                        href='https://www.linkedin.com/in/dominick-cardone-48ab81230/'
                        target="_blank"
                    >
                        <img src={linkedin}></img>
                    </a>

                </div>
            </div>
        </div>

    );
}

export default Welcome;