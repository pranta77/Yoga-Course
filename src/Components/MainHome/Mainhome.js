import React from 'react';
import { Button } from 'react-bootstrap';
import './Mainhome.css'
import { useNavigate } from 'react-router-dom';

const Mainhome = () => {
    const history = useNavigate()
    const handelButton =() =>{
        history('/courses')
    }
    return (
        <div className=''>
            <h2 className='title'>Our Courses</h2>
            <div className='course-name'>
                <div className='course-details'>
                    <img src="./img/nature.jpg" alt="" />
                    <h4>Nature Yoga</h4>
                    <p>Nature Yoga provides an opportunity to look at both the “trees” (individual selves) and the “forest” (greater environment) at the same time. Artificially Shaped Bodies</p>
                    <Button onClick={handelButton} variant="danger">View More Course</Button>
                </div>
                <div className='course-details'>
                    <img src="./img/relexing.jpg" alt="" />
                    <h4>Body Relaxation</h4>
                    <p>Practicing yoga helps in reducing stress and relaxing your body and mind. It also lets you focus on your breathing to help you balance.It will help your many things</p>
                    <Button onClick={handelButton} variant="danger">View More Course</Button>
                </div>
                <div className='course-details'>
                    <img src="./img/meditation.jpg" alt="" />
                    <h4>Meditation</h4>
                    <p>Meditation is the process of redirecting your thoughts to calm your mind. It may also improve your overall quality of life</p>
                    <Button onClick={handelButton} variant="danger">View More Course</Button>
                </div>
                <div className='course-details'>
                    <img src="./img/asanas.jpg" alt="" />
                    <h4>Asana Yoga</h4>
                    <p>An asana is a body posture, originally and still a general term for a sitting meditation pose, and later extended in hatha yoga and modern yoga as exercise.</p>
                    <Button onClick={handelButton} variant="danger">View More Course</Button>
                </div>
            </div>
        </div>
    );
};

export default Mainhome;