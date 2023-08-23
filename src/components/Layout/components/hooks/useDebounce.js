import { useState, useEffect } from 'react';

function useDebounced(value, delay) {
    const [deBouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
    }, [value]);

    return deBouncedValue;
}

export default useDebounced;
