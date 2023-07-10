import React from 'react';

const About = () => {
    return (
        <div>
            <div>
                <img src="/img/aboutus.jpg" alt="" />
            </div>
            <div className='mt-5 mb-5'>
                <h1>ABOUT US</h1>
            </div>
            <div className='bg-light mb-5 border border-1 p-5 container-md'>
                <h3>Happiness is a decision, not a destination. Realize it with us!</h3>
                <p>Yoga studios are a place of learning with a skilled teacher. This includes techniques and adjustments related to proper physical alignment and an opportunity to be inspired by the philosophical teachings of yoga, along with gaining insight from the life experience of your teachers.</p>
            </div>
        </div>
    );
};

export default About;