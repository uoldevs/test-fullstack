import React from 'react';

function ColorDot({ status }: { status: string }) {
    let backgroundColor;

    switch (status) {
        case 'Ativo':
            backgroundColor = 'green';
            break;
        case 'Desativado':
            backgroundColor = 'gray';
            break;
        case 'Aguardando ativação':
            backgroundColor = 'yellow';
            break;
        case 'Inativo':
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
