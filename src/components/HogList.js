import React from "react";
import Hog from "./Hog";

function HogList({ hogs }) {
    return (
        <div>
            <h1 className="hog-list-title">Our current Hogs list:</h1>
            
            <div className="ui grid container">
                {hogs.map((hog) =>
                    <div key={hog.name} className="ui eight wide column">
                        <Hog
                            key={hog.name}
                            hogName={hog.name}
                            hogImage={hog.image}
                            hogSpecialty={hog.specialty}
                            hogWeight={hog.weight}
                            hogGreased={hog.greased}
                            hogMedal={hog["highest medal achieved"]}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default HogList;