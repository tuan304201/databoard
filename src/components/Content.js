import React from 'react';
import '../App.css';
import Header from './Header';
import Data from './DataTable';
const Content = () => {
    return (
        <div className="content__container">
            <Header />
            <Data />
        </div>
    );
};

export default Content;
