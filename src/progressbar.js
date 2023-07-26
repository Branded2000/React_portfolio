import { useEffect, useRef } from 'react';
import './progressbar.css';
import { motion, AnimatePresence, animate } from 'framer-motion';

function Progressbar({ percentage, percentage_val, color }) {
    const progressRef = useRef(null);
    useEffect(() => {
        if (progressRef.current != null) {
            animate(0, percentage_val, {
                duration: 2,
                onUpdate: (cv) => {
                    if (progressRef.current != null) { progressRef.current.textContent = cv.toFixed(0) }
                }
            });
        }
    }, [percentage_val]);
    return (<>
        <AnimatePresence>
            <div className='progressbar_container' title='Expertice Percentage'>
                <div className='percentage'>
                    <div ref={progressRef}>0</div>
                    <div>%</div>
                </div>
                <motion.div className='bar' style={{ backgroundColor: color }}
                    key='bar'
                    initial={{ width: "0%" }}
                    animate={{ width: percentage }}
                    transition={{ duration: 2, ease: "easeOut" }}>
                </motion.div>
            </div>
        </AnimatePresence>
    </>
    );
}

export default Progressbar;