import { useState } from "react"

const list = ["chris","Manny", "Colby", "Alex", 'jonathan', 'Calvin']
function FilterList(){
    const [userInput, setUserInput] = useState("");
    
    const filteredList = list.filter((user) => )
    
    return (
        <div>
            <h1>Filter List </h1>

            <div>
            <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />

            </div>

            <div>
                <ul>

            {list.map((user) => <li>{user}</li> )}
                </ul>
                </div>

        </div>
    )
}

export default FilterList;