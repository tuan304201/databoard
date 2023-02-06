import React from 'react';
import { AiFillHome, AiFillMessage, AiFillPieChart } from 'react-icons/ai';
import { HiPuzzlePiece, HiNewspaper } from 'react-icons/hi2';
import { FaSearch } from 'react-icons/fa';
import '../App.css';

const Sidebar = () => {
    return (
        <div className="sidebar__container">
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <ul className="list__menu">
                <li className="list__item active__item">
                    <AiFillHome className="active__item" />
                    Databoard
                </li>
                <li className="list__item">
                    <FaSearch />
                    Search user
                </li>
                <li className="list__item">
                    <HiPuzzlePiece />
                    Applications
                </li>
                <li className="list__item">
                    <AiFillMessage />
                    Message
                </li>
                <li className="list__item">
                    <AiFillPieChart />
                    Statistics
                </li>
                <li className="list__item">
                    <HiNewspaper />
                    News
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
