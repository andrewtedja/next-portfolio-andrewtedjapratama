import { XMarkIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useRef } from 'react'

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({nav, closeNav}: Props) => {

    const navAnimation = nav?'translate-x-0':'translate-x-[100%]';
    const overlayVisibility = nav ? 'block' : 'hidden';
    const navRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node) &&
            overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
            closeNav();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <div
                ref={overlayRef}
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 ${overlayVisibility} z-[9999]`}
                onClick={closeNav}
            ></div>
            <div
                ref={navRef}
                className={`fixed top-0 right-0 h-[100vh] w-[280px] z-[10000] bg-[#FCFCFC] shadow-left transform transition-transform duration-300 ${navAnimation}`}
            >
                <div className="h-[100vh] flex flex-col items-start ml-5">
                    <div className='nav-link-mobile mt-[5rem]'>Home</div>
                    <div className='nav-link-mobile'>Projects</div>
                    <div className='nav-link-mobile'>Skills</div>
                    <div className='nav-link-mobile'>Resume</div>
                </div>
                <div onClick={closeNav} className="absolute cursor-pointer top-[1.5rem] left-[1rem] w-[2rem] h-[2rem] text-black">
                    <XMarkIcon className="w-full h-full" />
                </div>
            </div>
        </>
    )
}

export default MobileNav