"use client";

import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [theme, setTheme] = useState('light');

    // Sticky navbar logic
    useEffect(() => {
        const handleScroll = () => {
            const udHeader = document.querySelector(".ud-header") as HTMLElement;
            const sticky = udHeader?.offsetTop || 0;
            const logo = document.querySelectorAll<HTMLImageElement>(".header-logo");

            if (window.pageYOffset > sticky) {
                udHeader?.classList.add("sticky");
            } else {
                udHeader?.classList.remove("sticky");
            }

            if (logo.length) {
                if (udHeader?.classList.contains("sticky")) {
                    logo.forEach((el) => {
                        el.src = "/assets/images/logo/logo.svg";
                    });
                } else {
                    logo.forEach((el) => {
                        el.src = "/assets/images/logo/logo-white.svg";
                    });
                }
            }

            // Dark mode logo change
            if (document.documentElement.classList.contains("dark")) {
                if (logo.length && udHeader?.classList.contains("sticky")) {
                    logo.forEach((el) => {
                        el.src = "/assets/images/logo/logo-white.svg";
                    });
                }
            }

            // Show/hide back-to-top button
            const backToTop = document.querySelector(".back-to-top") as HTMLElement;
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                backToTop.style.display = "flex";
            } else {
                backToTop.style.display = "none";
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Navbar toggler for mobile responsiveness
    const handleNavbarToggle = () => {
        setIsToggled(!isToggled);
    };

    // Submenu logic
    useEffect(() => {
        const submenuItems = document.querySelectorAll(".submenu-item");
        submenuItems.forEach((el) => {
            el.querySelector("a")?.addEventListener("click", () => {
                el.querySelector(".submenu")?.classList.toggle("hidden");
            });
        });
    }, []);

    // FAQ accordion
    useEffect(() => {
        const faqs = document.querySelectorAll(".single-faq");
        faqs.forEach((el) => {
            el.querySelector(".faq-btn")?.addEventListener("click", () => {
                el.querySelector(".icon")?.classList.toggle("rotate-180");
                el.querySelector(".faq-content")?.classList.toggle("hidden");
            });
        });
    }, []);

    // Handle theme toggle (light/dark)
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            document.documentElement.classList.add('dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
    };

    return (
        <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="w-60 max-w-full px-4">
                        <a href="/" className="navbar-logo block w-full py-5">
                            <img src="/assets/images/logo/logo-white.svg" alt="logo" className="header-logo w-full" />
                        </a>
                    </div>

                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            {/* Navbar Toggler */}
                            <button
                                id="navbarToggler"
                                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                                onClick={handleNavbarToggle}>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                            </button>

                            {/* Navbar Links */}
                            <nav
                                id="navbarCollapse"
                                className={`absolute right-4 top-full ${isToggled ? 'block' : 'hidden'} w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6`}
                            >
                                <ul className="blcok lg:flex 2xl:ml-20">
                                    <li className="group relative">
                                        <a
                                            href="#home"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="#about"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="#pricing"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                                        >
                                            Pricing
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="#team"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                                        >
                                            Team
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="#contact"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="/blog"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li className="submenu-item group relative">
                                        <a
                                            href=""
                                            className="relative mx-8 flex items-center justify-between py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-8 lg:mr-0 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                                        >
                                            Pages
                                            <svg
                                                className="ml-2 fill-current"
                                                width="16"
                                                height="20"
                                                viewBox="0 0 16 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.99999 14.9C7.84999 14.9 7.72499 14.85 7.59999 14.75L1.84999 9.10005C1.62499 8.87505 1.62499 8.52505 1.84999 8.30005C2.07499 8.07505 2.42499 8.07505 2.64999 8.30005L7.99999 13.525L13.35 8.25005C13.575 8.02505 13.925 8.02505 14.15 8.25005C14.375 8.47505 14.375 8.82505 14.15 9.05005L8.39999 14.7C8.27499 14.825 8.14999 14.9 7.99999 14.9Z"/>
                                            </svg>
                                        </a>
                                        <div
                                            className="submenu relative left-0 top-full hidden w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full"
                                        >
                                            <a
                                                href="/about"
                                                className="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                                            >
                                                About Page
                                            </a>
                                            <a
                                                href="/pricing"
                                                className="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                                            >
                                                Pricing Page
                                            </a>
                                            <a
                                                href="/contact"
                                                className="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                                            >
                                                Contact Page
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        {/* Theme Switcher and Sign In / Sign Up */}
                        <div className="flex items-center justify-end pr-16 lg:pr-0">

                            {/* Theme Switcher */}
                            <label
                                htmlFor="themeSwitcher"
                                className="inline-flex cursor-pointer items-center"
                                aria-label="themeSwitcher"
                            >
                                <input
                                    type="checkbox"
                                    name="themeSwitcher"
                                    id="themeSwitcher"
                                    className="sr-only"
                                    checked={theme === 'dark'}
                                    onChange={toggleTheme}
                                />
                                <span className="block text-white dark:hidden">
                  <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M13.3125 1.50001C12.675 1.31251 12.0375 1.16251 11.3625 1.05001C10.875 0.975006 10.35 1.23751 10.1625 1.68751C9.93751 2.13751 10.05 2.70001 10.425 3.00001C13.0875 5.47501 14.0625 9.11251 12.975 12.525C11.775 16.3125 8.25001 18.975 4.16251 19.0875C3.63751 19.0875 3.22501 19.425 3.07501 19.9125C2.92501 20.4 3.15001 20.925 3.56251 21.1875C4.50001 21.75 5.43751 22.2 6.37501 22.5C7.46251 22.8375 8.58751 22.9875 9.71251 22.9875C11.625 22.9875 13.5 22.5 15.1875 21.5625C17.85 20.1 19.725 17.7375 20.55 14.8875C22.1625 9.26251 18.975 3.37501 13.3125 1.50001ZM18.9375 14.4C18.2625 16.8375 16.6125 18.825 14.4 20.0625C12.075 21.3375 9.41251 21.6 6.90001 20.85C6.63751 20.775 6.33751 20.6625 6.07501 20.55C10.05 19.7625 13.35 16.9125 14.5875 13.0125C15.675 9.56251 15 5.92501 12.7875 3.07501C17.5875 4.68751 20.2875 9.67501 18.9375 14.4Z"
                    />
                  </svg>
                </span>
                                <span className="hidden text-white dark:block">
                  <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2172_3070)">
                      <path
                          d="M12 6.89999C9.18752 6.89999 6.90002 9.18749 6.90002 12C6.90002 14.8125 9.18752 17.1 12 17.1C14.8125 17.1 17.1 14.8125 17.1 12C17.1 9.18749 14.8125 6.89999 12 6.89999ZM12 15.4125C10.125 15.4125 8.58752 13.875 8.58752 12C8.58752 10.125 10.125 8.58749 12 8.58749C13.875 8.58749 15.4125 10.125 15.4125 12C15.4125 13.875 13.875 15.4125 12 15.4125Z"
                      />
                      <path
                          d="M12 4.2375C12.45 4.2375 12.8625 3.8625 12.8625 3.375V1.5C12.8625 1.05 12.4875 0.637497 12 0.637497C11.55 0.637497 11.1375 1.0125 11.1375 1.5V3.4125C11.175 3.8625 11.55 4.2375 12 4.2375Z"
                      />
                      <path
                          d="M12 19.7625C11.55 19.7625 11.1375 20.1375 11.1375 20.625V22.5C11.1375 22.95 11.5125 23.3625 12 23.3625C12.45 23.3625 12.8625 22.9875 12.8625 22.5V20.5875C12.8625 20.1375 12.45 19.7625 12 19.7625Z"
                      />
                      <path
                          d="M18.1125 6.74999C18.3375 6.74999 18.5625 6.67499 18.7125 6.48749L19.9125 5.28749C20.25 4.94999 20.25 4.42499 19.9125 4.08749C19.575 3.74999 19.05 3.74999 18.7125 4.08749L17.5125 5.28749C17.175 5.62499 17.175 6.14999 17.5125 6.48749C17.6625 6.67499 17.8875 6.74999 18.1125 6.74999Z"
                      />
                      <path
                          d="M5.32501 17.5125L4.12501 18.675C3.78751 19.0125 3.78751 19.5375 4.12501 19.875C4.27501 20.025 4.50001 20.1375 4.72501 20.1375C4.95001 20.1375 5.17501 20.0625 5.32501 19.875L6.52501 18.675C6.86251 18.3375 6.86251 17.8125 6.52501 17.475C6.18751 17.175 5.62501 17.175 5.32501 17.5125Z"
                      />
                      <path
                          d="M22.5 11.175H20.5875C20.1375 11.175 19.725 11.55 19.725 12.0375C19.725 12.4875 20.1 12.9 20.5875 12.9H22.5C22.95 12.9 23.3625 12.525 23.3625 12.0375C23.3625 11.55 22.95 11.175 22.5 11.175Z"
                      />
                      <path
                          d="M4.23751 12C4.23751 11.55 3.86251 11.1375 3.37501 11.1375H1.50001C1.05001 11.1375 0.637512 11.5125 0.637512 12C0.637512 12.45 1.01251 12.8625 1.50001 12.8625H3.41251C3.86251 12.8625 4.23751 12.45 4.23751 12Z"
                      />
                      <path
                          d="M18.675 17.5125C18.3375 17.175 17.8125 17.175 17.475 17.5125C17.1375 17.85 17.1375 18.375 17.475 18.7125L18.675 19.9125C18.825 20.0625 19.05 20.175 19.275 20.175C19.5 20.175 19.725 20.1 19.875 19.9125C20.2125 19.575 20.2125 19.05 19.875 18.7125L18.675 17.5125Z"
                      />
                      <path
                          d="M5.32501 4.125C4.98751 3.7875 4.46251 3.7875 4.12501 4.125C3.78751 4.4625 3.78751 4.9875 4.12501 5.325L5.32501 6.525C5.47501 6.675 5.70001 6.7875 5.92501 6.7875C6.15001 6.7875 6.37501 6.7125 6.52501 6.525C6.86251 6.1875 6.86251 5.6625 6.52501 5.325L5.32501 4.125Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2172_3070">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                            </label>

                            {/* Sign In / Sign Up buttons */}
                            <div className="hidden sm:flex">
                                <a href="/signin" className="loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70">
                                    Sign In
                                </a>
                                <a
                                    href="/signup"
                                    className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                                >
                                    Sign Up
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;