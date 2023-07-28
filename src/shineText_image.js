import Typed from 'react-typed';
import './shineText_photo.css'

function NameAndPhoto() {
    return (
        <section className='photo_name_container'>
            <div className='image_logos'>
                <img className='bf_photo' src='images/Morpheous_Matrix.png' alt='bf'></img>
                <div className='logo_wrapper'>
                    <a href="https://github.com/Branded2000" target="_blank" rel="noopener noreferrer">
                        <div className="git">
                            <div className="back_color_git shine"></div>
                            {/* <div className="logo_back_white_shade"></div> */}
                            <img src="images/GitHub_Logo.png" width="30px" height="30px" alt='git_img'></img>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/brandon--fuentes2000/" target="_blank" rel="noreferrer">
                        <div className="linked_in">
                            <div className="back_color_linked shine"></div>
                            {/* <div className="logo_back_white_shade"></div> */}
                            <img src="images/linkedin-logo-png-2048.png" width="30px" height="30px" alt='linked_img'></img>
                        </div>
                    </a>
                </div>
            </div>
            <div className='name_paragraph'>
                <p className='first_p'>Hi! My name is </p>
                <div className='name'>Brandon Fuentes</div>
                <div className='wrapper'>
                    <p className='second_p'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and I am a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <Typed className='type_p'
                        strings={['Software Developer!', 'Programmer!']}
                        typeSpeed={150}
                        loop
                    />
                </div>
            </div>
        </section >
    );
}

export default NameAndPhoto;
