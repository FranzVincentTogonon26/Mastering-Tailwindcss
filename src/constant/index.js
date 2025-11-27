import { 
    isCard1, 
    isCard2, 
    isCard3, 
    isIphone17Pro, 
    isIphoneAir 
} from "../utils";

export const navList = [
    {
        href : '#store',
        description : 'Store'
    },
    {
        href : '#mac',
        description : 'Mac'
    },
    {
        href : '#ipad',
        description : 'iPad'
    },
    {
        href : '#iphone',
        description : 'iPhone'
    },
    {
        href : '#watch',
        description : 'Watch'
    },
    {
        href : '#airpods',
        description : 'Airpods'
    },
    {
        href : '#tv_home',
        description : 'TV & Home'
    },
    {
        href : '#entern',
        description : 'Entertainment'
    },
    {
        href : '#accessories',
        description : 'Accessories'
    },
    {
        href : '#support',
        description : 'Support'
    }
];

export const shopList = [
    {
        id : 1,
        type : "Free Delivery",
        title :  "Get your order quickly and easily.",
        description : "Get free delivery direct to your door.",
        img : isCard1
    },
    {
        id : 2,
        type : "Guided Shopping",
        title :  "Shop one on one with a Specialist online.",
        description : "Choose your next iPhone with help from a Specialist online.",
        img : isCard2
    },
    {
        id : 3,
        type : "Apple Store App",
        title :  "Explore a shopping experience designed around you.",
        description : "Use the app to get a more personal way to shop.",
        img : isCard3
    }
];

export const exploringIphone = [
    {
        id : 1,
        arrival : 'new',
        model: [
            {
                image : isIphone17Pro,
                name : 'iPhone 17 Pro',
                price : '₱79,990',
                motto : 'Innovative design for ultimate performance and battery life.',
                colorVariant : ['#f77e2d','#32374a','#f5f5f5'], 
                display : ['6.9″ or 6.3″', 'Super Retina XDR display5'],
                camera : ['48MP Pro Fusion camera system','48MP Fusion Main','48MP Fusion Ultra Wide','48MP Fusion Telephoto'],
                chip : ['A19 Pro chip', '6‑core GPU with Neural Accelerators'],
                baterry : ['Up to 37 hours video playback10'],
                ai : ['Built for Apple Intelligence1','The innovative design for iPhone 17 Pro delivers exceptional durability, breakthrough battery life, and unlocks the extraordinary power of the A19 Pro chip. The 48MP Pro Fusion camera system has the longest iPhone Telephoto ever with 8x optical-quality zoom, and the new Center Stage front camera for smarter group selfies and Dual Capture video. It has Ceramic Shield 2 on the front for 3x better scratch resistance, a 4x more crack-resistant Ceramic Shield back, and a forged aluminum unibody that dissipates heat. Helpful Apple Intelligence tools like Clean Up and more.']
            }
        ],
        
    },
    {
        id : 2,
        arrival : 'new',
        model: [
            {
                image : isIphoneAir,
                name : 'iPhone Air',
                price : '₱72,990',
                motto : 'The thinnest iPhone ever.With the power of pro inside.',
                colorVariant : ['#f0f9ff','#fffcf5','#fcfcfc','#000000'], 
                display : ['6.5″', 'Super Retina XDR display5'],
                camera : ['48MP Fusion camera system','48MP Fusion Main','-','-'],
                chip : ['A19 Pro chip', '5‑core GPU with Neural Accelerators'],
                baterry : ['Up to 27 hours video playback10'],
                ai : ['Built for Apple Intelligence1','iPhone Air is the thinnest iPhone ever, powered by the A19 Pro chip. It’s more durable than any previous iPhone, with a polished titanium frame, a 3x better scratch-resistant Ceramic Shield 2 front, and a 4x more crack-resistant Ceramic Shield back. Smarter group selfies and Dual Capture video with the new Center Stage front camera. The 48MP Fusion Main camera with 2x Telephoto supports the latest advanced features like next‑generation portraits and more. Immersive 6.5‑inch Super Retina XDR display with ProMotion up to 120Hz. All‑day battery life. Helpful Apple Intelligence tools like Clean Up and more.']
            }
        ],
        
    }
];