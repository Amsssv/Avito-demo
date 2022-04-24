import React, {useContext} from 'react';

const Context = React.createContext();

const defaultReducers = () => {
};

export function createStore(reducers = defaultReducers, initialState = {}, enhancer = []) {
    let listeners = [];
    let state = initialState;

    const dispatch = (action) => {
        state = reducers(state, action);
        listeners.forEach((listener) => {
            listener();
        });
    }

    const dispatchUsingMiddleware = (action) => {
        const promises = enhancer.map(middleware => {
            return new Promise((resolve) => {
                const next = () => {
                    resolve()
                };
                middleware(store)(next)(action)
            })
        });

        if (enhancer.length === 0) {
            dispatch(action);
        } else {
            Promise.all(promises).then(data => dispatch(action));
        }
    }

    const store = {
        get state() {
            return {...state}
        },
        dispatch: dispatchUsingMiddleware,

        subscribe: (newListener) => {
            listeners.push(newListener);

            const unsubscribe = () => {
                listeners = listeners.filter((l) => l !== newListener);
            };

            return unsubscribe;
        }
    }

    return store
}

export const Provider = ({children, store = null}) => {
    if (store === null) {
        throw new Error("Store is undefined")
    }

    return (<Context.Provider value={store}>
        {children}
    </Context.Provider>)
}

export const useReduxState = () => {
    const context = useContext(Context);

    if (context === undefined) {
        return;
    }

    return context.state;
}

// export const useSelector = (callback) => {
//     const context = useContext(Context);
//
//     if (context === undefined) {
//         return;
//     }
//
//     return callback(context.state);
// }

export const useReduxDispatch = () => {
    const context = useContext(Context);

    if (context === undefined) {
        return;
    }

    return context.dispatch;
}