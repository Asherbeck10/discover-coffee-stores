
import Styles from './Banner.module.css'

const Banner =(props)=> {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>
        <span className={Styles.title1}>Coffee</span> 
        <span className={Styles.title2}>Connoisseur</span>
        </h1>
      <p>Discover your local coffee shop! </p>
      <div className={Styles.buttonWrapper }>
      <button className={Styles.button} onClick={props.handelOnClick}>{props.buttonText}</button>
      </div>
    </div>
  )
}

export default Banner
