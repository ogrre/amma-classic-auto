import React from 'react';
import Hero from "@/app/components/section/Hero";
import Services from "@/app/components/section/Services";
import About from "@/app/components/section/About";
import Contact from "@/app/components/section/Contact";
import Blog from "@/app/components/section/Blog";
import Brands from "@/app/components/section/Brands";

export default function Home() {
    return (
        <>
            <Hero/>
            <About/>
            <Services/>
            <Brands/>
            <Blog/>
            <Contact/>
        </>
    );
}
