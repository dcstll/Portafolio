import { useEffect } from 'react'
import style from './About.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import logo from '../../img/Logoconcolor.png'

function About() {

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, [])

  return (
    <section className={style.about} data-aos="fade-up">
      <div className={style.infoContainer}>
        <div className={style.aboutLogoContainer}>
          <img className={style.aboutlogo} src={logo} alt="logo" />
        </div>

        <div className={style.aboutText}>
          <h5>Hi! My name is <span className={style.daniela}>Daniela,</span>a full stack developer.</h5>
          <h6>22 years old <span className={style.line}>|</span>From Venezuela currently in Colombia</h6>
        </div>

        <div className={style.skills}>
          <h3>Skills</h3>
          <div className={style.iconskill}>
            <box-icon id={style.iconlogo} type='logo' name='html5' color="tomato" size="cssSize" animation="tada-hover"></box-icon>
            <box-icon id={style.iconlogo} type='logo' name='css3' color="tomato" size="cssSize" animation="tada-hover"></box-icon>
            <box-icon id={style.iconlogo} type='logo' name='javascript' color="tomato" size="cssSize" animation="tada-hover"></box-icon>
            <box-icon id={style.iconlogo} type='logo' name='bootstrap' color="tomato" size="cssSize" animation="tada-hover"></box-icon>
            <box-icon id={style.iconlogo} type='logo' name='react' color="tomato" size="cssSize" animation="tada-hover"></box-icon>
            <box-icon id={style.iconlogo} type='logo' name='figma' color="tomato" size="cssSizes" animation="tada-hover"></box-icon>
            <box-icon id={style.iconlogo} type='logo' name='nodejs' color="tomato" size="cssSizes" animation="tada-hover"></box-icon>
            <box-icon id={style.iconlogo} type='logo' name='mongodb' color="tomato" size="cssSizes" animation="tada-hover"></box-icon>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About