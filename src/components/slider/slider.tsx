import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "@/assets/icons/Arrow - Left Circle.svg";
import arrowRight from "@/assets/icons/Arrow - Right Circle.svg";

import styles from "./slider.module.scss";

const SliderComponent = ({ children }: { children: React.ReactNode }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();

        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const PrevArrow = (props: { className?: string; onClick?: () => void; }) => {
        const { className, onClick } = props;
        return (
            <button
                className={`${styles.custom_arrow} ${styles.prev_arrow} ${className || ''}`}
                onClick={onClick}
                aria-label="Previous slide"
            >
                <img src={arrowLeft} alt="Previous" />
            </button>
        );
    };

    const NextArrow = (props: { className?: string; onClick?: () => void; }) => {
        const { className, onClick } = props;
        return (
            <button
                className={`${styles.custom_arrow} ${styles.next_arrow} ${className || ''}`}
                onClick={onClick}
                aria-label="Next slide"
            >
                <img src={arrowRight} alt="Next" />
            </button>
        );
    };

    const settings = {
        centerMode: true,
        centerPadding: isMobile ? '5%' : '20%',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '15%',
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '10%',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '8%',
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '0',
                    dots: false,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className={styles.slider}>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
};

export default SliderComponent;