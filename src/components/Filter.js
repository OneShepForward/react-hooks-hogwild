import React from "react";



function Filter( { hogs, onFilter }) {

// function filterFunction(e) {
//     console.log(e.target.value)
//     onFilter(e.target.value)
// }

	return (
      <div className="Filter">
        {/* <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} value={search} /> */}
        <select name="filter" onChange={(e) => onFilter(e)}>
          <option value="All">Filter by Greasiness</option>
          <option value={true}>Very Greasy</option>
          <option value={false}>Little To No Grease</option>
        </select>
      </div>
	);
}

export default Filter;