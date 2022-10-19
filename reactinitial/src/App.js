import React, { useEffect, useState } from 'react'
import { Laptop } from './components/Laptop'
import { LoadingMask } from './components/LoadingMask'

const App = () => {
    const [laptops, setLaptops] = useState()

    useEffect(() => {
        fetch('https://demoapi.com/api/laptop')
            .then((response) => response.json())
            .then((laptop) => setLaptops(laptop))
    }, [])

    return (
        <div>
            <div>Todo...</div>
            {!laptops ? <LoadingMask /> : laptops.map((laptop) => <Laptop laptop={laptop} />)}
        </div>
    )
}

export default App
