import React from "react";

const Services: React.FC = () => {
    return (
        <section id="services" className="pb-8 pt-20 bg-white dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                Services
                            </span>
                            <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                                Accompagnement client
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                De l'achat à la restauration, jusqu'à la première balade.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                        <div className="wow fadeInUp group mb-12" data-wow-delay=".1s">
                            <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary text-white">
                                <span
                                    className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" width="37" height="37">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                                    />
                                </svg>
                            </div>
                            <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                                Entretien et Réparations Mécaniques
                            </h4>
                            <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                                J'offre l’entretien régulier et les réparations mécaniques, y compris les systèmes
                                électriques,
                                pour garantir la fiabilité et la sécurité de votre véhicule.
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                        <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
                            <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary text-white">
                                <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" width="37" height="37">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                </svg>

                            </div>
                            <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                                Restauration et Réfection de Moteurs et Boîtes de Vitesses
                            </h4>
                            <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                                Je me suis spécialisé dans la restauration complète, la réfection et la reconstruction
                                de moteurs et boîtes de vitesses, en respectant les spécifications d’origine des
                                véhicules classiques.
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                        <div className="wow fadeInUp group mb-12" data-wow-delay=".2s">
                            <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary text-white">
                                <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" width="37" height="37">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/>
                                </svg>
                            </div>
                            <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                                Réglages et Optimisation des Performances
                            </h4>
                            <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                                J'effectue des réglages minutieux de l’allumage, de la carburation et de l’injection
                                pour optimiser les performances de votre véhicule, assurant une conduite fluide et
                                efficace.
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                        <div className="wow fadeInUp group mb-12" data-wow-delay=".25s">
                            <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary text-white">
                                <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor"
                                     width="37"
                                     height="37">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
                                </svg>

                            </div>
                            <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                                Assistance et Expertise pour Clubs et Professionnels
                            </h4>
                            <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                                J'offre une assistance experte aux clubs automobiles et aux professionnels, avec des
                                déplacements sur site pour partager notre savoir-faire sur des technologies classiques
                                souvent méconnues des ateliers modernes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
