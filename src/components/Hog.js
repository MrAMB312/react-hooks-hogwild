import React, { useState } from "react";

function Hog({ hogName, hogImage, hogSpecialty, hogWeight, hogGreased, hogMedal }) {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    function handleDisplayClick() {
        setIsDetailsVisible(!isDetailsVisible);
    }

    return (
        <div className="pigTile" onClick={handleDisplayClick} style={{ cursor: "pointer" }}>
            <h3>{hogName}</h3>
            <img
                src={hogImage}
                alt={hogName}
                style={{ maxWidth: "100%", height: "auto", borderRadius: "10px"}} />

            {isDetailsVisible && (
                <div className="hogDetails">
                    <p><strong>Specialty:</strong> {hogSpecialty}</p>
                    <p><strong>Weight:</strong> {hogWeight}</p>
                    <p><strong>Greased:</strong> {hogGreased ? "Yes" : "No"}</p>
                    <p><strong>Highest Medal Achieved:</strong> {hogMedal}</p>
                </div>
            )}
        </div>
    )
}

export default Hog;