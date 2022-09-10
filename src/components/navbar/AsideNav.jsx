import React from 'react'
import { useDust } from '../useContext/dust-context'
import './aside.css'
const AsideNav = () => {
    const { option } = useDust()
    return (
        <div style={{ display: option === true ? 'block' : 'none' }}>
            <div className="aside">
                <div className='all_center m_5 cur'>
                    <i className="fa-solid fa-phone cur"></i>
                    <h4> <a href="tel:+7827965692">CALL NOW!</a></h4>
                </div>
                <div className='all_center m_5 cur'>
                    <a href="https://goo.gl/maps/pMzvw8vz63N5F9PV8">
                        <i className="fa-solid fa-diamond-turn-right cur"></i>
                        <h4>Get Direction</h4>
                    </a>
                </div>
            </div>
        </div >
    )
}

export default AsideNav