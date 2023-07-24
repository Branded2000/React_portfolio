import './line_pointer_animation.css';
import { motion } from "framer-motion";

function PointerLine() {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                    opacity: { delay, duration: 0.01 }
                }
            };
        }
    };

    return (<>
        <motion.svg className='svg_lines'
            width="130"
            height="100"
            viewBox="0 0 130 100"
            initial="hidden"
            animate="visible">
            <motion.line className='line_'
                x1="5"
                y1="95"
                x2="30"
                y2="40"
                stroke="#00cc88"
                variants={draw}
                custom={-1}
            />
            <motion.line className='line_'
                x1="30"
                y1="40"
                x2="129"
                y2="40"
                stroke="#00cc88"
                variants={draw}
                custom={0.5}
            />
            <motion.circle className='circle_'
                cx="5"
                cy="95"
                r="3"
                variants={draw}
                custom={-2}
            />
        </motion.svg></>);
}

export default PointerLine