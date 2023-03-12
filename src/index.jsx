import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import "./index.css";

ReactDOMClient.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <GoogleOAuthProvider clientId='87035596645-8k1ologlqhafivp7s10jeng77g4obpms.apps.googleusercontent.com'>
            <App />
        </GoogleOAuthProvider>
    </BrowserRouter>
);