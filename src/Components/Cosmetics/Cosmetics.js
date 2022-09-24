import React, { useEffect, useState } from 'react';
import Cosmetic from '../../Cosmetic/Cosmetic';
import { totalPrice } from '../calculate/calculate';
// import { add, multiply } from '../calculate/calculate';
const Cosmetics = () => {
    const [cosmetics, setcosmetics] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setcosmetics(data))
    }, [])
    const total = totalPrice(cosmetics)
    return (
        <div>
            <h1>Welcome to Cosmetics Store!!</h1>
            <h3>Total Price: {total}</h3>
            {cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)}
        </div>
    );
};

export default Cosmetics;