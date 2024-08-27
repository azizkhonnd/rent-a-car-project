import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CarCard from "../../components/card/Card";
import Header from "../../components/header/Header";

const LikedCarsPage: React.FC = () => {
  const likedCars = useSelector((state: RootState) => state.likedCars.cars);

  return (
    <>
      <Header />
      <div className="container liked-cars-page">
        {likedCars.length > 0 ? (
          likedCars.map((car) => <CarCard key={car.id} car={car} isLikedPage />)
        ) : (
          <p>No cars liked yet.</p>
        )}
      </div>
    </>
  );
};

export default LikedCarsPage;
