import './intro.css';
import me from '../../img/me8.png';
import CV from '../../assets/Resume.pdf';

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h1 className="i-intro">Hello, My name is</h1>
                    <h2 className="i-name">Jenil Bhalala</h2>
                    
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Learner</div>
                        </div>
                    </div>

                    <p className="i-desc">
                        I have a good problem solving skill with ability to
                        perform well in a team. I am also very passionate
                        about learning new tools and technologies.
                    </p>
                    
                    <div className="i-btns">
                        <a className="i-btn1" href="#contact">Get in Touch</a>
                        <a className="i-btn2" href={CV} download>Download CV</a>
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="my-photo" className="i-img"/>
            </div>
        </div>
    )
}

export default Intro