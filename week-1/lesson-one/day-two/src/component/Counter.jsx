import React, {useState} from 'react'

const Counter = () => {
    // const [number, setNumber] = useState(0);
    const [newNumber, setNewNumber] = useState({id: 1, number: 0});



    function addNumber(){
      setNewNumber((prev) => ({...prev, number: prev.number + 1}))
    }

    return (
        <div className="">
            Counter
            <button onClick={() => addNumber()}>
                click me
            </button>
            {/* <p>  counter: {number}</p> */}
            <p>  new counter: {newNumber.number}</p>
        </div>
    )
}

export default Counter