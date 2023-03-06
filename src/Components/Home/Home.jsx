import style from './Home.module.css'
import logo from '../../img/Logoconcolor.png'
import fresa from '../../img/fresa.png'

function Home() {
    return (
        <section className={style.gridcontainer}>
            <div className={style.Grid}>
                <div className={style.item} id={style.uno}><img src={logo} alt="logo"/></div>
                <div className={style.item} id={style.dos}><h1>DANIELA CASTILLO</h1></div>
                <div className={style.item} id={style.tres}><p>Full Stack Developer. Based in Colombia.</p></div>
                <div className={style.item} id={style.cuatro}><img src={fresa} alt="fresa" /></div>
                <div className={style.item} id={style.cinco}></div>
            </div>
        </section>
    )
}

export default Home