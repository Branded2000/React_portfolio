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
            <p>Designed an HTTP file handling server with an emphazis on modularity. The server utilizes the HTTP 1.1 protocol, and requests can be made with CURL or NetCat. </p>

            <div>The server is initialized in this form: <div className='command'>./httpserver [-t threads] [-l logfile] [port]</div></div>
            <br></br>
            <div>A request to the server is in this form: <div className='command'>[Method] [URI] [Version]\r\n[Header-Field]\r\n[Message-Body]</div> <em>Note: Header-Fields have to be in the [key: val, ...] pairs</em></div>
            <br></br>
            <div>The responses are logged in a file created by the server and are in the form of: <div className='command'>[Oper],[URI],[Status-Code],[RequestID header value]\n</div></div>
            <br></br>
            <div>The modules of my http server are the follwing: <ul><li>httpserver.h</li> <li>request.c, request.h</li> <li>get.c, get.h</li> <li>put.c, put.h</li> <li>append.c, append.h</li> <li>response.c, response.h</li> <li>linkedlist.c, linkedlist.h</li> <li>queue.c, queue.h</li> <li>hashtable.c, hashtable.h</li> <li>read_write_locks.c, read_write_locks.h</li></ul> The main module, httpserver.c, serves as the core and connects all the other modules to generate the appropriate responses. It also handles logging of incoming requests.</div>

            <p>The request.c module, along with request.h, is responsible for creating a request structure with all the necessary arguments (Method, URI, Version, Header-Fields, Message-body). It looks for the method to perform, validates uri, looks for correct http version, parses the header fields into a linked list, and stores the message-body for later use.</p>

            <p>For handling GET requests, the server uses the get.c module and get.h, which read the content from the specified file and display it to the user. If the request is valid, the response.c module is called to produce a success or failure response.</p>

            <p>PUT requests are handled by the put.c and put.h modules, reading the content from the message body and putting it in the specified file. If the file does not exist, it creates one. Similar to GET requests, the response.c module is called for appropriate responses.</p>

            <p>The append.c and append.h modules handle APPEND requests, reading the content from the message body and appending it to the specified file. Once again, the response.c module handles the response generation.</p>

            <p>The linkedlist.c and linkedlist.h modules implement a linked list data structure, used to store the Header-Fields of a request. This choice was made because the number of Header-Fields in a request is unknown, and a linked list allows dynamic addition of elements. I choosed this data structure because it is O(1) which is constant time opeartions, thus not affecting much the efficiecy of our server</p>

            <p>The server returns specific error responses for different situations, using the response.c module. The error responses are shared between GET, PUT, and APPEND modules, simplifying the error handling process.</p>

            <p>The hash__table.c and hash_table.h module is a hash table that stores uri's and assigns each uri their own lock. By allowing each uri to have their own lock, we can lock the and unlock whenever we want to read or write to the same uri</p>

            <p>The queue.c and queue.h  use an array as a queue that works as a bounded buffer. This data structure is shared by all threads created by our server. I use this data structure as a work queue, our distpatcher thread enques connections while our worker threads dequeue the connections</p>

            <p>The modular approach ensures that each method operates independently, allowing for easy addition or removal of methods without affecting other functionalities. It also aids in debugging specific modules, as they are isolated from others.</p>

            <p>Overall, the server is designed for flexibility, easy maintenance, and efficient error handling, making it scalable and adaptable to future expansions.</p>

            <p>If you would like to view the code, please send me an email. I cannot display the code here or make my github repositoty public, as it could potentially be leaked and undermine the learning experience for future UCSC students.</p> </div>
        , tools: ["Linux, ", "C, ", "Valgrind, ", "NetCat, ", "Git "], main_image: "images/http_server_images/server_diagram.PNG", colums_images: ["images/http_server_images/server.PNG", "images/http_server_images/Append_foo.PNG", "images/http_server_images/Get_foo.PNG", "images/http_server_images/Put_foo.PNG"], back_color: "hsla(0, 0%, 0%, 0.8)"
    };
    const projec1_info = {
        title: "Investing App - Slug Stocks", body: <div className='p_container'>
            <p>Slug Stocks is a stock trading app designed to provide users with real-time stock data and the latest stock news to make informed decisions. The app includes features such as profile creation, a favorite stocks watchlist, friend connections, and interactive stock data displayed as charts. As a team of five, we effectively applied the SCRUM methodology alongside various software engineering practices to develop this app. Slug Stocks was successfully developed within a two-month timeframe, divided into four two-week length sprints.</p>

            <p>Slug Stocks utilizes the TD Ameritrade API for stock trading and the News API to retrieve the most recent stock news. Moreover, to visualize user data, including investments over time, we integrated the Chart.js API.</p>

            <p> With this project, I gained hands-on experience in full-stack web development, working with the SCRUM methodology within a team, and utilizing APIs.</p>

            <button onClick={() => { window.open('https://github.com/Branded2000/slug_stocks', '_blank'); }}>GitHub</button>
        </div>, tools: ["Python, ", "Flask, ", "SQL, ", "HTML, ", "CSS, ", "JavaScript"], main_image: "images/Slug_stocks_images/investments_performance.PNG", colums_images: ["images/Slug_stocks_images/profile_page.PNG", "images/Slug_stocks_images/stock_search_page.PNG", "images/Slug_stocks_images/most_recent_stock_news.PNG", "images/Slug_stocks_images/favotires.PNG"], back_color: "hsla(126, 91%, 9%, 0.8)"
    };
    const projec2_info = {
        title: "Nasa Rover (Benatar)", body: <div className='p_container'>
            <p> Created, built, and developed a prototype of a NASA rover, named Benatar, designed for exploration in rough terrains, item collection, and construction/assembly of structures. Benatar features four wheel motors, four omnidirectional wheels, four shock absorbers, and a robotic hand equipped with six servo motors. To control all the motors effectively we utilized the microcontroller board Arduino UNO. The software was developed using Arduino IDE wich is based in c++ . Additionally, we installed a Bluetooth module to enable remote control of the rover's actions.</p>

            <p> To send commands and manipulate the rover, we developed custom software. We also designed an app specifically for controlling the robotic hand's various different actions.</p>

            <p> Throughout this Internship, I gained valuable experience in developing software for embedded systems and effectively controlling and manipulating the various components of this custom-built rover.</p>

            <p><button style={{ fontFamily: "VT323, monospace" }} onClick={() => { window.open('images/nasa_rover/certification.PNG', '_blank'); }}>Certification</button></p>

            <div><button style={{ fontFamily: "VT323, monospace" }} onClick={() => { window.open('images/nasa_rover/Benatar final Poster.pdf', '_blank'); }}>See Rover Poster</button></div>

            <p><button style={{ fontFamily: "VT323, monospace" }} onClick={() => { window.open('images/nasa_rover/benatar_video.mp4', '_blank'); }}>Watch Rover Demo</button></p>

            <div><button style={{ fontFamily: "VT323, monospace" }} onClick={() => { window.open('https://github.com/Branded2000/Nasa-Rover', '_blank'); }}>GitHub</button></div>

        </div>, tools: ["C++, ", "arduinoUno, ", "arduino IDE, "], main_image: "images/nasa_rover/benatar.PNG", colums_images: ["images/nasa_rover/benatar_2.PNG", "images/nasa_rover/car_sketch.PNG", "images/nasa_rover/hand_sketch.PNG", "images/nasa_rover/hand_prints.PNG"], back_color: "hsla(36, 89%, 11%, 0.8)"
    };
    const projec3_info = {
        title: "Class-Professor Matching App", body: <div className='p_container'>
            <p> Class-Professor Matching was developed by a team of five full-stack developers over a span of six weeks. This interactive, user-friendly, and intuitive application caters to users of all backgrounds. Our emphasis on user experience (UX) ensures that the user interface (UI) is both user-friendly and intuitive.</p>

            <p> With Class-Professor Matching, users can easily create schedules that match classes to professors for a given school year. The app allows for effortless editing of the matches already created and incorporates different views for a comprehensive data analysis.</p>

            <p> Throughout this project, I had the opportunity to leverage my SQL skills by implementing and managing the app's database. Moreover, I reinforced my full-stack web development expertise and honed my ability to collaborate effectively within a team to build a robust web application.</p>

            <button onClick={() => { window.open('https://github.com/danielchandg/ProfessorClassMatching', '_blank'); }}>GitHub</button>
        </div>, tools: ["py4web, ", "vue.js, ", "bulma, ", "python, ", "javascript, ", "html, ", "css"], main_image: "images/prof_class_matching/view1.PNG", colums_images: ["images/prof_class_matching/data_base_setup.PNG", "images/prof_class_matching/matchings.PNG", "images/prof_class_matching/view2.PNG", "images/prof_class_matching/view3_2.0.PNG"], back_color: "hsla(264, 80%, 15%, 0.8)"
    };
    const projec4_info = { title: "Automated Practice Shooting Targets", body: "Coming Soon!", tools: "", main_image: "", colums_images: [], back_color: "hsla(0, 92%, 10%, 0.8)" };

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
                    <div>Projects</div>
                    <div>and</div>
                    <div>Experience</div>
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
                    // autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
                    onSlideChange={(index) => setAnimation(index.realIndex)}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 30,
                        depth: 80,
                        modifier: 3,
                        scale: 1,
                        slideShadows: false,
                    }}
                    className='swiper_large_devices'>
                    <SwiperSlide>
                        <div className={`project_cards server ${scaleX_trigger_slide0}`}>
                            <div className="content">
                                <div className='card_title'>HTTP Server</div>
                                <p className="card_description"> Designed and structured a multithreaded http server with an emphazis on modularity to ensure scalability. The server was built in the c language, and it employs the HTTP 1.1 protocol. The server handles file operations such as READ, WRITE, and APPEND.</p>
                                <button onClick={() => setProject0_display(true)}>Check Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`project_cards stock_app ${scaleX_trigger_slide1}`}>
                            <div className="content">
                                <div className="card_title">Slug Stocks</div>
                                <p className="card_description"> Slug Stocks is a trading application developed in a fast pased environment by a team of 5. By leveraging the SCRUM methodology and adopting various software engineering practices, Slug Stocks successfully completed its Minimum Viable Product (MVP) within a series of sprints.</p>
                                <button onClick={() => setProject1_display(true)}>Check Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`project_cards nasa_rover ${scaleX_trigger_slide2}`}>
                            <div className="content">
                                <div className="card_title">NASA Rover <div>(Internship)</div></div>
                                <p className="card_description"> Designed and built a rover intended for exploration in rough terrains. Developed specific software to control the various parts of the rover, including sensors, movement, and a robotic hand used for item collection.</p>
                                <button onClick={() => setProject2_display(true)}>Check Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`project_cards professor_class_matching ${scaleX_trigger_slide3}`}>
                            <div className="content">
                                <div className="card_title">Matching App</div>
                                <p className="card_description"> This application is designed to assist school departments in creating schedules of classes for professors and students, providing a user-friendly interface for easy viewing. Current methods can be complex and time-consuming, but with this application, the process becomes simplified and efficient.</p>
                                <button onClick={() => setProject3_display(true)}>Check Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`project_cards shooting_range ${scaleX_trigger_slide4}`}>
                            <div className="content">
                                <div className="card_title">Shooting <div>Target</div></div>
                                <p className="card_description"> Comming Soon!</p>
                                {/* <button onClick={() => setProject4_display(true)}>Check Project</button> */}
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
                    // autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
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
                                <div className='card_title'>HTTP Server</div>
                                <p className="card_description"> Designed and structured a multithreaded http server with an emphazis on modularity to ensure scalability. The server was built in the c language, and it employs the HTTP 1.1 protocol. The server handles file operations such as READ, WRITE, and APPEND.</p>
                                <button onClick={() => setProject0_display(true)}>Check Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`project_cards stock_app ${scaleX_trigger_slide1}`}>
                            <div className="content">
                                <div className="card_title">Slug Stocks</div>
                                <p className="card_description">Slug Stocks is a trading application developed in a fast pased environment by a team of 5. By leveraging the SCRUM methodology and adopting various software engineering practices, Slug Stocks successfully completed its Minimum Viable Product (MVP) within a series of sprints.</p>
                                <button onClick={() => setProject1_display(true)}>Check Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`project_cards nasa_rover ${scaleX_trigger_slide2}`}>
                            <div className="content">
                                <div className="card_title">NASA Rover (Internship)</div>
                                <p className="card_description"> Designed and built a rover intended for exploration in rough terrains. Developed specific software to control the various parts of the rover, including sensors, movement, and a robotic hand used for item collection.</p>
                                <button onClick={() => setProject2_display(true)}>Check Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`project_cards professor_class_matching ${scaleX_trigger_slide3}`}>
                            <div className="content">
                                <div className="card_title">Matching App</div>
                                <p className="card_description"> This application is designed to assist school departments in creating schedules of classes for professors and students, providing a user-friendly interface for easy viewing. Current methods can be complex and time-consuming, but with this application, the process becomes simplified and efficient.</p>
                                <button onClick={() => setProject3_display(true)}>Check Project</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`project_cards shooting_range ${scaleX_trigger_slide4}`}>
                            <div className="content">
                                <div className="card_title">Shooting <div>Target</div></div>
                                <p className="card_description"> COMING SOON!</p>
                                {/* <button onClick={() => setProject4_display(true)}>Check Project</button> */}
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
}

export default ProjectSwiper;
