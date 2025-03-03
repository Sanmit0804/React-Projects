import React, { useEffect, useState } from "react";

// Sample data for autocomplete suggestions
const suggestionsData = [
    "apple", "banana", "blueberry", "cherry", "date", "grape", "kiwi", "lemon", "mango", "orange"
];

const AutocompleteSearch = () => {
    const [input, setInput] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const handleFilteration = () => {
            const filteredSuggestions = suggestionsData.filter((item) =>
                item.toLowerCase().includes(input.toLowerCase())
            );
            setFilteredData(filteredSuggestions);
        }

        handleFilteration();
    }, [input])

    return (
        <div className="container mt-5">
            <div className="card">
                <h5 className="card-header">Auto Search Complete</h5>
                <div className="card-body">
                    <input type="text" className="form-control mb-3" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search here..." />

                    {input &&
                        <ul>
                            {filteredData && filteredData.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })}
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}

export default AutocompleteSearch;