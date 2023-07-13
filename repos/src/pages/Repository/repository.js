import React from "react";
import { useParams } from "react-router-dom";

export default function Repository() {
    const name = useParams();
    return(
        <h1 style={{ color: "#fff" }}>
            {decodeURIComponent(name.repository)}
        </h1>
    );
}