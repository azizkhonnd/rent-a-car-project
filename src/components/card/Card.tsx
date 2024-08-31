import React from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { Skeleton } from "@mui/material";
import { Car } from "../../types/dataTypes";
import { useDispatch } from "react-redux";
import { likeCar, unlikeCar } from "../../redux/slices/car-slice-liked";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import { notification } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./card.css";

const CardComponent = ({
  car,
  isLoading,
}: {
  car: Car;
  isLoading: boolean;
  isLikedPage?: boolean;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const likedCars = useSelector((state: RootState) => state.likedCars.cars);
  const liked = likedCars.some((likedCar) => likedCar._id === car._id);

  const handleLikeClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    car: Car,
    type: string
  ) => {
    e.stopPropagation();

    if (type === "like") {
      dispatch(likeCar(car));
      notification.success({
        message: "Car Liked",
        description: `${car.name} has been added to your liked cars.`,
        placement: "topRight",
        duration: 2,
      });
    } else {
      dispatch(unlikeCar(car._id));
      notification.info({
        message: "Car Unliked",
        description: `${car.name} has been removed from your liked cars.`,
        placement: "topRight",
        duration: 2,
      });
    }
  };


  const handleCardClick = () => {

    navigate(`/cars/${car._id}`);
  };

  return (
    <div className="card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <div
        className="card-container"
        style={{
          width: 297,
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        {isLoading ? (
          <Skeleton variant="rectangular" width="100%" height={160} />
        ) : (
          <>
            <h3
              className="card__title"
              style={{ marginLeft: 16, marginTop: 10, fontSize: 20 }}
            >
              {car.name}
            </h3>
            <h3
              className="card__title"
              style={{
                marginLeft: 16,
                marginTop: 10,
                fontSize: 16,
                fontWeight: 500,
                color: "#90A3BF",
              }}
            >
              {car.year}
            </h3>
            <img
              src={car.thumbnail}
              alt={car.name}
              className="scale-x-[-1]"
              style={{ width: "100%", height: 160, objectFit: "contain", boxShadow: '0px 10px 40px -25px rgba(gray, 0.5)' }}
            />
            <button
              className={`like__btn ${liked ? "liked" : ""}`}
              onClick={(e) => handleLikeClick(e, car, liked ? "unlike" : "like")}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "22px",
                color: liked ? "red" : "#ccc",
                zIndex: 2,
              }}
            >
              {liked ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>

          </>
        )}

        <div style={{ padding: 16 }}>
          {isLoading ? (
            <Skeleton variant="text" width={200} height={30} />
          ) : (
            <h3 className="card__title" style={{ margin: 0, fontSize: 20 }}>
              {car.name}
            </h3>
          )}
        </div>

        <div className="car_details">
          {isLoading ? (
            <>
              <Skeleton variant="text" width={120} height={30} />
              <Skeleton variant="text" width={120} height={30} />
              <Skeleton variant="text" width={120} height={30} />
            </>
          ) : (
            <>
              <p
                className="car__item-title"
                style={{ color: "#90A3BF", fontSize: 15, marginTop: 8 }}
              >
                <BsFillFuelPumpFill size={22} />
                {car.fuel}
              </p>
              <p
                className="car__item-title"
                style={{ color: "#90A3BF", fontSize: 15, marginTop: 8 }}
              >
                <AiOutlinePlusCircle size={22} />
                {car.transmission}
              </p>
              <p
                className="car__item-title"
                style={{ color: "#90A3BF", fontSize: 15, marginTop: 8 }}
              >
                <HiUsers size={22} />
                {car.seats} People
              </p>
            </>
          )}
        </div>

        <div className="card__items-wrapper">
          <div style={{ padding: "0 16px 16px ", textAlign: "left" }}>
            {isLoading ? (
              <Skeleton variant="text" width={80} height={30} />
            ) : (
              <span style={{ fontSize: 20, fontWeight: "bold" }}>
                ${car.rent_price}
                <span className="span__text">/day</span>
              </span>
            )}
          </div>
          <div className="rent__btn_wrapper">
            {isLoading ? (
              <Skeleton variant="rectangular" width={120} height={40} />
            ) : (
              <button className="rent__btn">Rent Now</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
