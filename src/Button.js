import React  from "react";
import  './Button.css'

const Button = ({item, onClick, onKeyDown}) => {

    return(
        <button
               id={item.id}
               className="btn"
                onClick={() => onClick(item.sound, item.id)}
                onKeyDown={(e) => onKeyDown(item.id, item.sound, item.description)}
        >
            {item.description}
        </button>
    );
}


export default Button;