import React, { useEffect, useState } from "react";

export const BannerSlider = () => {
    const slides = [
        "https://img.freepik.com/free-vector/hand-drawn-collage-design_23-2149543516.jpg?w=740&t=st=1702988926~exp=1702989526~hmac=d85ffa61e28d837b2109f44de30320e344a3b791bf9b215e61901fa221520ae8",
        "https://img.freepik.com/free-vector/hand-drawn-collage-background_23-2149590537.jpg?w=740&t=st=1702989166~exp=1702989766~hmac=185472704d96240641a86dfacf9b1b58e4345d24e1a9fa4a3beacb7fa426b9e7",
        "https://img.freepik.com/free-vector/abstract-flat-background_23-2149590546.jpg?t=st=1702964340~exp=1702964940~hmac=d866cdfd091fc87847d751d84d64605496bb5dd7b427cb6dbae909c5a5acce3e"
    ];
    const [slider, setSlider] = useState(0);

    const nextSlide = () => {
        console.log(prevSlider)
        setSlider((prevSlider) => (prevSlider + 1) % slides.length)
    }

    const prevSlider = () => {
        setSlider((prevSlider) => prevSlider === 0 ? slides.length - 1 : prevSlider - 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (slider === slides.length) {
                clearInterval(interval)
            } else {
                nextSlide();
            }
            return () => clearInterval(interval)
        }, 3000)
    }, [slider, slides.length]);

    return (
        <>
            <div className="relative overflow-hidden max-w-screen-md mx-auto">
                <div className="flex transition-transform duration-500 transform translate-x-[-${slider * 100}%]">
                    {slides.map((slide, index) => (
                        <div className="flex-shrink-0 w-full">
                            <img src={slides[slider]} alt={`slider-${slider}`} className="w-full h-auto" />
                        </div>
                    ))}
                </div>
                <button onClick={prevSlider} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl font-bold text-white bg-gray-800 p-2 rounded-full focus:outline-none">
                    Prev
                </button>
                <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl font-bold text-white bg-gray-800 p-2 rounded-full focus:outline-none">
                    Next
                </button>
            </div>
        </>
    )
}