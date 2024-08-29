/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef } from 'react';
import { useParams } from "react-router-dom";
import { useGetCarsQuery } from "../../redux/api/car-api";
import Header from "../../components/header/Header";
import parse from "html-react-parser";
import Skeleton from '@mui/material/Skeleton';
import { Carousel, notification } from 'antd';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { likeCar, unlikeCar } from "../../redux/slices/car-slice-liked";
import { RootState } from "../../redux/store";
import "./SinglePage.css";

const SingleCarPage = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetCarsQuery();
    const [ setMainImageIndex] = useState(0);
    const carouselRef = useRef(null);
    const dispatch = useDispatch();

    const likedCars = useSelector((state: RootState) => state.likedCars.cars);
    const car = data?.payload.find(car => car._id === id);
    const liked = likedCars.some((likedCar) => likedCar._id === car?._id);

    if (isLoading) {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="car-detail-container w-[80%] flex justify-end">
                        <div className="car-image">
                            <Skeleton variant="rectangular" width={380} height={120} className="bg-blue-500 rounded-md" />
                        </div>
                        <div className="car-details bg-white w-[492px] p-6 ">
                            <Skeleton variant="text" width={200} height={40} />
                            <Skeleton variant="text" width="100%" height={20} />
                            <Skeleton variant="text" width="60%" height={20} />
                            <Skeleton variant="rectangular" width="100%" height={60} />
                            <div className="rent-section flex ">
                                <Skeleton variant="rectangular" width={150} height={40} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    if (!car) return <div>Car not found</div>;

    const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement>, car: any, type: string) => {
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

    const handleThumbnailClick = (index: React.SetStateAction<number>) => {
        setMainImageIndex(index);
        if (carouselRef.current) {
            carouselRef.current.goTo(index);
        }
    };

    return (
        <>
            <Header />
            <div className="container ">
                <div className="car-detail-container w-[100%]  ">
                    <div className="car-image ">
                        <Carousel
                            autoplay
                            dotPosition="bottom"
                            className="car-carousel"
                            ref={carouselRef}
                        >
                            {car.images.map((image, index) => (
                                <div key={index} className="carousel-item bg-white">
                                    <img src={image} alt={`${car.name} ${index + 1}`} className="carousel-image" />
                                </div>
                            ))}
                        </Carousel>

                        <div className='w-full'>
                            <ul className="thumbnails-list flex gap-4 w-[100%] ">
                                {car.images.map((image, index) => (
                                    <li
                                        key={index}
                                        className="thumbnail-item cursor-pointer bg-white"
                                        onClick={() => handleThumbnailClick(index)}
                                    >
                                        <img src={image} alt={`Thumbnail ${index + 1}`} className="thumbnail-image" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="car-details relative min-h-[98%] bg-white w-[1200px] max-w-[600] p-6">

                      
                        <button
                            className={` ${liked ? "liked" : ""}`}
                            onClick={(e) => handleLikeClick(e, car, liked ? "unlike" : "like")}
                            style={{
                                position: "absolute",
                                top: 20,
                                right: 20,
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "24px",
                                color: liked ? "red" : "#ccc",
                                zIndex: 2,
                            }}
                        >
                            {liked ? <AiFillHeart /> : <AiOutlineHeart />}
                        </button>

                        <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
                        <p className="text-slate-600 font-normal mb-4">{parse(car.description)}</p>
                        <div className="car-info flex flex-wrap gap-6 mb-4">
                            <div className="car-info-item flex items-center">
                                <span className="font-normal text-slate-400 capitalize mr-2">Capacity:</span>
                                <span className="font-semibold text-base text-[#596780]">{car.seats} People</span>
                            </div>
                            <div className="car-info-item flex items-center">
                                <span className="font-normal text-slate-400 capitalize mr-2">Fuel:</span>
                                <span className="font-semibold text-base text-[#596780]">{car.fuel}</span>
                            </div>
                            <div className="car-info-item flex items-center">
                                <span className="font-normal text-slate-400 capitalize mr-2">Transmission:</span>
                                <span className="font-semibold text-base text-[#596780] capitalize">{car.transmission}</span>
                            </div>
                        </div>
                        <div className="rent-section flex ">
                            <div className="flex items-center gap-[104px] justify-between w-full">
                                <div className="flex items-center">
                                    <p className="text-2xl font-bold">{car.rent_price}/ </p>
                                    <span className="text-slate-500 font-semibold">$days</span>
                                </div>
                                <div className="flex ">
                                    <button className="btn px-5 bg-blue-500 py-3 rounded-md text-white text-md font-semibold flex justify-end">
                                        Rent Now
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default SingleCarPage;
