import { isWatch } from "../utils"

function Highlights() {
  return (
    <section id="highlights">
        <div className="highlightsContainer">
            <div className="highlightsLabel">
                <h1>Get the highlights.</h1>
                <a href="">
                    Wacth the film
                    <img src={isWatch} alt="Watch" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Highlights