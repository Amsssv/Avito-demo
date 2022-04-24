import React, {Component, useContext, useState} from 'react';

const Context = React.createContext();

const defaultReducers = () => {
};


export const createStore = (reducers = defaultReducers, initialState = null, enhancer = []) => {
    let state = initialState !== null ? initialState : reducers(undefined, {});

    const store = {
        get state() {
            return state;
        },

        dispatch(action) {
            if (enhancer.length === 0) {
                state = reducers(state, action)
            } else {
                const promises = enhancer.map(middleware => new Promise(resolve => middleware(store)((nextAction) => resolve())(action)));

                Promise.all(promises).then(data => {
                    state = reducers(state, action)
                });
            }
        }
    }

    return store
}

export const connect = (mapStateToProps, mapDispatchToProps) => Component => props => {
    const store = useContext(Context);
    const connectedProps = {
        ...props, ...mapStateToProps(store.state), ...mapDispatchToProps(store.dispatch)
    }
    return <Component {...connectedProps}/>
}

export const useDispatch = () => {
    const store = useContext(Context);

    if (store === undefined) {
        return;
    }

    return store.dispatch;
}

export const useSelector = (selectorFn) => {
    const store = useContext(Context);

    if (store === undefined) {
        return;
    }

    if (selectorFn !== undefined) {
        return selectorFn(store.state);
    }

    return store.state;
}

export const Provider = ({children, store = null}) => {
    if (store === null) {
        throw new Error("Store is undefined");
    }

    //handle subscribers into via updating state
    const [virtualStore, setNewVirtualStore] = useState(store);

    const dispatch = (...args) => {
        store.dispatch(...args);
        //as dispatch is async function need to wait store update
        setTimeout(() => {
            setNewVirtualStore(newStore);
        }, 0);
    }

    const newStore = {
        get state() {
            return virtualStore.state
        },
        dispatch
    }

    return (
        <Context.Provider value={newStore}>
            {children}
        </Context.Provider>
    )
}
