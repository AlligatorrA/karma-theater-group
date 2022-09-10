import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div className='about' >
            <div className='banner foot'>
                <div className=" all_center flex_col ">
                    <div className="spacer"></div>
                    <p className='most_post_heading'>  CONTACT </p>
                    <div className='all_center m_5 cur btn'>
                        <i className="fa-solid fa-phone cur"></i>
                        <h4> <a href="tel:+7827965692">CALL NOW!</a></h4>
                    </div>
                    <div className="spacer"></div>
                    <p className='head_desc'>078279 65692</p>
                    <p className='head_desc'>98114  82751</p>
                </div>
                <div className="  all_center flex_col ">
                    <div className="spacer"></div>
                    <p className='most_post_heading'>  ADDRESS </p>
                    <div className='all_center m_5 cur btn'>
                        <i className="fa-solid fa-phone cur"></i>
                        <h4> <a href="https://goo.gl/maps/pMzvw8vz63N5F9PV8">GET LOCATION</a></h4>
                    </div>
                    <div className="spacer"></div>
                    <p className='head_desc'>U-203A, Ground Floor, Jindal House
                        Upadhyay Block
                        Veer Savarkar Block, Shakarpur
                        New Delhi, Delhi 110092
                        India</p>
                </div>
                <div className="  all_center flex_col ">  <div className="spacer"></div>
                    <p className='most_post_heading'>  OPENING HOURS </p>
                    <div className='all_center m_5 cur btn'>
                        <i className="fa-solid fa-phone cur"></i>
                        <h4> <a href="tel:+7827965692">CALL NOW!</a></h4>
                    </div>
                    <div className="spacer"></div>
                    <div className='head_desc'>
                        <p>Mon:	11:00 am – 8:00 pm</p>
                        <p>Tue:	 11:00 am – 8:00 pm</p>
                        <p>Wed:	11:00 am – 8:00 pm</p>
                        <p>Thu:	 11:00 am – 8:00 pm</p>
                        <p>Fri:	  11:00 am – 8:00 pm</p>
                        <p>Sat:	 11:00 am – 8:00 pm</p>
                        <p>Sun:	11:00 am – 8:00 pm</p>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer