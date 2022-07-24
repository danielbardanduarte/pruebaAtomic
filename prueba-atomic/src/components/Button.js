import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Button.css"

const Main = () => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate(`/login`);

    }
    return(
        <button
         type="button"
         className="boton"
         onClick={handleRedirect} >¡Quiero ser parte!</button>
    
    )
}


export default Main;