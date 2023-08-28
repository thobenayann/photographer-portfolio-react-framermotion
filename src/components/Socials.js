import React, { useContext } from 'react';
// icons
import {
    ImFacebook,
    ImTwitter,
    ImPinterest,
    ImInstagram,
    ImYoutube,
} from 'react-icons/im';
// cursor context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
    const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
    return (
        <div
            className='hidden xl:flex ml-24'
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
        >
            <ul className='flex gap-x-4'>
                <li>
                    <a
                        href='http://www.facebook.com'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <ImFacebook />
                    </a>
                </li>
                <li>
                    <a
                        href='http://www.twitter.com'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <ImTwitter />
                    </a>
                </li>
                <li>
                    <a
                        href='http://www.pinterest.com'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <ImPinterest />
                    </a>
                </li>
                <li>
                    <a
                        href='http://www.instagram.com'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <ImInstagram />
                    </a>
                </li>
                <li>
                    <a
                        href='http://www.youtube.com'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <ImYoutube />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Socials;
