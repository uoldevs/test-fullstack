import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) { 
    const [clients, setClients] = React.useState([]);
    const [editClient, setEditClient] = React.useState(null);
    
    const context = {
        clients,
        setClients,
        editClient,
        setEditClient,
    };

    return (
        <AppContext.Provider value={ context }>
            { children }
        </AppContext.Provider>
    );
} 

export default Provider;