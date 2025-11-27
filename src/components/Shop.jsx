import { shopList } from "../constant"

function Shop() {
  return (
    <section id="shop">
        <div className="shopContainer">
            <div className="shopLabel">
                <h1>Why Apple is the best <br /> place to buy iPhone.</h1>
                <a href="">
                    Shop IPhone
                    <svg height={20} width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#0060c7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </a>
            </div>
            <div className="shopContent">
                {
                    shopList.map((list) => (
                        <div key={list.id} className="shopCard">
                            <div className="cardContent">
                                <p className="cardType">{list.type}</p>
                                <p className="cardTitle">{list.title}</p>
                                <p className="cardDescription">{list.description}</p>
                            </div>
                            <div className="cardImage">
                                <img src={list.img} alt="Photo" />
                                <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Shop