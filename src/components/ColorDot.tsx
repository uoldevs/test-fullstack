import React from 'react';

function ColorDot({ status }: { status: string }) {
    let backgroundColor;

    switch (status) {
        case 'activated':
            backgroundColor = 'green';
            break;
        case 'deactivated':
            backgroundColor = 'gray';
            break;
        case 'pending':
            backgroundColor = 'yellow';
            break;
        case 'inactive':
        default:
            backgroundColor = 'red';
            break;
    }

    const style = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: backgroundColor,
        display: 'inline-block',
    };

    return <span style={style}></span>;
}

export default ColorDot;
