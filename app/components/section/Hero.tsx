import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home"
                 className="relative flex items-center justify-center min-h-screen bg-hero-background bg-no-repeat bg-center pt-[120px] md:pt-[130px] lg:pt-[160px]">
            <h1 className="hero-title text-white text-6xl sm:text-7xl lg:text-8xl font-garage uppercase tracking-wide opacity-0">
                Restauration et réparation de véhicules anciens et de collection
            </h1>
        </section>
    );
}

export default Hero;
