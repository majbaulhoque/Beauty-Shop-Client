import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import BannerOne from '../../assets/images/slider-img-5.png';

const HomePage = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000, // Duration of the animation
            easing: 'ease-in-out', // Easing function
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between sm:space-x-4 space-y-6 sm:space-y-0 p-4 bg-gradient-to-r from-[#F9F5EC] to-[#F3E4CB]">
            <div className="flex-1 sm:w-1/2 text-center sm:text-left md:ml-32" data-aos="fade-right">
                <h1 className="text-xl sm:text-3xl font-semibold mb-4 text-center md:w-4/5 md:text-justify">Awaken your true beauty with skincare designed to reveal radiance.</h1>
                <p className="text-sm sm:text-base md:w-4/5 md:text-justify">Unlock the secret to radiant beauty with our carefully crafted products. Shine from within, naturally. Whether you're looking for skincare, makeup, or wellness, we're here to help you glow with confidence every day.</p>
                <button className='border border-black text-black px-4 py-2 mt-4 hover:text-[#F3E3CA] hover:bg-black rounded shadow'>Learn More</button>
            </div>
            <div className="flex-1 sm:w-1/2 flex items-center justify-center">
                <img 
                    src={BannerOne} 
                    className="w-full h-auto max-w-md sm:max-w-full md:-mt-4 md:ml-8" 
                    alt="Banner" 
                />
            </div>
        </div>
    );
};

export default HomePage;
