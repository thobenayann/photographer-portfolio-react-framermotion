import React from 'react';
// images
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
// Link
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <section className='section'>
            <div className='container mx-auto h-full relative'>
                <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
                    {/* text */}
                    <div className='flex flex-col lg:items-start'>
                        <h1 className='h1'>Portfolio</h1>
                        <p className='mb-12 max-w-sm'>
                            Sunt amet id exercitation anim. Velit exercitation
                            <b> incididunt consectetur</b> ad id esse velit
                            ipsum elit nostrud labore id magna et. Id duis nisi
                            amet labore occaecat do aliquip quis mollit.
                            <br />
                            <br />
                            Sunt amet id exercitation anim. Velit exercitation
                            incididunt consectetur ad id esse velit ipsum elit
                            nostrud labore id magna et. Id duis nisi amet labore
                            occaecat do aliquip quis mollit.
                        </p>
                        <Link to={'/contact'} className='btn mb-[30px]'>
                            Hire me
                        </Link>
                    </div>
                    {/* image grid */}
                    <div className='grid grid-cols-2 lg:gap-2'>
                        {/* image */}
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                            <img
                                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                                src={Image1}
                                alt='image 1'
                            />
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                            <img
                                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                                src={Image2}
                                alt='image 2'
                            />
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                            <img
                                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                                src={Image3}
                                alt='image 3'
                            />
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                            <img
                                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                                src={Image4}
                                alt='image 4'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
