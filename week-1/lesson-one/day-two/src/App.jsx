import React from 'react';
import Counter from './component/Counter';
import ListItems from './component/list-items/ListItems'
import Accordion from './component/Accordion';
import Stopwatch from './component/Stopwatch';



const accordionData = [
    {
    title: "Section 1", 
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  },
    {title : "Section 2", content: "Lasdkl;fhasdl;kfjas;dokfja"},
    {title : "Section 3", content: "Manny is a man"},
    {title : "Section 4", content: "Calvin is a cow"}
]

function App() {
  return (
    
    <div className="flex flex-col align-center justify-center">
      <div>Testing</div>
      <ListItems />
      <Accordion item={accordionData} />
      <Stopwatch />
    </div>
    
  )
}

export default App;