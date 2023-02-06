import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import Content from './components/Content';

const App = () => {
    return (
        <div className="app__container">
            <Sidebar />
            <Content />
        </div>
    );
};

export default App;
