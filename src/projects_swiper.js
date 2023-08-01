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
    const projec0_info = {
        title: "Multy-Threaded HTTP Server", body: <div className='p_container'>
            <p>Designed an HTTP server with a modular structure, consisting of several modules. The main module, httpserver.c, serves as the core and connects all the other modules to generate the appropriate responses. It also handles logging of incoming requests.</p>

            <p>The request.c module, along with request.h, is responsible for creating a request structure with all the necessary arguments (Method, URI, Version, Header-Fields, Message-body). It parses the header fields into a linked list, which is deleted for each new request. It also points to the first letter of the message body for later use in PUT or APPEND requests.</p>

            <p>For handling GET requests, the server uses the get.c module and get.h, which read the content from the specified file and display it to the user. If the request is valid, the response.c module is called to produce a success or failure response.</p>

            <p>PUT requests are handled by the put.c and put.h modules, reading the content from the message body and putting it in the specified file. If the file does not exist, it creates one. Similar to GET requests, the response.c module is called for appropriate responses.</p>

            <p>The append.c and append.h modules handle APPEND requests, reading the content from the message body and appending it to the specified file. Once again, the response.c module handles the response generation.</p>

            <p>The linkedlist.c and linkedlist.h modules implement a linked list data structure, used to store the Header-Fields of a request. This choice was made because the number of Header-Fields in a request is unknown, and a linked list allows dynamic addition of elements.</p>

            <p>The server returns specific error responses for different situations, using the response.c module. The error responses are shared between GET, PUT, and APPEND modules, simplifying the error handling process.</p>

            <p>The modular approach ensures that each method operates independently, allowing for easy addition or removal of methods without affecting other functionalities. It also aids in debugging specific modules, as they are isolated from others.</p>

            <p>Overall, the server is designed for flexibility, easy maintenance, and efficient error handling, making it scalable and adaptable to future expansions.</p>
        </div>, tools: ["Linux, ", "C, ", "Valgrind, ", "NetCat, ", "Git "], main_image: "images/http_server_images/server_diagram.PNG", colums_images: ["images/http_server_images/server.PNG", "images/http_server_images/Append_foo.PNG", "images/http_server_images/Get_foo.PNG", "images/http_server_images/Put_foo.PNG"], back_color: "black"
    };
    const projec1_info = { title: "Investing App Slug Stocks", body: "something", tools: "", main_image: "", colums_images: [], back_color: "white" };
    const projec2_info = { title: "Nasa Rover (Benatar)", body: "something", tools: "", main_image: "", colums_images: [], back_color: "black" };
    const projec3_info = { title: "Class-Professor Matching App", body: "something", tools: "", main_image: "", colums_images: [], back_color: "blue" };
    const projec4_info = { title: "Automated Practice Shooting Targets", body: "something", tools: "", main_image: "", colums_images: [], back_color: "purple" };

    return (
        <>
            <section className="container" id='projects_slider'>
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
                    className='swiper_large_devices'
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

                <Swiper
                    modules={[EffectCoverflow, Navigation, Autoplay]}
                    effect={'coverflow'}
                    spaceBetween={200}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    loopedSlides={1}
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
                    className='swiper_small_devices'
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
            </section>
        </>
    );
}

export default ProjectSwiper;
