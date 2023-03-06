import React from 'react'
import { useEffect } from 'react'
import style from './Work.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import proyecto1 from '../../img/Captura de pantalla 2022-12-14 200059.png'
import proyecto2 from '../../img/Captura de pantalla 2022-12-14 195408.png'
import proyecto3 from '../../img/Captura de pantalla 2022-12-14 200148.png'
import proyecto4 from '../../img/Captura de pantalla 2022-12-14 195712.png'

function Work() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  }, [])
  return (
    <section className={style.works}>
      <div>
        <img src="" alt="" srcset="" />
      </div>

      <div>
        <img src="" alt="" srcset="" />
      </div>

      <div className={style.projects}>
        <div className={style.project} id="uno" data-aos="fade-up" data-aos-duration="3000">
          <img className={style.imgproject} src={proyecto1} alt="proyecto"/>
          <div className={style.infoproject}>
            <h4>Landing Page Recreation </h4>
            <span class>html</span><span>css</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button className='code'><box-icon name='code-alt'size="cssSize"></box-icon></button>
            <button className='liveview'> Live View </button>
          </div>
        </div>
        <div className={style.project} id="dos" data-aos="fade-up" data-aos-duration="3000">
          <div className={style.infoproject}>
            <h4>Calculator</h4>
            <span className='js'>javascript</span><span>css</span><span>css</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button className='code'><box-icon name='code-alt'size="cssSize"></box-icon></button>
            <button className='liveview'> Live View </button>
          </div>
          <img className={style.imgproject} src={proyecto2} alt=""/>
        </div>
        <div className={style.project} id="tres" data-aos="fade-up" data-aos-duration="3000">
          <img className={style.imgproject} src={proyecto3}/>
          <div className={style.infoproject}>
            <h4>Wheel of Moles</h4>
            <span className='js'>javascript</span><span>css</span><span>css</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button className='code'><box-icon name='code-alt' size="cssSize"></box-icon></button>
            <button className='liveview'> Live View </button>
          </div>
        </div>
        <div className={style.project} id="cuatro" data-aos="fade-up" data-aos-duration="3000">
        <div className={style.infoproject}>
            <h4>Rick and Morty</h4>
            <span className='react'>ReactJS</span><span className='api'>API</span><span>html</span><span>css</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button className='code'><box-icon name='code-alt' size="cssSize"></box-icon></button>
            <button className='liveview'> Live View </button>
          </div>
          <img className={style.imgproject} src={proyecto4} alt=""/>
        </div>
      </div>

    </section>
  )
}
export default Work