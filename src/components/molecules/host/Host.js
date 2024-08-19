import React from "react";

const Host = ({name, picture}) => {

    return (
        <div className="host">
            <p className="host__name">{name}</p>
            <img className="host__picture" src={picture} alt={name}/>
        </div>
    )
}

export default Host