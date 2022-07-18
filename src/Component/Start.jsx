import React, { useState } from "react";

export const Star = function (props) {
    const [active, setActive] = useState(props.active);
    if (active === true) {
        return <span style={{ color: 'red' }} className="bi bi-star-fill" onClick={()=>setActive(!active)}></span>
    }
    else
        return <span style={{ color: 'grey' }} className="bi bi-star-fill" onClick={()=>setActive(!active)}></span>
}