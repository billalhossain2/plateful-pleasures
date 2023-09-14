import React, { useEffect, useState } from "react";
import ChefCard from "../Chef/Chef";

function Chefs() {
    const [chefsData, setChefsData] = useState([]);
    useEffect(()=>{
        fetch(`data/chefsData.json`)
        .then(res => res.json())
        .then(data => setChefsData(data))
        .catch(error => console.log('Fetching chefs data error===> ', error))
    }, [])
  return (
    <div className="max-w-[90%] mx-auto">
        <h1 className="text-3xl font-bold text-center mt-40 mb-10">Our Masterful Chefs</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {chefsData.map((chef, index) => (
          <ChefCard key={index} chefData={chef} />
        ))}
      </div>
    </div>
  );
}

export default Chefs;
