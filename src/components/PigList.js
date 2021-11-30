import React, { useState } from "react";
import Pig from "./Pig";

function PigList( { hogs } ) {
const [greased, setGreased] = useState(false);
const [sort, setSort] = useState(false);

function handleClick() {
    setGreased(!greased);
}

const handleChange = (event) => {
    setSort(event.target.value)
}


const filterAndSortHogs = () => {
    
    // create array "filtered" prior to sorting
    const filtered = hogs.filter(hog => {
         if(greased){
             return hog.greased
         } else { 
             return true
         }
     })

    // if no sort selected, return filtered unchanged
     if(sort === "All"){
         return filtered
    // if sort set to "Name" or "Weight", sort accordingly
     } else if (sort === "Name"){
         return filtered.sort((a,b) => {
             if(a.name > b.name){
                 return 1
             } else {
                 return -1
             }
         })
     } else {
         return filtered.sort((a,b) => {
             if(a.weight < b.weight){
                 return 1
             } else {
                 return -1
             }
         })
     }


 }

    function renderHogs() {
        return filterAndSortHogs().map(porker => {
            return <Pig hogs={porker} key={porker.name} />
            })
        
    }

	return (
		<div className="PigList">
            <div className="ui grid container">
                <br/>
                <button onClick={handleClick}> {greased ? "Swtich to all" : "Switch to Greasers only"} </button>
                <div className="Sort">
                    {/* <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} value={search} /> */}
                    <select name="Sort" onChange={handleChange}>
                    <option value="All">Sort Options</option>
                    <option value="Name">Name</option>
                    <option value="Weight">Weight</option>
                    </select>
                </div>
                {renderHogs()}
            </div>
		</div>
	);
}

export default PigList;

// return (
//     <div className="PigList">
//         <div className="ui grid container">
//             <br/>
//             <button onClick={handleClick}> {greased ? "All hogs displayed" : "Greasers only"} </button>
//         {hogs.map(porker => {
//         return <Pig hogs={porker} key={porker.name} />
//         })
//     }
//         </div>
//     </div>
// );
// }


//Nick's code below

// import Hog from './Hog'
// import { v4 as uuidv4 } from 'uuid';
// import { useState } from 'react'
// const HogContainer = ({hogs}) => {
//     const [greased, setGreased] = useState(false)
//     const [sort, setSort] = useState("none")

    // const filterAndSortHogs = () => {
    //    const filtered = hogs.filter(hog => {
    //         if(greased){
    //             return hog.greased
    //         } else { 
    //             return true
    //         }
    //     })

    //     if(sort === "none"){
    //         return filtered
    //     } else if (sort === "name"){
    //         return filtered.sort((a,b) => {
    //             if(a.name > b.name){
    //                 return 1
    //             } else {
    //                 return -1
    //             }
    //         })
    //     } else {
    //         return filtered.sort((a,b) => {
    //             if(a.weight < b.weight){
    //                 return 1
    //             } else {
    //                 return -1
    //             }
    //         })
    //     }


    // }

//     const renderHogs = () => {
//         return filterAndSortHogs().map(hog => {
//             return <Hog key={uuidv4()} hog={hog}/>
//         })
//     }
//     const handleClick = () => {
//         setGreased(!greased)
//     }

    // const handleChange = (event) => {
    //     setSort(event.target.value)
    // }
//     return(
//         <>
//             <div>
//                 <button onClick={handleClick}>{ greased ? "All Hogs" : "Greased Hogs Only"} </button>
//                 <select onChange={handleChange}>
//                     <option>none</option>
//                     <option>name</option>
//                     <option>weight</option>
//                 </select>
//             </div>
//             <div class="ui grid container">
//                 {renderHogs()}
//             </div>
//         </>
//     )
// }

// export default HogContainer