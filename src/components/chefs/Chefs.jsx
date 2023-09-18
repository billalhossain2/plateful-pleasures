import React, { useEffect, useState } from "react";
import ChefCard from "../Chef/Chef";
import useFetch from "../Hooks/useFetch";

function Chefs() {
  const chefsData = useFetch("data/chefsData.json");
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-40 mb-10">
        Our Masterful Chefs
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {chefsData.map((chef, index) => (
          <ChefCard key={index} chefData={chef} />
        ))}
      </div>
    </div>
  );
}

export default Chefs;
