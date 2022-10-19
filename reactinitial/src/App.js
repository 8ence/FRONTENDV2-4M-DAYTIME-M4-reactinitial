import React, { useEffect, useState } from 'react'
import { Laptop } from './components/Laptop'
import { LoadingMask } from './components/LoadingMask'

const App = () => {
    const [laptops, setLaptops] = useState()
    const [input, setInput] = useState('')
    const [sorted, setSorted] = useState()

    useEffect(() => {
        fetch('https://demoapi.com/api/laptop')
            .then((response) => response.json())
            .then((laptop) => setLaptops(laptop))
    }, [input])

    function SortLaptops() {
        setSorted(laptops.sort((a, b) => a.weight - b.weight))
    }

    function FilterLaptops(evt) {
        setInput(evt.target.value)
    }

    return (
        <div className="page-container">
            <header>
                <div>
                    <button onClick={SortLaptops}>Sort</button>
                    <input type="text" value={input} onChange={FilterLaptops} />
                </div>
            </header>
            {!laptops ? (
                <LoadingMask />
            ) : (
                laptops.map((laptop, index) => <Laptop laptop={laptop} key={index} />)
            )}
        </div>
    )
}

export default App
