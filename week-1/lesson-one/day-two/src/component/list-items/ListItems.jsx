import React from 'react';
//     comonent name     file name
import { GroceryCard, AnimalCard } from './grocery-card';

function ListItems() {
    const groceries = [
        {
            id: 1,
            name: 'apple',
            quantity: 3
        },
        {
            id: 2,
            name: 'banana',
            quantity: 2
        },
        {
            id: 3,
            name: 'orange',
            quantity: 1
        }
    ];
    const animal = [{
        id: 69,
        name: "Gorilla",
        size: "big AF"
    }]

    return (
        <div>
            <p>Groceries</p>
            <div>
                {groceries.map((food, index) => <GroceryCard key={index} food={food} />)}
            </div>
            <p>Who wrote this: </p>
            <div>
                {animal.map((text, index) => <AnimalCard key={index} text={text} />)}
            </div>
        </div>
    )
}

export default ListItems;