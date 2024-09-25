import React from 'react';

const Brands: React.FC = () => {
    return (
        <section className="py-20 lg:py-[115px] bg-secondary">
            <div className="container">
                <div className="flex flex-wrap items-center justify-center gap-8 xl:gap-11">
                    <div>
                        <img src="/assets/images/brands/logo-austin-healey.png"
                            alt="logo-austin-healey.png"/>
                    </div>
                    <div>
                        <img src="/assets/images/brands/logo-jaguar.png"
                            alt="logo-jaguar.png"/>
                    </div>
                    <div>
                        <img src="/assets/images/brands/logo-mercedes-benz.png"
                            alt="logo-mercedes-benz.png"/>
                    </div>
                    <div>
                        <img src="/assets/images/brands/logo-mg.png"
                            alt="logo-mg.png"/>
                    </div>
                    <div>
                        <img src="/assets/images/brands/logo-porsche.png"
                            alt="logo-porsche.png"/>
                    </div>
                    <div>
                        <img src="/assets/images/brands/logo-triumph.png"
                            alt="logo-triumph.png"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Brands;