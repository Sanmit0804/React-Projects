import { useEffect, useState } from "react"

const debounceFunction = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState("");

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [value, delay])

    return debounceValue;
}

export default debounceFunction;