import axios from "axios"
import React, { useState } from 'react';

export const useBooleanIntent = (value) => {
    const [bool, setBool] = useState(value);

    function invertBoolean() {
        setBool(prev => !prev);
    }
    
    return [bool, invertBoolean]
}

