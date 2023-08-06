import './project_template.css'
import { motion, AnimatePresence } from "framer-motion"
import { FaRegWindowClose } from 'react-icons/fa';
import { useState } from 'react';


const Project = (props) => {
    const [img1, set_img1] = useState(false);
    const [img2, set_img2] = useState(false);
    const [img3, set_img3] = useState(false);
    const [img4, set_img4] = useState(false);
    const [main_img, set_main_img] = useState(false);

    return (
        <>
            <motion.div className="project_container"
                key='project'
                initial={{ scale: 0, opacity: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                exit={{ scale: 0, opacity: 0 }}>
                <AnimatePresence>
                    <motion.div className='image_zoom'
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        exit={{ scale: 0, opacity: 0 }}>
                        {main_img && <div className='zoom_image'>
                            <img alt='img1' src={props.content.main_image}></img>
                            <div className='exit_img' title='Close Image' onClick={() => set_main_img(false)}>
                                <FaRegWindowClose />
                            </div>
                        </div>}
                        {img1 && <div className='zoom_image'>
                            <img alt='img1' src={props.content.colums_images[0]}></img>
                            <div className='exit_img' title='Close Image' onClick={() => set_img1(false)}>
                                <FaRegWindowClose />
                            </div>
                        </div>}
                        {img2 && <div className='zoom_image'>
                            <img alt='img2' src={props.content.colums_images[1]}></img>
                            <div className='exit_img' title='Close Image' onClick={() => set_img2(false)}>
                                <FaRegWindowClose />
                            </div>
                        </div>}
                        {img3 && <div className='zoom_image'>
                            <img alt='img3' src={props.content.colums_images[2]}></img>
                            <div className='exit_img' title='Close Image' onClick={() => set_img3(false)}>
                                <FaRegWindowClose />
                            </div>
                        </div>}
                        {img4 && <div className='zoom_image'>
                            <img alt='img4' src={props.content.colums_images[3]}></img>
                            <div className='exit_img' title='Close Image' onClick={() => set_img4(false)}>
                                <FaRegWindowClose />
                            </div>
                        </div>}
                    </motion.div>
                </AnimatePresence>
                <div className='project_background' style={{ backgroundColor: props.content.back_color }}>
                    <div className='exit_project' title='Close Project' onClick={() => props.set_display(false)}>
                        <FaRegWindowClose />
                    </div>
                    <div className='main_image img_' onClick={() => set_main_img(true)}>
                        <img alt='main_image' src={props.content.main_image}></img>
                    </div>
                    <div className='info_image'>
                        <div className='info' id='scroll'>
                            <h1>{props.content.title}</h1>
                            {props.content.body}
                        </div>
                        <div className='images'>
                            <div className='img_' onClick={() => set_img1(true)} ><img alt='img1' src={props.content.colums_images[0]}></img></div>
                            <div className='img_' onClick={() => set_img2(true)}><img alt='img2' src={props.content.colums_images[1]}></img></div>
                            <div className='img_' onClick={() => set_img3(true)}><img alt='img3' src={props.content.colums_images[2]}></img></div>
                            <div className='img_' onClick={() => set_img4(true)}><img alt='img4' src={props.content.colums_images[3]}></img></div>
                        </div>
                    </div>
                    <div className="tools_used">
                        <div className='tools'>Tools used: {props.content.tools}</div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Project;