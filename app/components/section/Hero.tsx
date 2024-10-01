import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative flex flex-col-reverse items-start min-h-screen bg-hero-background bg-no-repeat bg-center bg-cover pt-[120px] md:pt-[130px] lg:pt-[160px]">
            <h1 className="hero-title text-gray-7 text-center text-4xl md:text-text-5xl lg:text-6xl font-beau-rivage mx-auto max-w-2/3 mb-12 opacity-20">
                Restauration et réparation de véhicules anciens et de collection
            </h1>
        </section>
    );
}

export default Hero;
