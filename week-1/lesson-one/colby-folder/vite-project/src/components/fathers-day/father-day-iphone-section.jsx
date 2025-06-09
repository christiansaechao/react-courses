import React from "react";

const Iphone = ({ title, subtitle, buttonOneText, buttonTwoText, description, imgSrc }) => {
    return (
      <>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <button>Learn more</button>
        <button>Shop iPhone</button>
        <p>Built for Apple Intelligence.</p>
        <img src="https://www.apple.com/v/iphone/compare/ai/images/meta/compare__0kr7oqqwknma_og.png?202506031237"  alt=" Iphone imge goes here." /> 
      </>
    )
}


export default Iphone 