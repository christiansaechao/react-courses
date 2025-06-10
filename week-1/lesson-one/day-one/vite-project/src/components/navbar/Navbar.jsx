import React from 'react'
import './styles.css';
// import appleLogo from "/apple.png";

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
        <nav className="navbar">
            <img className="logo" src="https://www.citypng.com/public/uploads/preview/apple-brand-logo-70175169479329782ejsbt0dc.png" alt='appleLogo'></img>
            <ul>
              {links.map((item,index)=>(<li key={index}>{item}</li>))}
            </ul>
            {links.map(() => <div><MyComponent /></div>)}
        </nav>
    </div>
  )
}

export default Navbar;