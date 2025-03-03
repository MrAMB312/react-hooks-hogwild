import React, { useState } from "react";
import Nav from "./Nav";
import NewHogForm from "./NewHogForm";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
	const [allHogs, setAllHogs] = useState(hogs);
	const [showGreasedOnly, setShowGreasedOnly] = useState(false);
	const [sortBy, setSortBy] = useState("none");

	function handleAddHog(newHog) {
		setAllHogs((prevHogs) => [...prevHogs, newHog]);
	}

	const filteredHogs = showGreasedOnly ? allHogs.filter(hog => hog.greased) : allHogs;

	const sortedHogs = [...filteredHogs].sort((a, b) => {
		if (sortBy === "name") {
			return a.name.localeCompare(b.name);
		}
		if (sortBy === "weight") {
			return a.weight - b.weight;
		}
		return 0;
	});

	
	return (
		<div className="App">
			<Nav setShowGreasedOnly={setShowGreasedOnly} setSortBy={setSortBy} />
			<NewHogForm onAddHog={handleAddHog} />
			<HogList hogs={sortedHogs} />
		</div>
	);
}

export default App;
