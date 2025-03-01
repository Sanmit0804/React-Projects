// useTransition hook

import React, { startTransition, useState } from 'react';

const UseTransitionHook = () => {
    const [query, setQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    const [isPending, setIsPending] = useState(false);

    const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

    const handleFilter = (e) => {
        const value = e.target.value;
        setQuery(value);

        startTransition(() => {
            const filtered = items.filter(item => item.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
            setFilteredItems(filtered);
        })
    }

    return (
        <div className="container m-5 mx-auto">
            <div className="card">
                <h4 className="card-header">useTransition hook</h4>
                <div className="card-body">
                    <input type="text" placeholder='Search items..' onChange={handleFilter} value={query} />
                    {isPending && <p> Loading... </p>}
                    <ul>
                        {filteredItems.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UseTransitionHook;