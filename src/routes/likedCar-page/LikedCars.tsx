
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CarCard from "../../components/card/Card";

const LikedCarsPage: React.FC = () => {
  const likedCars = useSelector((state: RootState) => state.likedCars.cars);

  return (
    <div className="liked-cars-page"> 
      <h2>Liked Cars</h2>
      {likedCars.length > 0 ? (
        likedCars.map((car) => <CarCard key={car.id} car={car} />)
      ) : (
        <p>No cars liked yet.</p>
      )}
    </div>
  );
};

export default LikedCarsPage;
