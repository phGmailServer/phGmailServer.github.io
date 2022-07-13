import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>FAQs</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Gallery</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>(email address)   ||   (contact-phone-number)</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
