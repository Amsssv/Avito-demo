import {useCallback, useState} from 'react';

export default function useToggle() {
    const [state, setState] = useState(false);
    const toggle = useCallback( () => {
        setState(!state)
    });
    return [state, toggle];
}