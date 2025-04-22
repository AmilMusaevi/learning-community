import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import scrollTopIcon from "@/assets/icons/scrollTop.json"
import styles from './resetScroll.module.scss';
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (

                <Lottie animationData={scrollTopIcon} onClick={scrollToTop} className={styles.scrollTop} />
            )}
        </>
    );
};

export default ScrollToTop;