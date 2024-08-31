
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CarCard from "../../components/card/Card";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const LikedCarsPage = () => {
  const likedCars = useSelector((state: RootState) => state.likedCars.cars);

  return (
    <>
      <Header />
      <div className="container liked-cars-page flex flex-col min-h-screen">
        <div className="flex w-full flex-wrap justify-center gap-[25px]">
          {likedCars.length > 0 ? (
            likedCars.map((car) => <CarCard key={car._id} car={car} isLikedPage />)
          ) : (
            <p>No cars liked yet.</p>
          )}
        </div>
      </div>
      <div className="flex-grow">
        <Footer />
      </div>

    </>
  );
};

export default LikedCarsPage;
