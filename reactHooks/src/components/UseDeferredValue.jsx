// useDeferredValue hook

import React, { useDeferredValue, useState } from 'react';

export const UseDeferredValueHook = () => {
    const [query, setQuery] = useState("");
    const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

    const deferredQuery = useDeferredValue(query);

    const filterItems = items.filter((item) => {
        return item.toLowerCase().includes(deferredQuery.toLowerCase());
    });

    return (
        <div className="container m-5">
            <div className="card">
                <input type="text" placeholder='Search items..' value={query} onChange={(e) => setQuery(e.target.value)} />
                {query !== deferredQuery && <p>Loading..</p>}
                <ul>
                    {filterItems.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
} 