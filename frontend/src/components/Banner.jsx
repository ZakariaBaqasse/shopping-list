import classes from './Banner.module.css'

const Banner = () => {
  return (
    <nav className={`${classes.banner}`}>
        <img src="/assets/logo.png" className={`${classes.logo}`}/>
        <h2>La maison jungle</h2>
    </nav>
  )
}

export default Banner