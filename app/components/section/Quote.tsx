import React from 'react';

const Quote: React.FC = () => {
  return (
      <section className="relative overflow-hidden py-20 lg:py-[115px] bg-secondary">
          <div className="container mx-auto">
              <div className="relative overflow-hidden">
                  <div className="-mx-4 flex flex-wrap items-stretch">
                      <div className="w-full px-4">
                          <div className="mx-auto max-w-[570px] text-center">
                              <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                                  <span>Et à l'avenir ?</span>
                              </h2>
                              <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                                  J'aimerai donner accès à l'atelier aux plus
                                  intrépides souhaitant apprendre, comprendre et partager en devenant acteurs principaux de la maintenance des joyaux qu'ils chérissent.
                              </p>
                              {/*<a href="" className="inline-block rounded-md border border-transparent bg-green px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]">*/}
                              {/*    Intéressé ?*/}
                              {/*</a>*/}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Quote;
