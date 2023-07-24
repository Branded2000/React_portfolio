import './nav.css';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

function NavBar() {
    const [showNav, setShowNav] = useState(false);
    const onClick = () => {
        setShowNav(!showNav);
    }

    return (
        <>
            <div className='showNav_button'>
                {showNav && <div onClick={onClick} title='Toggle Navigation Bar' className='circle'><FaAngleUp /></div>}
                {!showNav && <div onClick={onClick} title='Toggle Navigation Bar' className='circle'><FaAngleDown /></div>}
                {!showNav && <div className='rings'></div>}
            </div>
            <AnimatePresence>
                {showNav && <motion.nav className='nav'
                    key='nav'
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    exit={{ y: '-100%', opacity: 0 }}>
                    <a className="nav_logo_link" href="https://www.youtube.com/watch?v=lvwZQTB4iv4" target="_blank" rel="noopener noreferrer">
                        <div className="nav_logo">
                            <div className="back_color_capy shine_capy"></div>
                            <div className="back_white_shade"></div>
                            <img className='capy_logo' src='images/Capy_logo.png' alt="logo" />
                        </div>
                    </a>
                    <ul>
                        <li><a href="#main_page">Home</a></li>
                        <li><a href="#projects_slider">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                    <a className="CustomButton" href="#contact">
                        <button>Contact</button>
                    </a>
                </motion.nav>}
            </AnimatePresence>
        </>
    );
}

export default NavBar;