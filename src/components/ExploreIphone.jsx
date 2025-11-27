import { exploringIphone } from "../constant"

function ExploreIphone() {
  return (
    <section id="exploreIphone">
        <div className="exploreContainer">
            <div className="exploreLabel">
                <h1>Keep exploring iPhone.</h1>
                <a href="">
                    Explore all iPhone
                    <svg height={20} width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#0060c7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </a>
            </div>
            <div className="exploreContent">
                {
                    exploringIphone.map((item) => (
                        <div key={item.id} className="iPhone-group">
                            {
                               item.model.map((phone, index) => (
                                <div key={index} className="product-card">
                                    <div className="image-wrapper">
                                        <img src={phone.image} alt={phone.name} width={280}  />
                                    </div>
                                    <div className="colors">
                                        {phone.colorVariant.map((color) => (
                                            <span 
                                            key={color} 
                                            className="color-swatches"
                                            style={{ backgroundColor: color}} 
                                            title={color}
                                            />
                                        ))}
                                    </div>
                                    <div className="arrival">
                                        <p>{item.arrival}</p>
                                    </div>
                                    <div className="product-info">
                                        <h3>{phone.name}</h3>
                                        <p className="price">{phone.price}</p>
                                        <p className="motto">"{phone.motto}"</p>
                                    </div>
                                    
                                    <ul className="specs">
                                        <li><strong>Display:</strong> {phone.display.join(' - ')}</li>
                                        <li><strong>Chip:</strong> {phone.chip[0]}</li>
                                        <li><strong>Battery:</strong> {phone.baterry[0]}</li> 
                                    </ul>
                                </div>
                               ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default ExploreIphone