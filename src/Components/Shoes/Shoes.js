import React from 'react';
import { add } from '../calculate/calculate';

const Shoes = () => {
    const first = 100;
    const second = 300;
    const result = add(first, second)
    return (
        <div >
            <h3>This is Shoes Folder-1</h3>
            <p>Result: {result}</p>
        </div>
    );
};

export default Shoes;


// style={{ border: '2px solid red' }}