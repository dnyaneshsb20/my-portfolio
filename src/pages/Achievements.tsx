import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trophy, Calendar, Award, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import img1 from '../assets/certificates/h1.webp';
import img2 from '../assets/certificates/h2.webp';
import img3 from '../assets/certificates/h3.webp';
import img4 from '../assets/certificates/h4.webp';
import img5 from '../assets/certificates/h5.webp';

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
        <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
            <Header onCertificationsClick={() => { }} />

            <main className="container mx-auto px-4 sm:px-6 pt-24 pb-8">
                {/* Header Section */}
                <div className="mb-6 sm:mb-10">
                    {/* Back Button + Title on same level */}
                    <div className="max-w-7xl mx-auto w-full relative flex items-center justify-center mb-6 sm:mb-10">
                        {/* Back Button - absolute left */}
                        <div className="absolute left-0">
                            <Link to="/#intro" state={{ scrollTo: 'intro' }}>
                                <Button
                                    variant="ghost"
                                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm sm:text-base"
                                >
                                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="hidden sm:inline">Back</span>
                                </Button>
                            </Link>
                        </div>

                        {/* Title - centered */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white text-center px-12">
                            ACHIEVEMENTS
                        </h1>
                    </div>
                </div>

                {/* Main Achievement Card */}
                <div className="max-w-7xl mx-auto">
                    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="p-4 sm:p-6 md:p-8">
                            {/* Header */}
                            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                                {/* Carousel Section */}
                                <div className="flex-1">
                                    <div className="relative">
                                        <div className="w-full bg-gray-50 dark:bg-gray-900/50 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center min-h-[250px] sm:min-h-[300px]">
                                            <img
                                                src={images[currentIndex]}
                                                alt={`Achievement ${currentIndex + 1}`}
                                                className="w-full h-auto max-h-[200px] sm:max-h-[250px] md:max-h-80 object-contain rounded-lg"
                                            />

                                            {/* Navigation Buttons */}
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 text-white p-1.5 sm:p-2 rounded-full hover:bg-black transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
                                            >
                                                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                            </button>

                                            <button
                                                onClick={nextImage}
                                                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 text-white p-1.5 sm:p-2 rounded-full hover:bg-black transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
                                            >
                                                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                            </button>
                                        </div>

                                        {/* Image Dots Indicator */}
                                        <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                                            {images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentIndex(index)}
                                                    className={`rounded-full transition-all duration-300 ${index === currentIndex
                                                            ? 'bg-blue-600'
                                                            : 'bg-gray-300 dark:bg-gray-600'
                                                        }`}
                                                    style={{
                                                        width: index === currentIndex ? '20px' : '8px',
                                                        height: '8px'
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Details Section */}
                                <div className="flex-1">
                                    <div className="flex flex-col h-full">
                                        {/* Title with Badge */}
                                        <div className="mb-3 sm:mb-4">
                                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                                COEP MindSpark'25 - TATA MOTORS Hackathon
                                            </h2>
                                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                                                <div className="flex items-center gap-1.5 px-2 py-1 sm:px-3 sm:py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-xs sm:text-sm font-medium">
                                                    <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                                    Winner
                                                </div>
                                                <div className="flex items-center gap-1 text-xs sm:text-sm">
                                                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                                    <span>October 2025</span>
                                                </div>
                                                <div className="flex items-center gap-1 text-xs sm:text-sm">
                                                    <Trophy className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                                    <span>First Prize</span>
                                                </div>
                                                <div className="flex items-center gap-1 text-xs sm:text-sm">
                                                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                                    <span className="xs:inline">COEP Technological University</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Achievement Details */}
                                        <div className="flex-1">
                                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2 -mt-2 sm:-mt-5">
                                                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                                                Achievement Highlights
                                            </h3>
                                            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-justify">
                                                <li className="flex items-start gap-2 sm:gap-3">
                                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <span className="text-blue-600 dark:text-blue-300 text-xs sm:text-sm font-bold">1</span>
                                                    </div>
                                                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                                                        Our team, <strong className="text-blue-600 dark:text-blue-400">Code Pirates</strong>, won First Prize in the TATA MOTORS Hackathon under MindSpark'25 – The Quantum Nexus.
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2 sm:gap-3">
                                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <span className="text-blue-600 dark:text-blue-300 text-xs sm:text-sm font-bold">2</span>
                                                    </div>
                                                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                                                        Awarded Trophy, Certificates, and Best Project Certificates from TATA MOTORS.
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2 sm:gap-3">
                                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <span className="text-blue-600 dark:text-blue-300 text-xs sm:text-sm font-bold">3</span>
                                                    </div>
                                                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                                                        Strengthened teamwork, innovation, and problem-solving skills while delivering impactful real-world solutions.
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Skills Gained */}
                                        <div>
                                            <h4 className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 -mt-1 sm:-mt-2">
                                                Skills Demonstrated
                                            </h4>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {['Problem Solving', 'Teamwork', 'Innovation', 'Technical Skills', 'Presentation', 'Leadership'].map((skill, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs sm:text-sm font-medium"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Indicator */}
                        <div className="h-1 w-full bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                    </Card>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Achievements;