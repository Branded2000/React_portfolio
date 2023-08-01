import './project_template.css'
import { motion } from "framer-motion"
import { FaRegWindowClose } from 'react-icons/fa';


const Project = (props) => {
    return (
        <>
            <motion.div className="project_container" style={{ backgroundColor: props.content.back_color }}
                key='project'
                initial={{ scale: 0, opacity: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                exit={{ scale: 0, opacity: 0 }}>
                <div className='project_background'>
                    <div className='exit_project' title='Close Project' onClick={() => props.set_display(false)}>
                        <FaRegWindowClose />
                    </div>
                    <div className='main_image img_'>
                        <img alt='img1' src={props.content.main_image}></img>
                    </div>
                    <div className='info_image'>
                        <div className='info' id='scroll'>
                            <h1>{props.content.title}</h1>
                            {props.content.body}
                        </div>
                        <div className='images'>
                            <div className='img_' ><img alt='img1' src={props.content.colums_images[0]}></img></div>
                            <div className='img_' ><img alt='img1' src={props.content.colums_images[1]}></img></div>
                            <div className='img_' ><img alt='img1' src={props.content.colums_images[2]}></img></div>
                            <div className='img_' ><img alt='img1' src={props.content.colums_images[3]}></img></div>
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