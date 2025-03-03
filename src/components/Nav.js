import React from "react";
import piggy from "../assets/porco.png";

function Nav({ setShowGreasedOnly, setSortBy }) {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>

			<div className="filterWrapper">
                <input
                    type="checkbox"
                    onChange={(event) => setShowGreasedOnly(event.target.checked)}
                />
                Show Greased Only
            </div>

            <div className="navWrapper">
                Sort by 
                <select onChange={(event) => setSortBy(event.target.value)}>
                    <option value="none">select:</option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </div>
		</div>
	);
};

export default Nav;
