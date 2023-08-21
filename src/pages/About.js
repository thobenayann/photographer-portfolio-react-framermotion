import React from 'react';
// images
import WomanImg from '../img/about/woman.png';
// link
import { Link } from 'react-router-dom';
// framer motion
import { motion } from 'framer-motion';
// transition
import { transition1 } from '../transitions';

const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='section'
        >
            <div className='container mx-auto h-full relative'>
                {/* text & img wrapper */}
                <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
                    {/* image */}
                    <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
                        <img src={WomanImg} alt='woman' />
                    </div>
                    {/* text */}
                    <motion.div
                        initial={{ opacity: 0, y: '-80%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-80%' }}
                        transition={transition1}
                        className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
                    >
                        <h1 className='h1'>About me</h1>
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
                        <Link to={'/portfolio'} className='btn'>
                            View my work
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
