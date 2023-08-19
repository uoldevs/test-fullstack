import React from 'react';
import './loading.css';

const Loading = () => {
    return (
        <div className="spinner-container">
            <div className="spinner">
                <div className="spinner-inner" />
            </div>
        </div>
    );
};

export default Loading;
