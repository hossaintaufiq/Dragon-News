import { useEffect, useState } from "react";

import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [catagories,setCatagories]=useState([]);
    // const [news]

    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=>setCatagories(data))
    },[])


    return (
        <div>
            <h2 className="font-bold">All Catagories</h2>

            {
                catagories.map(catagory=> 
                <Link
                     key={catagory.id}
                     className="flex flex-col p-4 font-medium"
                      > 
                     {catagory.name}</Link>)

            }
            
        </div>
    );
};

export default LeftSideNav;