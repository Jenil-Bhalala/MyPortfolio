import './about.css'
import me from '../../img/me5.jpg';

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img
                    src={me}
                    alt=""
                    className="a-img"
                />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                I have completed my primary and secondary education in Surat and 
                I got 94.33% in my 10th gseb board and 92.6% in my 12th science with ACPC rank 115.
            </p>
            <p className="a-desc">
                I have just completed my 7th semester from Dharmsinh Desai University, Nadiad, Gujarat.
                I have joined Simform company, Ahmedabad as an intern. 
            </p>
        </div>
    </div>
  )
}

export default About