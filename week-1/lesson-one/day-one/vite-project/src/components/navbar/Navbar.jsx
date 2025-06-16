import React, { useState } from 'react'
import './styles.css';

function Navbar() {

  const initialState = [
    {
      name:"Store",
      link:"/Store"
    },
    {
      name:"Mac",
      link:"/Mac"
    },
    {
      name:"Iphone",
      link:"/Iphone"
    },
    {
      name:"Watch",
      link:"/Watch"
    }
  ]

  const [links, setLinks] = useState(initialState);
  return (
    <div>
      test
    </div>
  )
}

export default Navbar;