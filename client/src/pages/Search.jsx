import React from "react";
import Listing from "./Listing";

export default function Search() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form className="flex flex-col gap-8 ">
          <div className="flex items-center gap-2">
            <label className="font-medium">Search Term:</label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="border rounded-lg p-3 w-full"
            />
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-medium">Type:</label>
            <div className="flex gap-2">
              <input type="checkbox" id="all" className="w-5" />
              <span>Rent & Sale</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>Sale</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-medium">Aminities:</label>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span>Furnished</span>
            </div>

            
          </div>
          <div className="flex items-center gap-2" >
              <label className="font-medium">Sort:</label>
              <select id="sort_order" className="border rounded-lg p-3">
                <option>Price high To low</option>                
                <option>Price low To high</option>                
                <option>Latest</option>                
                <option>Oldest</option>                
              </select>
            </div>
            <button className="bg-blue-900 p-3 rounded-lg text-white uppercase font-semibold hover:opacity-95">Search</button>
        </form>
      </div>
      <div className="">
        <h1 className="text-3xl font-semibold border-b p-3 mt-5 text-slate-700">Listing results:</h1>
      </div>
    </div>
  );
}
