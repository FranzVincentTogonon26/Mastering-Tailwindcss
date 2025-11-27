// import { useMediaQuery } from "react-responsive"
import { isDesktopHero } from "../utils"

function Hero() {

  // const isMobile = useMediaQuery({ query: 'max-width: ' })


  return (
    <section id="hero" >
       <div className="heroContent">
           <img src={isDesktopHero} alt="Hero" />
       </div>
       <div className="heroComponents">
          <a href="" className="btn">Buy</a>
          <p>From  ₱79,990</p>
       </div>
    </section>
  )
}

export default Hero