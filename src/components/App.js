import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import PigList from "./PigList";

import hogs from "../porkers_data";

function App() {

const [displayedHogs, displayedHogsSetter] = useState(hogs);

// function filterHogs (filterChoice) {
// 	// console.log(hogs);
// 	const newHogArray = hogs.filter(nugget => {
// 		console.log(nugget)
// 		if (nugget.greased === filterChoice) {
// 			return nugget;
// 		} else {
// 			return false;
// 		}
// 	})
// 	displayedHogsSetter(newHogArray);
// 	// console.log(newHogArray);
// }

const [selectedGreasiness, setGreasiness] = useState("All");

console.log(hogs);

function filterHogs (e) {
  setGreasiness(e.target.value);
}

 const hogsToDisplay = hogs.filter((nugget) => {
	if (selectedGreasiness === "All") {
      return nugget;
    } else { 
	  return nugget.greased === selectedGreasiness; 
	} 
  });

	// console.log(hogs);
	return (
		<div className="App">
			<Nav />
			{/* <Filter hogs={hogs} onFilter={filterHogs} /> */}
			<br />
			<PigList hogs={hogsToDisplay}   />
		</div>
	);
}

export default App;


