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
                    <div className='main_image'>

                    </div>
                    <div className='info_image'>
                        <div className='info'>
                            <h1>{props.content.title}</h1>
                            <p>{props.content.body}</p>
                        </div>
                        <div className='images'>
                            <div className='img1'></div>
                            <div className='img2'></div>
                            <div className='img3'></div>
                            <div className='img4'></div>
                        </div>
                    </div>
                    <div className="tools_used">
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Project;