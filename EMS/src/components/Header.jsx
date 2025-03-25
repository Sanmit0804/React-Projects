import React from 'react'

const Header = () => {
    return (
        <>
            <div className="header p-5 d-flex flex-row justify-content-between align-items-start">
                <h5 className='fs-6'><span className="text-muted">Helloo</span> <br /> <span className='fs-2'>Sanmit 👋🏻</span> </h5>
                <button className='btn btn-outline-secondary'>Log out</button>
            </div>
        </>
    )
}

export default Header