import React from 'react'
import './show.css'
import poster from '../../../Avtars/poster.jpeg'
const BookShows = () => {
    return (
        <div className='banner bookShow'>
            <div className="heading_box">
                <div className='post_heading'>
                    OUR UPCOMING SHOW
                </div>

                <div className="show_book">
                    <div className="show_book_left">
                        <img src={poster} alt="" className='show_poster' />
                    </div>
                    <div className="show_book_right m_10">
                        <p className='most_post_heading'>POCKETMAAR RANG MANDAL</p>
                        <p className='most_post_heading'>17th september , Saturday </p>
                        <hr />
                        <div className="spacer"></div>
                        <ul>
                            <li>This is our upcoming show  </li>
                            <li>Date: 17th september , Saturday </li>
                            <li>location: LTG Auditorium </li>
                            <li>Director: YOGESH JALUTHRIA </li>
                        </ul>
                        <div className="spacer"></div>
                        <p>Booking Available! </p>
                        <p className='btn '><a href="https://in.bookmyshow.com/plays/pocketmaar-rang-mandal/ET00337906">Book Now !</a></p>
                        <div className="spacer"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookShows