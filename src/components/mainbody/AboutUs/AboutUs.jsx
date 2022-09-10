import React from 'react'
import './about.css'
// import group from '../../../Avtars/GroupImg.jpeg'
// import poster from '../../../Avtars/poster.jpeg'
import director from '../../../Avtars/Director.jpeg'
const AboutUs = () => {
    return (
        <>
            <div className='banner'>
                <div className="heading_box about">
                    <p className='post_heading'> ABOUT US</p>

                    <hr />
                    <p className='post_heading m_5'> Karma Theater Group</p>
                    <div className="show_book">
                        <div className="show_book_left">
                            <img src={director} alt="" className='show_poster2' />
                        </div>
                        <div className="show_book_right m_10">
                            <p className='post_heading'> DIRECTOR</p>
                            <p className='most_post_heading'> YOGESH JALUTHRIA</p>
                            <hr />
                            <div className="spacer"></div>

                            <p className='desc'>    We are a performance art theatre group where we organize theatre plays, short movies, street plays and all art and cultural events.</p>
                            <div className="spacer"></div>
                            <p className='sign'> : yogesh jaluthria</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutUs