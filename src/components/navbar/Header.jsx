import React from 'react'
import { useDust } from '../useContext/dust-context'
import './header.css'

const Header = () => {
    const { OptionFunction } = useDust()
    return (
        <div className="header dis_flex just_btw align_center">
            <div className='all_center'>
                <i className="fa-solid fa-bars cur arial" onClick={OptionFunction}></i>
                <h2>Karma Theater Group</h2>
            </div>
            <div className="dis_flex options">
                <div className='all_center m_5 cur'>
                    <i className="fa-solid fa-phone cur"></i>
                    <h4> <a href="tel:+7827965692">CALL NOW!</a></h4>
                </div>
                <div className='all_center m_5 cur'>
                    <a className='all_center ' href="https://goo.gl/maps/pMzvw8vz63N5F9PV8">
                        <i className="fa-solid fa-diamond-turn-right cur"></i>
                        <h4>Get Direction </h4></a>
                </div>
            </div>
        </div>
    )
}

export default Header