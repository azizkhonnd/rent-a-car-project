import { AiFillHeart, AiOutlineHeart, AiOutlinePlusCircle } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Car } from '../../types/dataTypes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { likeCar } from '../../redux/slices/car-slice-liked';
import './card.css';

const CardComponent = ({ car, isLoading }: { car: Car, isLoading: boolean }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const likedCars = useSelector((state: RootState) => state.likedCars.cars);

  const handleCardClick = () => {
    if (!isLoading) {
      navigate(`/cars/${car._id}`);
    }
  };

  const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); 
    if (!isLoading) {
      console.log('Heart button clicked', car);
      dispatch(likeCar(car));
    }
  };

  const isLiked = likedCars.some(likedCar => likedCar.id === car._id);

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="card-container" style={{ width: 297, borderRadius: 10, overflow: 'hidden', backgroundColor: '#fff', position: 'relative' }}>
        
        {isLoading ? (
          <Skeleton variant="rectangular" width="100%" height={160} />
        ) : (
          <>
            <img src={car.thumbnail} alt={car.name} style={{ width: '100%', height: 160, objectFit: 'contain' }} />
            <button 
              className={`like__btn ${isLiked ? 'liked' : ''}`} 
              onClick={handleLikeClick}
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '22px',
                color: isLiked ? 'red' : '#ccc',
                zIndex: 2, 
              }}
            >
              {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
          </>
        )}

        <div style={{ padding: 16 }}>
          {isLoading ? (
            <Skeleton variant="text" width={200} height={30} />
          ) : (
            <h3 className="card__title" style={{ margin: 0, fontSize: 20 }}>{car.name}</h3>
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
              <p className="car__item-title" style={{ color: '#90A3BF', fontSize: 15, marginTop: 8 }}>
                <BsFillFuelPumpFill size={22} />{car.fuel}
              </p>
              <p className="car__item-title" style={{ color: '#90A3BF', fontSize: 15, marginTop: 8 }}>
                <AiOutlinePlusCircle size={22} />{car.transmission}
              </p>
              <p className="car__item-title" style={{ color: '#90A3BF', fontSize: 15, marginTop: 8 }}>
                <HiUsers size={22} />{car.seats} People
              </p>
            </>
          )}
        </div>

        <div className="card__items-wrapper">
          <div style={{ padding: '0 16px 16px ', textAlign: 'left' }}>
            {isLoading ? (
              <Skeleton variant="text" width={80} height={30} />
            ) : (
              <span style={{ fontSize: 20, fontWeight: 'bold' }}>
                ${car.rent_price}<span className="span__text">/day</span>
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
