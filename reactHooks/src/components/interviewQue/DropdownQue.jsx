import React, { useState } from 'react'

const countries = [
    {
        name: 'India',
        value: 'IN',
        cities: [
            'Delhi',
            'Mumbai',
        ]
    },
    {
        name: 'Pakistan',
        value: 'PK',
        cities: [
            'Lahore',
            'Karachi',
        ]
    },
    {
        name: 'Bangladesh',
        value: 'BG',
        cities: [
            'Dhaka',
            'Chittagong',
        ]
    },
]

const DropdownQue = () => {
    const [selectedCountryIndex, setSelectedCountryIndex ] = useState(0);

    const handleSelect = (e) => {
        setSelectedCountryIndex(e.target.value);
    };

    return (
        <>
            <div className="container mx-auto mt-5">
                <div className="card">
                    <div className="card-header">Dropdown Task</div>
                    <div className="card-body d-flex gap-3">
                        <select onChange={handleSelect}>
                            {countries.map((country, index) => (
                                <option key={index} value={index}>{country.name}</option>
                            ))}
                        </select>
                        <select>
                            {countries[selectedCountryIndex]?.cities.map((city, index) => {
                                return(
                                    <option key={index}>{city}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DropdownQue