import React from 'react';
import { RiBarChartHorizontalFill, RiNotification4Fill } from 'react-icons/ri';
import { AiFillMessage } from 'react-icons/ai';
import '../App.css';
import { ImSearch } from 'react-icons/im';
import avt from '../img/avt.jpg';

const Header = () => {
    return (
        <div className="header__container">
            <div className="header__left">
                <RiBarChartHorizontalFill style={{ fontSize: '24px' }} />
                <h2>Databoard</h2>
            </div>
            <div className="header__center">
                <input type="text" placeholder="Search something here..." />
                <ImSearch style={{ fontSize: '22px', marginRight: '12px' }} />
            </div>

            <div className="header__right">
                <div className="icon__action">
                    <AiFillMessage style={{ fontSize: '24px' }} />
                    <RiNotification4Fill style={{ fontSize: '24px' }} />
                </div>
                <img src={avt} alt="" />
                <div>
                    <h4>Jun Jong</h4>
                    <p>Administrators</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
