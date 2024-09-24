import React from 'react';
import Hero from "@/app/components/section/Hero";
import Services from "@/app/components/section/Services";
import About from "@/app/components/section/About";
import Quote from "@/app/components/section/Quote";
import Contact from "@/app/components/section/Contact";
import Blog from "@/app/components/section/Blog";

export default function Home() {
    return (
        <>
            <Hero/>
            <Services/>
            <About/>
            <Quote/>
            <Blog/>
            <Contact/>
        </>
    );
}
