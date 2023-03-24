import React from 'react'
import { useEffect } from 'react'
import style from './Work.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import proyecto1 from '../../img/Captura de pantalla 2022-12-14 200059.png'
import proyecto2 from '../../img/Captura de pantalla 2022-12-14 195408.png'
import proyecto3 from '../../img/Captura de pantalla 2022-12-14 200148.png'
import proyecto4 from '../../img/Captura de pantalla 2022-12-14 195712.png'
import gato from '../../img/Logoconcolor.png'
import fresa from '../../img/fresarecortada.png'

function Work() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <section className={style.works}>
      <div className={style.introduction} data-aos="fade-up" data-aos-duration="3000">
        <div className={style.gato}>
          <img src={gato} alt="logo" />
          <div className={style.ojos}></div>
        </div>

        <div className={style.fresa}>
          <img src={fresa} alt="logo" />
        </div>

        <div className={style.text}>
          <h2>Some things <br /> I've worked on</h2>
        </div>
      </div>



      <div className={style.projects}>
        {/* <div className={style.project} id="uno" data-aos="fade-up" data-aos-duration="3000">
          <img className={style.imgproject} src={proyecto1} alt="proyecto" />
          <div className={style.paperclip}>
            <box-icon name='paperclip' size='lg' animation='tada-hover' color="#F9BC60"></box-icon>
          </div>
          <div className={style.infoproject}>
            <h4>Landing Page Recreation </h4>
            <span>html</span><span>css</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className={style.btns}>
              <a href="" target="_blank" rel="noopener noreferrer">
                <button className={style.code}>
                  <box-icon name='code-alt' size="cssSize"></box-icon>
                </button>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <button className={style.liveview}> Live View </button>
              </a>
            </div>
          </div> */}
        {/* </div> */}
        <div className={style.project} id="dos" data-aos="fade-up" data-aos-duration="3000">
          <div className={style.infoproject}>
            <h4>Calculator</h4>
            <span className='js'>javascript</span><span>css</span><span>css</span>
            <p>Web application for calculation, simple user interface.</p>
            <div className={style.btns}>
              <a href="https://github.com/dcstll/Calculator" target="_blank" rel="noopener noreferrer">
                <button className={style.code}>
                  <box-icon name='code-alt' size="cssSize"></box-icon>
                </button>
              </a>
              <a href="https://dcstll-calculator.netlify.app/" target="_blank" rel="noopener noreferrer">
                <button className={style.liveview}> Live View </button>
              </a>
            </div>
          </div>
          <div className={style.paperclip}>
            <box-icon name='paperclip' size='lg' animation='tada-hover' color="#F9BC60"></box-icon>
          </div>
          <img className={style.imgproject} src={proyecto2} alt="" />
        </div>
        <div className={style.project} id="tres" data-aos="fade-up" data-aos-duration="3000">
          <img className={style.imgproject} src={proyecto3} />
          <div className={style.paperclip}>
            <box-icon name='paperclip' size='lg' animation='tada-hover' color="#F9BC60"></box-icon>
          </div>
          <div className={style.infoproject}>
            <h4>Wheel of Moles</h4>
            <span className='js'>javascript</span><span>css</span><span>css</span>
            <p>New version of the classic game "wheel of doom"</p>
            <div className={style.btns}>
              <a href="https://github.com/karen1278/Wheel-of-Doom" target="_blank" rel="noopener noreferrer">
                <button className={style.code}>
                  <box-icon name='code-alt' size="cssSize"></box-icon>
                </button>
              </a>
              <a href="https://wheel-of-doom.netlify.app/" target="_blank" rel="noopener noreferrer">
                <button className={style.liveview}> Live View </button>
              </a>
            </div>
          </div>
        </div>
        <div className={style.project} id="cuatro" data-aos="fade-up" data-aos-duration="3000">
          <div className={style.infoproject}>
            <h4>Rick and Morty</h4>
            <span className='react'>ReactJS</span><span className='api'>API</span><span>html</span><span>css</span>
            <p>A web application to find all the characters of the cartoon.</p>
            <div className={style.btns}>
              <a href="https://github.com/dcstll/react-RickandMorty" target="_blank" rel="noopener noreferrer">
                <button className={style.code}>
                  <box-icon name='code-alt' size="cssSize"></box-icon>
                </button>
              </a>
              <a href="https://dcstll.github.io/react-RickandMorty/" target="_blank" rel="noopener noreferrer">
                <button className={style.liveview}> Live View </button>
              </a>
            </div>
          </div>
          <div className={style.paperclip}>
            <box-icon name='paperclip' size='lg' animation='tada-hover' color="#F9BC60"></box-icon>
          </div>
          <img className={style.imgproject} src={proyecto4} alt="" />
        </div>
      </div>

    </section>
  )
}
export default Work