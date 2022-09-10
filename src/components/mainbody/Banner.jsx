import React from 'react'
import './banner.css'
import Group from '../../Avtars/GroupImg.jpeg'
const Banner = () => {
    return (
        <div className='banner ' >
            <div className=" heading_box">
                <p className='heading '>KARMA THEATER GROUP</p>

                <div className="spacer_half"></div>
                <p className='head_desc'>
                    <span> Performing Arts Theatre in Delhi </span>
                    <span>Open today until 20:00</span>
                </p>
                <div className="spacer_half"></div>
                <p className='btn m_10'><span><a href="tel:+7827965692">CALL NOW!</a></span></p>
            </div>
            <div className="banner_left">
                <img src={Group} alt="Group Collection" className='banner_poster' />
            </div>
        </div>
    )
}

export default Banner