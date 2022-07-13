import React from 'react'
import picture from './images/NFT-Art-PNG-Pic.png'
import './About.css'
import email from "./images/email.png";
import loc from "./images/placeholder.png";
import ins from "./images/instagram.png";
import call from "./images/whatsapp.png";
import {faInstagram, faGithub, faEthereum} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
{/* <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script> */}

// import Facebook from "./images/facebook_32x32.png";
// import Twitter from "./images/twitter_32x32.png";
// import Email from "./images/email_32x32.png";


const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                
                <div className='col-2'>
                    <h2>About us</h2>
                    <span className='line'></span>
                        {/* <p>Call us</p> */}
                        {/* <p>1-800-123-4567</p> */}
                        {/* <p>Because Money</p> */}
                        {/* <p>Doesn't come with instructions</p> */}
                    <p>NFT is ..., and our business is </p>
                    <p>We are ... ,<br/><br/><br/> </p>
                    <p>Contact us: (email address) || (contact-phone-number) </p>
                    <p>(put your profile and pictures here)</p>
                    
                    <div className='contact'>
                        <a href='#about'><FontAwesomeIcon icon={faEnvelope}/></a>
                        <a href='#about'><FontAwesomeIcon icon={faPhone}/></a>
                        {/* <a href='#about'>B</a> */}
                        {/* <a href='#about'>B</a> */}
                        {/* <a href='#about'>B</a> */}
                        {/* <a href='#about'><img src={email} width="32" /></a> */}
                        {/* <a href='#about'><img src={call} max-width="10%" width="32"  height="auto" alt='user1'/></a> */}
                        <a href='https://github.com/phRobotGit?tab=repositories'><FontAwesomeIcon icon={faGithub}/></a>
                        <a href='https://rinkeby.etherscan.io/address/0xDfE5Fc6401A215D13484253Ce621C16d09774D87#code'><FontAwesomeIcon icon={faEthereum}/></a>
                        <a href='https://www.instagram.com/accounts/login/?'><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href='https://www.google.co.uk/maps/place/University+College+London/@51.5245592,-0.1362341,17z/data=!3m1!4b1!4m5!3m4!1s0x48761b2f69173579:0xd008c67faecc133e!8m2!3d51.5245592!4d-0.1340401'><FontAwesomeIcon icon={faLocationDot}/></a>
                    </div>
                </div>

                <img src={picture} width="500"  height="500" alt='company' />
            </div>
        </div>
    )
}

{/* <div className='hero'>
<div className='content'>
    <p>Call us</p>
    <p>1-800-123-4567</p>
    <p>Because Money</p>
    <p>Doesn't come with instructions</p>
    <button href='/' className='button'>Free Consultation</button>
</div>
</div>
) */}

export default About
