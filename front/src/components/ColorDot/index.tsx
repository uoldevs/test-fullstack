import React from 'react';

function ColorDot({ status }: { status: string }) {
    let backgroundColor;

    switch (status) {
        case 'Ativo':
            backgroundColor = '#4AAD5B';
            break;
        case 'Desativado':
            backgroundColor = '#D2D2D2';
            break;
        case 'Aguardando ativação':
            backgroundColor = '#D4A710';
            break;
        case 'Inativo':
        default:
            backgroundColor = '#D73240';
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
