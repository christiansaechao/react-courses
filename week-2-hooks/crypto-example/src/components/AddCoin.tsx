import React, { useState } from 'react'
import { useCrypto } from '@/provider/crypto-proivder'

function AddCoin() {
  //id or name 
  const [id, setId] = useState("")
  const {addCoinById} = useCrypto()
  function something(id: string) {
    console.log(typeof id)
    setId(id)
  }

  return (
    <div>
        <h1>Gime the coin id</h1>
        <input
            type="text"
            placeholder="Coin id"
            value={id}
            onChange={(e) => something(e.target.value)
            }
        />
        <button onClick={() => addCoinById(id)}></button>
    </div>
  )
}

export default AddCoin