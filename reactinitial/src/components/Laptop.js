import React, { useState } from 'react'

export const Laptop = ({ laptop }) => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <div>{laptop.name}</div>
            {show && (
                <div>
                    {laptop.brand}, {laptop.weight}kg
                </div>
            )}
            <button onClick={() => setShow(!show)}>{show ? 'Show less' : 'Show more'}</button>
        </div>
    )
}
