import React, { useState } from 'react'
import './Laptop.css'

export const Laptop = ({ laptop, key }) => {
    const [show, setShow] = useState(false)

    return (
        <div className="card-container">
            <div className="name">{laptop.name}</div>
            {show && (
                <div className="description">
                    {laptop.brand}, {laptop.weight}kg
                </div>
            )}
            <button onClick={() => setShow(!show)}>{show ? 'Show less' : 'Show more'}</button>
        </div>
    )
}
