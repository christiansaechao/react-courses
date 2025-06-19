import { useState, useEffect } from 'react';

export const useInputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    
    function handleSetValue(e) {
        setValue(e.target.value);
    };

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    return [value, handleSetValue];
};