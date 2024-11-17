import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import Listingitem from "../components/Listingitem";
import faltcity from "../images/flatcity.png";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const navigate = useNavigate();

  SwiperCore.use([Navigation, EffectFade, Pagination, Autoplay]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=5");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  const handleClick = () => {
    navigate("/search");
  };

  return (
    <div className="bg-[url('../images/flatcity.png')]">
      {/* top */}
      <div className="flex flex-col gap-6 p-5 md:p-32 md:px-44 max-w-8x bg-white w-full text-center h-max-44 animate-slidein">
        <h1 className="text-black-700 font-bold text-3xl lg:text-6xl animate-slidein">
          Find Your Next <span className="text-blue-700">Perfect</span>
          <br />
          Place With Ease
        </h1>
        <div className="text-slate-500 text-xs sm:text-sm  animate-slidein">
          EstateGuru is the best place to find your next perfect place to live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>

        <div className="flex justify-center items-center animate-slidein">
          <button
            className=" w-36 text-white bg-blue-700 hover:bg-blue-900 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 "
            onClick={handleClick}
          >
            Get started...
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img className="object-cover" src={faltcity} />
        </div>
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {offerListings &&
            offerListings.length > 0 &&
            offerListings.map((listing) => (
              <SwiperSlide>
                <div
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                  className="h-[650px]"
                  key={listing._id}
                ></div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10 items-center justify-center">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 ">
              {offerListings.slice(0, 3).map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 ">
              {rentListings.slice(0, 3).map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.slice(0, 3).map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
