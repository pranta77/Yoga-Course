import React from 'react';
import './Courses.css'

const Courses = () => {
    return (
        <div>
            <div className='course-img'>
                <img src="./img/courses.jpg" alt="" />
            </div>
            <div className='mt-5 mb-5'>
                <h2>Our Courses</h2>
            </div>
            <div className='all-courses'>
                <div className='courses-detail'>
                    <img src="/img/download 1.jpg" alt="" />
                    <h4>Ashtanga Yoga</h4>
                </div>
                <div className='courses-detail'>
                    <img src="/img/download (2).jpg" alt="" />
                    <h4>Bikram Yoga</h4>
                </div>
                <div className='courses-detail'>
                    <img src="/img/download (3).jpg" alt="" />
                    <h4>Hatha Yoga</h4>
                </div>
                <div className='courses-detail'>
                    <img src="/img/download (4).jpg" alt="" />
                    <h4>Iyengar Yoga</h4>
                </div>
                <div className='courses-detail'>
                    <img src="/img/download (7).jpg" alt="" />
                    <h4>Jivamukti Yoga</h4>
                </div>
                <div className='courses-detail'>
                    <img src="/img/download (5).jpg" alt="" />
                    <h4>Kundalini Yoga</h4>
                </div>

            </div>
        </div>
    );
};

export default Courses;