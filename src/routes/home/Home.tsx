import { useState } from "react";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import CardComponent from "../../components/card/Card";
import { useGetCarsQuery } from "../../redux/api/car-api";
import Header from "../../components/header/Header";
import { Car } from "../../types/dataTypes";
import mainImg1 from "./img/main-img1.svg";
import mainImg2 from "./img/main-img2.svg";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";

const fallbackCar: Car = {
  _id: "",
  name: "",
  images: [],
  description: "",
  price: 0,
  status: "",
  rent_price: 0,
  color: "",
  model: "",
  category: "",
  year: 0,
  fuel: "",
  transmission: "",
  seats: 0,
  colors: [],
  user_id: null,
  thumbnail: "",
  discount: 0,
  capacity_fuel: 0,
  usage_per_km: 0,
};

const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

const Home = () => {
  const { data, isLoading } = useGetCarsQuery();
  const [showDateInput, setShowDateInput] = useState(false);
  const [showTimeInput, setShowTimeInput] = useState(false);

  const toggleDateInput = () => setShowDateInput(!showDateInput);
  const toggleTimeInput = () => setShowTimeInput(!showTimeInput);

  return (
    <>
      <Header />
      <div className="container home__items-top">
        <div className="flex gap-5">
          <div className="home__items-top-left bg-blue-400 w-[616px] h-[360px] p-5 rounded-lg">
            <h1 className="text-3xl w-[250px] mb-5 leading-10 font-semibold text-white">
              The Best Platform for Car Rental
            </h1>
            <p className="w-[264px] mb-5 leading-6 text-base text-white">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <button className="px-[22px] hover:bg-blue-700 transition duration-280 py-[9px] bg-blue-600 rounded-lg text-white">
              Rental Car
            </button>
            <img
              className="ml-[158px] mt-[-8px]"
              src={mainImg1}
              alt="car img 1"
              width={406}
              height={116}
            />
          </div>
          <div className="home__items-top-left bg-blue-500 w-[612px] h-[360px] p-5 rounded-lg">
            <h1 className="text-3xl w-[250px] leading-10 mb-5 text-white font-semibold">
              Easy way to rent a car at a low price
            </h1>
            <p className="w-[264px] mb-5 leading-6 text-base text-white">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <button className="px-[22px] hover:bg-blue-700 transition duration-280 py-[9px] bg-blue-400 rounded-lg text-white">
              Rental Car
            </button>
            <img
              className="ml-[148px] mt-[-19px]"
              src={mainImg2}
              alt="car img 2"
              width={406}
              height={116}
            />
          </div>
        </div>
      </div>
      <div className="container bottom__container flex w-full justify-between items-center">
        <div className="w-[582px] h-[136px] flex items-center gap-2 flex-col bg-[#fff]  rounded-[10px]">
          <div className="flex items-center w-[85%]  justify-start gap-2 mt-4">
            <input
              type="radio"
              name="pickup"
              id="radio"
              className="cursor-pointer"
            />
            <label className="font-semibold" htmlFor="radio">
              Pick - Up
            </label>
          </div>
          <div className="flex gap-[50px] items-center justify-center mt-[10px]">
            <div className="flex flex-col">
              <h3 className="font-bold text-md">Locations</h3>
              <div className="flex">
                <select className="outline-none" name="city" id="city">
                  <option value="">Select your city</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-md">Date</h3>
              <div className="flex">
                {showDateInput ? (
                  <input
                    type="date"
                    className="outline-none"
                    name="date"
                    id="date"
                  />
                ) : (
                  <button
                    className="flex items-center"
                    onClick={toggleDateInput}
                  >
                    Select your date
                    {showDateInput ? (
                      <BiChevronUp size={19} />
                    ) : (
                      <BiChevronDown size={19} />
                    )}
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-md">Time</h3>
              <div className="flex">
                {showTimeInput ? (
                  <input
                    type="time"
                    className="outline-none"
                    name="time"
                    id="time"
                  />
                ) : (
                  <button
                    className="flex items-center"
                    onClick={toggleTimeInput}
                  >
                    Select your time
                    {showTimeInput ? (
                      <BiChevronUp size={19} />
                    ) : (
                      <BiChevronDown size={19} />
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-blue-500 p-1.5 rounded-md  shadow-md   shadow-blue-500"><CgArrowsExchangeAltV size={30} color="white" /></button>
        </div>
        <div className="w-[582px] h-[136px] flex items-center gap-2 flex-col bg-[#fff]  rounded-[10px]">
          <div className="flex items-center w-[85%]  justify-start gap-2 mt-4">
            <input
              type="radio"
              name="pickup"
              id="radio"
              className="cursor-pointer"
            />
            <label className="font-semibold" htmlFor="radio">
              Drop - Off
            </label>
          </div>
          <div className="flex gap-[50px] items-center justify-center mt-[10px]">
            <div className="flex flex-col">
              <h3 className="font-bold text-md">Locations</h3>
              <div className="flex">
                <select className="outline-none" name="city" id="city">
                  <option value="">Select your city</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-md">Date</h3>
              <div className="flex">
                {showDateInput ? (
                  <input
                    type="date"
                    className="outline-none"
                    name="date"
                    id="date"
                  />
                ) : (
                  <button
                    className="flex items-center"
                    onClick={toggleDateInput}
                  >
                    Select your date
                    {showDateInput ? (
                      <BiChevronUp size={19} />
                    ) : (
                      <BiChevronDown size={19} />
                    )}
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-md">Time</h3>
              <div className="flex">
                {showTimeInput ? (
                  <input
                    type="time"
                    className="outline-none"
                    name="time"
                    id="time"
                  />
                ) : (
                  <button
                    className="flex items-center"
                    onClick={toggleTimeInput}
                  >
                    Select your time
                    {showTimeInput ? (
                      <BiChevronUp size={19} />
                    ) : (
                      <BiChevronDown size={19} />
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {isLoading
          ? Array.from(new Array(4)).map((_, index) => (
            <CardComponent key={index} isLoading={true} car={fallbackCar} />
          ))
          : data?.payload.map((car) => (
            <CardComponent key={car._id} isLoading={false} car={car} />
          ))}
      </div>
    </>
  );
};

export default Home;
