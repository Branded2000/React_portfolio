import './App.css';
import NavBar from './nav';
import MatrixBackground from './matrix';
import NameAndPhoto from './shineText_image';
import ProjectSwiper from './projects_swiper';
import Skills from './skills';
import About from './about';
import Contact from './contact';


function Home() {
  return (
    <>
      <div className="Home" id='main_page'>
        <MatrixBackground />
        <div className='header-filler'></div>
        <div className="Home-header">
          <NavBar />
        </div>
        <div className='Home-body'>
          <NameAndPhoto />
          <ProjectSwiper />
          <Skills />
          <About />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home;
