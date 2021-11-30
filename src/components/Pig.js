import React, { useState } from "react";

function Pig( {hogs} ) {
	// console.log("in Pig func:" + hogs)

// function pigClick(e) {
//     console.log(e.target);
//     handleClick(e)
// }
const [tileClicked, tileClickSet] = useState(false);
const [isHidden, hiddenSet] = useState("block");

//    console.log(hogs)

function handleClick (e) {
	// console.log(e.target);
	tileClickSet(!tileClicked)
}

const topDiv = "e.target.parentNode.parentNode";

function hidePig (e) {
    e.target.parentNode.parentNode.style.display = "none";
    pigTileClassNames = "none"
}

const hidePigVariable = "block"
let pigTileClassNames = `pigTile ${hidePigVariable}`;


    function checkPigClicked() {
        if( tileClicked ) { return (
        <>
        <div>Specialty:  {hogs.specialty}</div>
        <div>Weight:  {hogs.weight}</div>
        <div>Greased:  {hogs.greased ? "All greased up!" : "None for me, thanks!"}</div>
        <div>Highest medal achieved:  {hogs["highest medal achieved"]}</div>
        </>
    )} else {}
        }

    return (
		<div className={pigTileClassNames} onClick={handleClick}>
            <div className="ui eigth wide column">
                Name: {hogs.name} 
                <br/>
                {checkPigClicked()}
                <img src={hogs.image} alt="" />
                <button onClick={hidePig}>Hide me</button>
            </div>
		</div>
	);
}

export default Pig;