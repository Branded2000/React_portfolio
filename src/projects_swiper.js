import './projects_swiper.css';
import Project from './project_template';

import { useState } from 'react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { AnimatePresence } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

function ProjectSwiper() {
    //Activation for displaying project content on project template
    const [project0_display, setProject0_display] = useState(false);
    const [project1_display, setProject1_display] = useState(false);
    const [project2_display, setProject2_display] = useState(false);
    const [project3_display, setProject3_display] = useState(false);
    const [project4_display, setProject4_display] = useState(false);

    //Initialize manual avtivation for the animation of the active slide based on the index
    const [animation, setAnimation] = useState(0);
    const scaleX_trigger_slide0 = animation === 0 ? "manual_trigger" : "";
    const scaleX_trigger_slide1 = animation === 1 ? "manual_trigger" : "";
    const scaleX_trigger_slide2 = animation === 2 ? "manual_trigger" : "";
    const scaleX_trigger_slide3 = animation === 3 ? "manual_trigger" : "";
    const scaleX_trigger_slide4 = animation === 4 ? "manual_trigger" : "";

    //Content of project slide
    const projec0_info = { title: "Multy-Threaded HTTP Server", body: "something", tools: "", main_image: "", colums_images: [], back_color: "red" };
    const projec1_info = { title: "Investing App Slug Stocks", body: "something", tools: "", main_image: "", colums_images: [], back_color: "white" };
    const projec2_info = { title: "Nasa Rover (Benatar)", body: "something", tools: "", main_image: "", colums_images: [], back_color: "black" };
    const projec3_info = { title: "Class-Professor Matching App", body: "something", tools: "", main_image: "", colums_images: [], back_color: "blue" };
    const projec4_info = { title: "Automated Practice Shooting Targets", body: "something", tools: "", main_image: "", colums_images: [], back_color: "purple" };

    return (
        <>
            <div className="container" id='projects_slider'>
                <AnimatePresence>
                    {project0_display && <Project content={projec0_info} set_display={setProject0_display} />}
                    {project1_display && <Project content={projec1_info} set_display={setProject1_display} />}
                    {project2_display && <Project content={projec2_info} set_display={setProject2_display} />}
                    {project3_display && <Project content={projec3_info} set_display={setProject3_display} />}
                    {project4_display && <Project content={projec4_info} set_display={setProject4_display} />}
                </AnimatePresence>
                <div className='projects_title shine_title'>
                    Projects
                </div>

                <Swiper
                    modules={[EffectCoverflow, Navigation, Autoplay]}
                    effect={'coverflow'}
                    spaceBetween={200}
                    slidesPerView={3}
                    centeredSlides={true}
                    loop={true}
                    loopedSlides={2}
                    navigation={true}
                    autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
                    onSlideChange={(index) => setAnimation(index.realIndex)}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 30,
                        depth: 80,
                        modifier: 3,
                        scale: 1,
                        slideShadows: false,
                    }}
                >
                    <SwiperSlide>
                        <div className={`project_cards server ${scaleX_trigger_slide0}`}>
                            <div className="content">
                                <h2 className='card_title'>HTTP Server</h2>
                                <p className="card_description"> Some description ...</p>
                                <button onClick={() => setProject0_display(true)}>Check Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`project_cards stock_app ${scaleX_trigger_slide1}`}>
                            <div className="content">
                                <h2 className="card_title">Slug Stocks</h2>
                                <p className="card_description"> Some description ...</p>
                                <button onClick={() => setProject1_display(true)}>Check Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`project_cards nasa_rover ${scaleX_trigger_slide2}`}>
                            <div className="content">
                                <h2 className="card_title">NASA Rover</h2>
                                <p className="card_description"> Some description ...</p>
                                <button onClick={() => setProject2_display(true)}>Check Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`project_cards professor_class_matching ${scaleX_trigger_slide3}`}>
                            <div className="content">
                                <h2 className="card_title">Matching App</h2>
                                <p className="card_description"> Some description ...</p>
                                <button onClick={() => setProject3_display(true)}>Check Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`project_cards shooting_range ${scaleX_trigger_slide4}`}>
                            <div className="content">
                                <h2 className="card_title">Shooting Target</h2>
                                <p className="card_description"> Some description ...</p>
                                <button onClick={() => setProject4_display(true)}>Check Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default ProjectSwiper;
