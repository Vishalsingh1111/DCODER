import React, { useState, useEffect } from "react";

const images = [
    "./1.png",
    "./2.png",
    "./3.png",
    "./4.png",
    "./5.png",
    "./6.png",
    "./7.png",
    "./8.png",
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Transition every 2 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[180px] sm:h-[180px] md:h-full overflow-hidden border ">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="min-w-full h-[180px] sm:h-[180px] md:h-[510px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default function App() {
    return (
        <>

            <div className="text-center mt-10">
                <h1
                    className="font-semibold dark:text-white text-4xl pb-2"
                    id="homecontentcard"
                >
                    Features Which are Available Here
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                    Get all features which are available on this website for users
                </p>
            </div>
            <div className="mx-5 md:mx-auto max-w-[1020px] mt-10 bg-white py-5 md:py-[60px] dark:bg-slate-800 dark:border-gray-600 bg-white dark:border shadow shadow-black/40 rounded-lg ">
                <div className="mx-auto max-w-screen-lg px-5 md:px-20 flex items-center justify-center ">
                    <Carousel />
                </div>
            </div>
        </>
    );
}
