import React, { useState } from "react";
import SongsAccordion from "./SongsAccordion";

const AccordionItem = (props) => (
    <div className="accordion-item">
        <div className="accordion-title"> {props.title} </div>
        <div className="accordion-content"> {props.content} </div>
    </div>
)


const Accordion = ({item}) => {
  const [isActive, setIsActive] = useState(false); 
const contentRef = React.useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  // your accordion sucks
  React.useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isActive ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isActive]);

  return (
    <>
   <div className="w-full border rounded-md">
      <button
        onClick={() => setIsActive(!isActive)}
        className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 transition-colors font-semibold"
      >
        Manny & Calvin's React Accordion Demo
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out px-4"
        style={{ maxHeight }}
      >
        {item.map((data, i) => (
          <div key={i} className="py-2 border-b last:border-none">
            <h4 className="font-medium">{data.title}</h4>
            <p className="">{data.content}</p>
          </div>
        ))}
      </div>
    </div>
        
        <SongsAccordion />

        {/* {isActive && <div className="accordion-content">  {accordionData.map((data) => <div> {data.title} {data.content} </div>  )}   </div>} */}
    </>
  )
}

export default Accordion; 