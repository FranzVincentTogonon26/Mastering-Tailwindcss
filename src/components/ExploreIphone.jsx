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
                                        <p className="motto">{phone.motto}</p>
                                        <p className="price">{phone.price}</p>
                                        {
                                            item.id == 1 ? <span >Currently viewing</span> : <a href="" className="link-view">Learn more</a>
                                        }
                                        <a href="" className="buyBtn">
                                            Buy
                                            <svg height={18} width={18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#0060c7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </a>
                                        <span className="slice" />
                                        <div className="phoneDisplay">
                                            <h3>{phone.display[0]}</h3>
                                            <p>{phone.display[1]}</p>
                                        </div>
                                        <div className="cameraDisplay">
                                            <img  src={phone.cameraIcon} alt="" width={45}/>
                                            {
                                                phone.cameraText.map((text,  i) => (
                                                    <p key={i} >{text}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="chip">
                                            <img  src={phone.chipIcon} alt="" width={45}/>
                                            {
                                                phone.chip.map((text,  i) => (
                                                    <p key={i} >{text}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="battery">
                                            <img  src={phone.batteryIcon} alt="" width={45}/>
                                            {
                                                phone.baterry.map((text,  i) => (
                                                    <p key={i} >{text}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="AI">
                                            <img  src={phone.ai_Icon} alt="" width={45}/>
                                            <label>{phone.ai_title}</label>
                                            <p>{phone.ai_description}</p>
                                        </div>
                                    </div>
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