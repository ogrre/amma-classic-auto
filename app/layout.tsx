"use client";

import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React from "react";

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    // Scroll to top logic
    const scrollToTop = () => {
        scrollTo(document.documentElement);
    };

    const scrollTo = (element: HTMLElement, to = 0, duration = 500) => {
        const start = element.scrollTop;
        const change = to - start;
        const increment = 20;
        let currentTime = 0;

        const animateScroll = () => {
            currentTime += increment;
            element.scrollTop = easeInOutQuad(currentTime, start, change, duration);
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };

        animateScroll();
    };

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    return (
        <html lang="en" className="scroll-smooth">
        <head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>
                AMMA Classic Auto
            </title>
            <link
                rel="shortcut icon"
                href="/assets/images/favicon.png"
                type="image/x-icon"
            />
            <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css"/>
            <link rel="stylesheet" href="/assets/css/animate.css"/>
            {/*<link rel="stylesheet" href="/assets/css/tailwind.css"/>*/}
        </head>

        <body className="bg-gradient-to-r from-black-10 from-5% via-black-30 via-10% to-black to-20%">
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        <a href="" className="back-to-top fixed bottom-8 left-auto right-8 z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark" onClick={scrollToTop} style={{ display: 'none' }}>
            <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
        </a>
        </body>
        </html>
    );
}