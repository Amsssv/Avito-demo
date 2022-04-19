import React, {useReducer, useContext} from 'react';
import reducers, {initialState} from './reducers';

const Context = React.createContext();

export const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducers, initialState);
    return (<Context.Provider value={{state, dispatch}}>
        {children}
    </Context.Provider>)
}

export const useRedux = () => {
    const context = useContext(Context);

    if (context === undefined) {
        return;
    }

    return context;
}

