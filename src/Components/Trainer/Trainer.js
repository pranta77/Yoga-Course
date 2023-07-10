import React from 'react';
import './Trainer.css'

const Trainer = () => {
    return (
        <div>
            <div className='img-trainer'>
                <img src="/img/trainer.jpg" alt="" />
            </div>
            <div>
                <h1 className='mt-5 mb-5'>Our Expart Trainers</h1>
            </div>
            <div className='trainer-container'>
                <div className='trainer-detail'>
                    <img src="/img/trainer 1.jpg" alt="" />
                    <h4>Trainer Name: Odo Gilhespy</h4>
                    <p>Expart: Ashtanga Yoga</p>
                </div>
                <div className='trainer-detail'>
                    <img src="/img/trainer 2.jpg" alt="" />
                    <h4>Trainer Name: Erinna Pantin</h4>
                    <p>Expart: Hatha Yoga</p>
                </div>
                <div className='trainer-detail'>
                    <img src="/img/trainer 3.jpg" alt="" />
                    <h4>Trainer Name: Nick Antoniewicz</h4>
                    <p>Expart: Prenatal Yoga</p>
                </div>
                <div className='trainer-detail'>
                    <img src="/img/trainer 4.jpg" alt="" />
                    <h4>Trainer Name: Lola Ferre</h4>
                    <p>Expart: Jivamukti Yoga</p>
                </div>
                <div className='trainer-detail'>
                    <img src="/img/trainer 5.jpg" alt="" />
                    <h4>Trainer Name: Ingemar Biddwell</h4>
                    <p>Expart: Kundalini Yoga</p>
                </div>
                <div className='trainer-detail'>
                    <img src="/img/trainer 6.jpg" alt="" />
                    <h4>Trainer Name: Arvy Jerwood</h4>
                    <p>Expart: Bikram Yoga</p>
                </div>
            </div>
        </div>
    );
};

export default Trainer;