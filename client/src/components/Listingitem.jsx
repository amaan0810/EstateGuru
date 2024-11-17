import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Listingitem({ listing }) {
  return (
    <div className="bg-white flex shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg f-full sm:w-[320px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="text-lg font-semibold text-black line-clamp-1 ">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-green-700 h-4 w-4 " />
            <p className=" line-clamp-1 text-sm text-gray-400 w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-gray-400 line-clamp-2">
            {listing.description}
          </p>
          <p className="font-semibold mt-2 text-blue-900">
            ₹{" "}
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="text-slate-700 flex gap-4">
            <div className="font-bold text-xs">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </div>
            <div className="font-bold text-xs">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
