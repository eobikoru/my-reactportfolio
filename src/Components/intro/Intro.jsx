import './Intro.css'
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import { init } from "ityped";
 import{useEffect, useRef} from 'react'
  

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      showCursor:true,
      strings:['developer ', 'designer -', 'content creator']
    } )
    
  },[])
  return (
    <div className="intro" id="intro">
      <div className="introleft">
        <Fade left>
          <div className="containerimg">
            {/* <img src="assets/emeka1.jpg" alt="" /> */}
          </div>
        </Fade>
      </div>
      <Jump>
        <div className="introright">
          <h2>Hi there, I'm</h2>
          <h1>Obikoru emeka</h1>
          <div className="typical">
            <h3>
              Freelance <span className='textref' ref={textRef}></span>
            </h3>
          </div>
        </div>
      </Jump>
      <a href="#portfolio">potfolio</a>
    </div>
  );
}

export default Intro;
