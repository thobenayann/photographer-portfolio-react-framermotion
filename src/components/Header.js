import React, { useContext } from 'react';
// components
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';
// Nav
import { Link } from 'react-router-dom';
// cursor context
import { CursorContext } from '../context/CursorContext';

const Header = () => {
    const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
    return (
        <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
            <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
                {/* Logo */}
                <Link
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaverHandler}
                    to={'/'}
                    className='max-w-[200px]'
                >
                    <img src={Logo} alt='logo' />
                </Link>
                {/* nav - initially hidden - show on desktop mode */}
                <nav
                    className='hidden xl:flex gap-x-12 font-semibold'
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaverHandler}
                >
                    <Link
                        to={'/'}
                        className='text-[#696c6d] hover:text-primary transition'
                    >
                        Home
                    </Link>
                    <Link
                        to={'/about'}
                        className='text-[#696c6d] hover:text-primary transition'
                    >
                        About
                    </Link>
                    <Link
                        to={'/portfolio'}
                        className='text-[#696c6d] hover:text-primary transition'
                    >
                        Portfolio
                    </Link>
                    <Link
                        to={'/contact'}
                        className='text-[#696c6d] hover:text-primary transition'
                    >
                        Contact
                    </Link>
                </nav>
            </div>
            {/* socials */}
            <Socials />
            {/* MobileNav */}
            <MobileNav />
        </header>
    );
};

export default Header;
