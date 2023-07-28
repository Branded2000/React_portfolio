import './about.css'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

function About() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const activate_ref = useRef(null);
    const animation_counter = useRef(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (animation_counter.current === false) {
                setIsIntersecting(entry.isIntersecting);
                if (entry.isIntersecting) {
                    animation_counter.current = true;
                }
            }
        });
        // console.log(isIntersecting)
        observer.observe(activate_ref.current);
        return () => observer.disconnect();
    }, [isIntersecting, animation_counter]);

    // const animate_paragraph = isIntersecting ? "" : "paragraph_animation";

    const variants = {
        doNothig: { y: 0 },
        grow_and_move_up: {
            scale: [0, 1],
            y: [(window.innerHeight * .7) / 2, 0.0],
            transition: {
                scale: {
                    ease: "easeInOut",
                    duration: 2,
                },
                y: {
                    ease: "easeInOut",
                    duration: 1,
                    delay: 2,
                }
            },
        },
        grow_and_move_down: {
            scale: [0, 1],
            y: [-((window.innerHeight * .7) / 2), 0],
            transition: {
                scale: {
                    ease: "easeInOut",
                    duration: 2,
                },
                y: {
                    ease: "easeInOut",
                    duration: 1,
                    delay: 2,
                }
            },
        }
    };

    return (
        <>
            <section className='about' id="about">
                <div className='about_title shine_title'>About Me</div>
                <div className='about_paragraph_container' ref={activate_ref}>
                    {isIntersecting &&
                        <>
                            <AnimatePresence>
                                <motion.div
                                    variants={variants}
                                    animate={'grow_and_move_up'}
                                    key='baropeningup'
                                    className='bar_open_up'></motion.div>
                                <div className='about_paragraph'></div>
                                <motion.div
                                    variants={variants}
                                    animate={'grow_and_move_down'}
                                    key='baropeningdown'
                                    className='bar_open_down'></motion.div>


                                <motion.p
                                    key='paragraph_anim'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 4, ease: "easeOut", delay: 3 }}
                                    className={`about_paragraph`}> Something...</motion.p>
                            </AnimatePresence>
                        </>}
                </div>
            </section>
        </>);
}

export default About;