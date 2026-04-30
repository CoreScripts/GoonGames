/*
    
  QUICK REFERENCE FOR URLS:
  Iframe: games/loader.html?url=[INSERT URL SITE]
  SWF:    games/loader.html?url=games/assets/[INSERT FILE].swf
  
*/

const proxy = (url) => `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=300&h=300&fit=cover&output=webp`;

const GAMES_DATA = [
    {
        id: "0",
        title: "Parking Fury",
        image: proxy("https://www.coolmathgames.com/sites/default/files/ParkingFury_OG-logo.jpg"),
        url: "games/loader.html?url=https://jasongamesdev.github.io/parking-fury/",
    },
    {
        id: "1",
        title: "Level Devil",
        image: proxy("https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3242750/header.jpg"),
        url: "games/loader.html?url=https://jasongamesdev.github.io/level-devil/"
    },
    {
        id: "2",
        title: "Hill Climb Racing",
        image: proxy("https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/b87616bb88c0e3cb4c150c59fdc767fa/hill-climb-racing-lite.png"),
        url: "games/loader.html?url=https://zipygames.github.io/g/hill-climb-racing/main.html" 
    },
    {
        id: "3",
        title: "Poly Track",
        image: proxy("https://uhighmidway.com/wp-content/uploads/2025/03/25-0331-PolyTrack.png"),
        url: "games/loader.html?url=https://smapskajendfjshwbekf-prog.github.io/newcargame/"
    },
    {
        id: "4",
        title: "Geometry Dash",
        image: proxy("https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/322170/header.jpg"),
        url: "games/loader.html?url=https://gamingshitposting.github.io/ext-bin-1/geometrylite.io/game/geometry-dash-full-version/index.html"
    }
];
