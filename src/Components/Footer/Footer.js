import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div>
                    <h2>Moon Yoga</h2>
                    <p>Happiness is a decision, <br />
                     not a destination. Realize it with us!</p>
                </div>
                <div>
                <h2>Contact Info</h2>
                    <div>
                    <i class="fas fa-location-arrow"></i> <span>232/G.E.C, Chttagong, Bangladesh</span> <br />
                    <i class="fas fa-phone-square-alt"></i> <span>+880181292822</span> <br />
                    <i class="fas fa-envelope"></i> <span>Email: moonyoga@webamil.com</span>
                    </div>

                </div>
                <div>
                    <h2>Follow us</h2>
                    <div></div>

                </div>
            </div>
            <i>@*All Rights Reserved by Moon Yoga*@</i>
        </div>
    );
};

export default Footer;