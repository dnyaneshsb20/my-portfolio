import Header from '../components/Header';
import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import img1 from '../assets/certificates/h1.jpg';
import img2 from '../assets/certificates/h2.jpg';
import img3 from '../assets/certificates/h3.jpg';
import img4 from '../assets/certificates/h4.jpg';
import img5 from '../assets/certificates/h5.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const Achievements = () => {
    const images = [img5, img1, img4, img2, img3];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header onCertificationsClick={() => { }} />

            <main className="flex-grow container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-center mb-12 text-primary mt-8 md:mt-16">
                    ACHIEVEMENTS
                </h1>

                {/* Responsive Card */}
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl flex flex-col md:flex-row overflow-hidden max-w-5xl mx-auto h-auto md:h-[350px]">

                    {/* Left Section - Image */}
                    <div className="w-full md:w-1/2 relative flex items-center justify-center">
                        <button
                            onClick={prevImage}
                            className="absolute left-2 md:left-1 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
                            style={{ top: '50%', transform: 'translateY(-50%)' }}
                        >
                            &lt;
                        </button>

                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentIndex} // important to re-render each image
                                src={images[currentIndex]}
                                alt={`Achievement ${currentIndex + 1}`}
                                className="w-[22rem] md:w-[26rem] max-h-64 md:max-h-80 object-contain rounded-3xl"
                                initial={{ x: 50, opacity: 0 }}    // enter from right
                                animate={{ x: 0, opacity: 1 }}      // center
                                exit={{ x: -50, opacity: 0 }}      // exit to left
                                transition={{ duration: 1 }}
                            />
                        </AnimatePresence>

                        <button
                            onClick={nextImage}
                            className="absolute right-2 md:right-1 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
                            style={{ top: '50%', transform: 'translateY(-50%)' }}
                        >
                            &gt;
                        </button>
                    </div>

                    {/* Right Section - Info */}
                    <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-center text-black dark:text-white">
                        <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
                            COEP MindSpark'25 - TATA MOTORS Hackathon Winner
                        </h2>

                        <ul className="text-justify list-disc pl-5 space-y-2">
                            <li>
                                Our team, <strong>Code Pirates</strong>, won First Prize in the TATA MOTORS Hackathon under MindSpark’25 – The Quantum Nexus.
                            </li>
                            <li>
                                Awarded Trophy, Certificates, and Best Project Certificates from TATA MOTORS.
                            </li>
                            <li>
                                Strengthened teamwork, innovation, and problem-solving skills while delivering impactful real-world solutions.
                            </li>
                        </ul>

                        <p className="text-sm mt-4 text-center md:text-left">Date: October 2025</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Achievements;
