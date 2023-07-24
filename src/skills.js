import './skills.css';
import { useState, useEffect } from 'react';
import PointerLine from './line_pointer_animation';
import Progressbar from './progressbar';
import { motion, AnimatePresence } from 'framer-motion';

function Skills() {

    const variants = {
        doNothig: { y: 0 },
        jump: {
            y: [0, -15, 0],
            rotateY: [0, 180, 0],
            transition: {
                ease: "easeIn",
                duration: 1,
                rotateY: { duration: 1 }
            },
        }
    };

    const [randNum, setNumber] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setNumber(Math.floor(Math.random() * 9));
        },
            5000
        );
        return () => {
            clearInterval(interval);
        };
    }, [randNum]);

    const [see_all, set_see_all] = useState(false);

    const [c_icon, set_c_icon] = useState(false);
    const [c_plus_plus_icon, set_c_plus_plus_icon] = useState(false);
    const [python_icon, set_python_icon] = useState(false);
    const [js_icon, set_js_icon] = useState(false);
    const [java_icon, set_java_icon] = useState(false);
    const [sql_icon, set_sql_icon] = useState(false);
    const [html_icon, set_html_icon] = useState(false);
    const [css_icon, set_css_icon] = useState(false);
    const [git_icon, set_git_icon] = useState(false);

    const [show_titles, set_show_titles] = useState(false);
    const show_all_titles = show_titles ? "show_titles" : "";

    const see_all_icons = () => {
        if (see_all) {
            set_show_titles(!show_titles);
            set_see_all(!see_all);
            set_c_icon(false);
            set_c_plus_plus_icon(false);
            set_python_icon(false);
            set_js_icon(false);
            set_java_icon(false);
            set_sql_icon(false);
            set_html_icon(false);
            set_css_icon(false);
            set_git_icon(false);
        }
        else {
            set_show_titles(!show_titles);
            set_see_all(!see_all);
            set_c_icon(true);
            set_c_plus_plus_icon(true);
            set_python_icon(true);
            set_js_icon(true);
            set_java_icon(true);
            set_sql_icon(true);
            set_html_icon(true);
            set_css_icon(true);
            set_git_icon(true);
        }
    }

    const onMouseEnter = (id) => {
        if (!see_all) {

            switch (id) {
                case 0:
                    set_c_icon(true);
                    break;
                case 1:
                    set_c_plus_plus_icon(true);
                    break;
                case 2:
                    set_python_icon(true);
                    break;
                case 3:
                    set_js_icon(true);
                    break;
                case 4:
                    set_java_icon(true);
                    break;
                case 5:
                    set_sql_icon(true);
                    break;
                case 6:
                    set_html_icon(true);
                    break;
                case 7:
                    set_css_icon(true);
                    break;
                case 8:
                    set_git_icon(true);
                    break;
                default:
            }
        }
    }

    const onMouseLeave = (id) => {
        if (!see_all) {
            switch (id) {
                case 0:
                    set_c_icon(false);
                    break;
                case 1:
                    set_c_plus_plus_icon(false);
                    break;
                case 2:
                    set_python_icon(false);
                    break;
                case 3:
                    set_js_icon(false);
                    break;
                case 4:
                    set_java_icon(false);
                    break;
                case 5:
                    set_sql_icon(false);
                    break;
                case 6:
                    set_html_icon(false);
                    break;
                case 7:
                    set_css_icon(false);
                    break;
                case 8:
                    set_git_icon(false);
                    break;
                default:
            }
        }
    }

    return (
        <>
            <div className='skills' id="skills">
                {/* <div className='separator'></div> */}

                <div className='all_icons'>
                    <button className='see_all_icon_names_states' onClick={see_all_icons}> See All</button>
                    <div className='icon_column'>
                        <div className={`icon_container c c_1 ${show_all_titles}`} onMouseEnter={() => onMouseEnter(0)} onMouseLeave={() => onMouseLeave(0)}>
                            {c_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(c_icon === false && randNum === 0) ? 'jump' : 'doNothing'}
                                    id="icon_jump_c"
                                    className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="32.18585611720149 20.47 223.6851360941233 247.05999999999997" width="2113" height="2500"><path d="M252.71 93.61a21.67 21.67 0 0 0-2.65-10.87 20.74 20.74 0 0 0-7.87-7.67Q198.77 50 155.32 25c-7.8-4.51-15.36-4.35-23.11.23C120.69 32 63 65.09 45.81 75.06c-7.08 4.1-10.52 10.38-10.52 18.54v100.8a21.77 21.77 0 0 0 2.55 10.66 20.63 20.63 0 0 0 8 7.88c17.19 10 74.89 43.05 86.41 49.85 7.75 4.58 15.31 4.74 23.12.23q43.41-25.08 86.87-50.09a20.63 20.63 0 0 0 8-7.88 21.77 21.77 0 0 0 2.55-10.66V93.61z" fill='#A8A9AD' /><path d="M252.73 194.4a21.72 21.72 0 0 1-2.55 10.66 18.58 18.58 0 0 1-1.45 2.24L144 144l98.19-68.93a20.72 20.72 0 0 1 7.86 7.67 21.57 21.57 0 0 1 2.66 10.87c.02 33.6.02 100.79.02 100.79z" fill="#CCCCCC" /><path d="M250.05 82.74L37.81 205.06a21.75 21.75 0 0 1-2.53-10.65V93.6c0-8.16 3.45-14.44 10.52-18.54C63 65.09 120.69 32 132.22 25.21c7.73-4.58 15.3-4.74 23.1-.23q43.41 25.08 86.87 50.09a20.72 20.72 0 0 1 7.86 7.67z" fill='#808080' /><path d="M148.2 184.72a39.91 39.91 0 0 1-35-20.63q-.53-.94-1-1.92A39.94 39.94 0 0 1 179 119.4c.53.64 1 1.31 1.53 2 .24.33.48.66.7 1l35.07-20.2q-1.28-2.06-2.68-4c-.49-.69-1-1.35-1.48-2A79.9 79.9 0 0 0 78 181.92c.34.64.69 1.27 1 1.9a79.91 79.91 0 0 0 136.86 3.62l-34.29-20.73a39.88 39.88 0 0 1-33.37 18.01z" fill="#000" /></motion.svg>
                            </AnimatePresence>
                            {c_icon && <Progressbar percentage="88%" percentage_val={88} color="#A8A9AD" />}
                        </div>
                        <div className={`icon_container c_plus_plus ${show_all_titles}`} onMouseEnter={() => onMouseEnter(1)} onMouseLeave={() => onMouseLeave(1)}>
                            {c_plus_plus_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(c_plus_plus_icon === false && randNum === 1) ? 'jump' : 'doNothing'}
                                    id="icon_jump_c_plus_plus" className='icon' xmlns="http://www.w3.org/2000/svg" width="2222" height="2500" viewBox="0 0 256 288" preserveAspectRatio="xMinYMin meet"><path d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.101-27.163.269C100.395 12.39 32.59 51.237 12.385 62.94 4.064 67.757.015 75.129.013 84.711 0 124.166.013 163.62 0 203.076c.002 4.724.991 8.909 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#659AD2" /><path d="M128.182 143.509L2.988 215.593c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252l-124.413-72.074" fill="#004482" /><path d="M91.101 164.861c7.285 12.718 20.98 21.296 36.69 21.296 15.807 0 29.58-8.687 36.828-21.541l-36.437-21.107-37.081 21.352" fill="#004482" /><path d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761l-124.263 71.55 124.413 72.074c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#00599C" /><path d="M248.728 148.661h-9.722v9.724h-9.724v-9.724h-9.721v-9.721h9.721v-9.722h9.724v9.722h9.722v9.721M213.253 148.661h-9.721v9.724h-9.722v-9.724h-9.722v-9.721h9.722v-9.722h9.722v9.722h9.721v9.721" fill="#000" /><path d="M164.619 164.616c-7.248 12.854-21.021 21.541-36.828 21.541-15.71 0-29.405-8.578-36.69-21.296a42.062 42.062 0 0 1-5.574-20.968c0-23.341 18.923-42.263 42.264-42.263 15.609 0 29.232 8.471 36.553 21.059l36.941-21.272c-14.683-25.346-42.096-42.398-73.494-42.398-46.876 0-84.875 38-84.875 84.874 0 15.378 4.091 29.799 11.241 42.238 14.646 25.48 42.137 42.637 73.634 42.637 31.555 0 59.089-17.226 73.714-42.781l-36.886-21.371" fill="#000" /></motion.svg>
                            </AnimatePresence>
                            {c_plus_plus_icon && <Progressbar percentage="82%" percentage_val={82} color="#004482" />}
                        </div>
                        <div className={`icon_container python c_3 ${show_all_titles}`} onMouseEnter={() => onMouseEnter(2)} onMouseLeave={() => onMouseLeave(2)}>
                            {python_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(python_icon === false && randNum === 2) ? 'jump' : 'doNothing'}
                                    id="icon_jump_python" className='icon' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><defs><linearGradient id="A" x1="811.527" y1="574.895" x2="665.255" y2="573.732" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#366a96" /><stop offset="1" stop-color="#3679b0" /></linearGradient><linearGradient id="B" x1="862.824" y1="642.176" x2="573.276" y2="642.176" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffc836" /><stop offset="1" stop-color="#ffe873" /></linearGradient></defs><g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)"><path d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z" fill="url(#A)" /><path d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z" fill="url(#B)" /><path d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z" fill="#000" /></g></motion.svg>
                            </AnimatePresence>
                            {python_icon && <Progressbar percentage="92%" percentage_val={92} color="#ffe873" />}
                        </div>
                    </div>
                    <div className='icon_column'>
                        <div className={`icon_container javascript c_1 ${show_all_titles}`} onMouseEnter={() => onMouseEnter(3)} onMouseLeave={() => onMouseLeave(3)}>
                            {js_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(js_icon === false && randNum === 3) ? 'jump' : 'doNothing'}
                                    id="icon_jump_js" className='icon' xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 256 256" preserveAspectRatio="xMinYMin meet"><path d="M0 0h256v256H0V0z" fill="#F7DF1E" /><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" fill='#000' /></motion.svg>
                            </AnimatePresence>
                            {js_icon && <Progressbar percentage="90%" percentage_val={90} color="#F7DF1E" />}
                        </div>
                        <div className={`icon_container java ${show_all_titles}`} onMouseEnter={() => onMouseEnter(4)} onMouseLeave={() => onMouseLeave(4)}>
                            {java_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(java_icon === false && randNum === 4) ? 'jump' : 'doNothing'}
                                    id="icon_jump_java" className='icon' xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none"> <path d="M16.0497 8.44062C22.6378 3.32607 19.2566 0 19.2566 0C19.7598 5.28738 13.813 6.53583 12.2189 10.1692C11.1312 12.6485 12.9638 14.8193 16.0475 17.5554C15.7749 16.9494 15.3544 16.3606 14.9288 15.7645C13.4769 13.7313 11.9645 11.6132 16.0497 8.44062Z" fill="#E76F00" /> <path d="M17.1015 18.677C17.1015 18.677 19.0835 17.0779 17.5139 15.3008C12.1931 9.27186 23.3333 6.53583 23.3333 6.53583C16.5317 9.8125 17.5471 11.7574 19.2567 14.1202C21.0871 16.6538 17.1015 18.677 17.1015 18.677Z" fill="#E76F00" /> <path d="M22.937 23.4456C29.0423 20.3258 26.2195 17.3278 24.2492 17.7317C23.7662 17.8305 23.5509 17.9162 23.5509 17.9162C23.5509 17.9162 23.7302 17.64 24.0726 17.5204C27.9705 16.1729 30.9682 21.4949 22.8143 23.6028C22.8143 23.6029 22.9088 23.5198 22.937 23.4456Z" fill="#5382A1" /> <path d="M10.233 19.4969C6.41312 18.9953 12.3275 17.6139 12.3275 17.6139C12.3275 17.6139 10.0307 17.4616 7.20592 18.8043C3.86577 20.3932 15.4681 21.1158 21.474 19.5625C22.0984 19.1432 22.9614 18.7798 22.9614 18.7798C22.9614 18.7798 20.5037 19.2114 18.0561 19.4145C15.0612 19.6612 11.8459 19.7093 10.233 19.4969Z" fill="#5382A1" /> <path d="M11.6864 22.4758C9.55624 22.2592 10.951 21.2439 10.951 21.2439C5.43898 23.0429 14.0178 25.083 21.7199 22.8682C20.9012 22.5844 20.3806 22.0653 20.3806 22.0653C16.6163 22.7781 14.441 22.7553 11.6864 22.4758Z" fill="#5382A1" /> <path d="M12.6145 25.6991C10.486 25.4585 11.7295 24.7474 11.7295 24.7474C6.72594 26.1222 14.7729 28.9625 21.1433 26.2777C20.0999 25.8787 19.3528 25.4181 19.3528 25.4181C16.5111 25.9469 15.1931 25.9884 12.6145 25.6991Z" fill="#5382A1" /> <path d="M25.9387 27.3388C25.9387 27.3388 26.8589 28.0844 24.9252 28.6612C21.2481 29.7566 9.62093 30.0874 6.39094 28.7049C5.22984 28.2082 7.40723 27.5189 8.09215 27.3742C8.80646 27.2219 9.21466 27.2503 9.21466 27.2503C7.9234 26.3558 0.868489 29.0067 5.63111 29.7659C18.6195 31.8372 29.3077 28.8331 25.9387 27.3388Z" fill="#5382A1" /> <path d="M28 28.9679C27.7869 31.6947 18.7877 32.2683 12.9274 31.8994C9.10432 31.6583 8.33812 31.0558 8.32691 31.047C11.9859 31.6402 18.1549 31.7482 23.1568 30.8225C27.5903 30.0016 28 28.9679 28 28.9679Z" fill="#5382A1" /> </motion.svg>
                            </AnimatePresence>
                            {java_icon && <Progressbar percentage="70%" percentage_val={70} color="#E76F00" />}
                        </div>
                        <div className={`icon_container sql c_3 ${show_all_titles}`} onMouseEnter={() => onMouseEnter(5)} onMouseLeave={() => onMouseLeave(5)}>
                            {sql_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(sql_icon === false && randNum === 5) ? 'jump' : 'doNothing'}
                                    id="icon_jump_sql" className='icon' xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="-8.78 0 70 70">
                                    <path d="m 852.97077,1013.9363 c -6.55238,-0.4723 -13.02857,-2.1216 -17.00034,-4.3296 -2.26232,-1.2576 -3.98589,-2.8032 -4.66223,-4.1807 l -0.4024,-0.8196 0,-25.70807 0,-25.7081 0.31843,-0.6465 c 1.42297,-2.889 5.96432,-5.4935 12.30378,-7.0562 2.15195,-0.5305 5.2586,-1.0588 7.79304,-1.3252 2.58797,-0.2721 9.44765,-0.2307 12.02919,0.073 6.86123,0.8061 12.69967,2.6108 16.29768,5.0377 1.38756,0.9359 2.81137,2.4334 3.29371,3.4642 l 0.41358,0.8838 -0.0354,25.6303 -0.0354,25.63047 -0.33195,0.6744 c -0.18257,0.3709 -0.73406,1.1007 -1.22553,1.6216 -2.99181,3.1715 -9.40919,5.5176 -17.8267,6.5172 -1.71567,0.2038 -9.16916,0.3686 -10.92937,0.2417 z m 12.07501,-22.02839 c -0.0252,-0.0657 -1.00472,-0.93831 -2.17671,-1.93922 -1.17199,-1.00091 -2.18138,-1.86687 -2.24309,-1.92436 -0.0617,-0.0575 0.15481,-0.26106 0.48117,-0.45237 0.32635,-0.19131 0.95163,-0.7235 1.3895,-1.18265 1.2805,-1.34272 1.88466,-3.00131 1.88466,-5.17388 0,-2.1388 -0.65162,-3.8645 -1.95671,-5.1818 -1.31533,-1.3278 -2.82554,-1.8983 -5.02486,-1.8983 -3.39007,0 -5.99368,1.9781 -6.82468,5.1851 -0.28586,1.1031 -0.28432,3.33211 0.003,4.31023 0.74941,2.55136 2.79044,4.40434 5.33062,4.83946 0.8596,0.14724 0.97605,0.21071 1.5621,0.85144 0.34829,0.38078 1.06301,1.14085 1.58827,1.68904 l 0.95501,0.9967 2.53878,0 c 1.39633,0 2.51816,-0.0537 2.49296,-0.11939 z m -8.70653,-7.10848 c -0.61119,-0.31868 -0.84225,-0.56599 -1.19079,-1.27453 -0.26919,-0.54724 -0.31522,-0.85851 -0.31824,-2.15197 -0.003,-1.3143 0.0388,-1.5983 0.31987,-2.169 0.45985,-0.9339 1.09355,-1.376 2.07384,-1.4469 1.36454,-0.099 2.15217,0.5707 2.56498,2.1801 0.50612,1.97321 -0.0504,4.07107 -1.26471,4.76729 -0.63707,0.36527 -1.58737,0.40659 -2.18495,0.095 z m -11.25315,3.66269 c 2.66179,-0.5048 4.1728,-2.0528 4.1728,-4.27495 0,-1.97137 -0.97548,-3.12004 -3.6716,-4.32364 -1.54338,-0.689 -2.10241,-1.1215 -2.10241,-1.6268 0,-0.4188 0.53052,-0.8777 1.14813,-0.993 0.60302,-0.1126 2.20237,0.1652 3.14683,0.5467 l 0.79167,0.3198 0,-1.7524 0,-1.7525 -0.85923,-0.1906 c -0.53103,-0.1178 -1.64689,-0.1885 -2.92137,-0.1849 -1.80528,0 -2.15881,0.044 -2.83818,0.3138 -1.98445,0.7878 -2.92613,2.1298 -2.91107,4.1485 0.0141,1.8898 1.01108,3.06864 3.49227,4.12912 1.46399,0.62572 2.05076,1.10218 2.05076,1.66522 0,1.1965 -1.99362,1.34375 -4.10437,0.30315 -0.57805,-0.28498 -1.09739,-0.54137 -1.1541,-0.56976 -0.0567,-0.0284 -0.10311,0.79023 -0.10311,1.81917 0,1.86239 0.002,1.87137 0.33919,1.99974 1.26979,0.48278 4.07626,0.69787 5.52379,0.42335 z m 30.4308,-1.72766 0,-1.58098 -2.40584,0 -2.40583,0 0,-5.43035 0,-5.4303 -2.13089,0 -2.13088,0 0,7.0113 0,7.01131 4.53672,0 4.53672,0 0,-1.58098 z m -14.84745,-27.70503 c 4.23447,-0.2937 7.4086,-0.8482 10.20178,-1.7821 2.78264,-0.9304 4.42643,-2.0562 4.79413,-3.2834 0.14166,-0.4729 0.13146,-0.6523 -0.0665,-1.1708 -0.88775,-2.3245 -5.84694,-4.1104 -13.42493,-4.8345 -3.24154,-0.3098 -9.13671,-0.2094 -12.22745,0.2081 -4.71604,0.6372 -8.54333,1.8208 -10.2451,3.1683 -3.44251,2.726 0.19793,5.7242 8.66397,7.1354 3.67084,0.6119 8.42674,0.828 12.30414,0.559 z" fill="#00bcf2" transform="translate(-830.906 -943.981)" />
                                </motion.svg>
                            </AnimatePresence>
                            {sql_icon && <Progressbar percentage="86%" percentage_val={86} color="#00bcf2" />}
                        </div>
                    </div>
                    <div className='icon_column'>
                        <div className={`icon_container html_ c_1 ${show_all_titles}`} onMouseEnter={() => onMouseEnter(6)} onMouseLeave={() => onMouseLeave(6)}>
                            {html_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(html_icon === false && randNum === 6) ? 'jump' : 'doNothing'}
                                    id="icon_jump_html" className='icon' xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" /> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" /> <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="black" /></motion.svg>
                            </AnimatePresence>
                            {html_icon && <Progressbar percentage="97%" percentage_val={97} color="#E44D26" />}
                        </div>
                        <div className={`icon_container css_ ${show_all_titles}`} onMouseEnter={() => onMouseEnter(7)} onMouseLeave={() => onMouseLeave(7)}>
                            {css_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(css_icon === false && randNum === 7) ? 'jump' : 'doNothing'}
                                    id="icon_jump_css" className='icon' xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" /> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" /> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="black" /> </motion.svg>
                            </AnimatePresence>
                            {css_icon && <Progressbar percentage="95%" percentage_val={95} color="#1172B8" />}
                        </div>
                        <div className={`icon_container git_ c_3 ${show_all_titles}`} onMouseEnter={() => onMouseEnter(8)} onMouseLeave={() => onMouseLeave(8)}>
                            {git_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(git_icon === false && randNum === 8) ? 'jump' : 'doNothing'}
                                    id="icon_jump_git" className='icon' xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none"><path d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z" fill="#EE513B" /><path d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z" fill="black" /></motion.svg>
                            </AnimatePresence>
                            {git_icon && <Progressbar percentage="83%" percentage_val={83} color="#EE513B" />}
                        </div>
                    </div>
                </div>
                <div className='expertice'>
                    <div className='skills_and_expertice shine_title'>Skills and Expertice</div>
                    <div className='expertice_paragraph'>
                        <h2 className='expertice_header'>Expertice</h2>
                        <p className='paragraph'>something...</p>
                    </div>
                </div>
            </div>
        </>);
}

export default Skills;