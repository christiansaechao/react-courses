import { useState, useEffect } from 'react';

export const useInputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    return [value, setValue];
};