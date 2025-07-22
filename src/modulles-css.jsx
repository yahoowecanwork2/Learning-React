
import style from './css/style.module.css'
import women3 from "./assets/images/women-3.jpg";
function Module() {

    return (
        <div>
            <h1 className={style.heading}>module css</h1>
            <div >
                <div className={style.box}>
                    <img src={women3} className={style.image} alt="women" />

                    <div >
                        <h3>Neha yadav</h3>
                        <p>front end developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Module;