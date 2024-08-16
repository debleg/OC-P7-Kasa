import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
const errorTypeText = ["Oups! La page que", <br key="line-break"/>, " vous demandez n'existe pas."];
const redirectLinkText = "Retourner sur la page d'accueil"

    return (
        <div className="errorpage">
            <h1 className="errorpage__errortype">404</h1>
            <p className="errorpage__errormessage">{errorTypeText}</p>
            <Link to="/" className="errorpage__redirectlink">{redirectLinkText}</Link>
        </div>
    )
}
 
export default ErrorPage